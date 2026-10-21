// Sparky Study reminder service. Runs every 15 minutes in GitHub Actions (.github/workflows/reminders.yml).
// 1. Reads new messages the phone app (and the PC app) posted to the private ntfy.sh topic: lessons done, reminder sign-ups, tests.
// 2. Keeps its memory in two places: private.json in the Actions cache (push keys, phone push addresses, what was sent today)
//    and the public state.json on the "state" branch (days a lesson was done, the public push key), which the app reads.
// 3. Sends a web push to each phone: at its reminder time if no lesson was done today, and a last warning at 21:30 if the streak is at risk.
import fs from "node:fs";
import webpush from "web-push";

const { RELAY, PRIVATE_FILE, PUBLIC_FILE, GITHUB_OUTPUT } = process.env;
const LAST_CALL = "21:30";

const read = (f, d) => { try { return JSON.parse(fs.readFileSync(f, "utf8")); } catch (e) { return d; } };
const S = Object.assign({ subs: {}, sent: {}, seen: [] }, read(PRIVATE_FILE, {}));
const PUB = read(PUBLIC_FILE, {});
S.days = [...new Set([...(PUB.days || []), ...(S.days || [])])];
const before = JSON.stringify(S), pubBefore = JSON.stringify(PUB);

// Push keys live only in the private cache. If the cache is ever lost, new keys are made and the app signs up again when next opened.
if (!S.vapid) { S.vapid = webpush.generateVAPIDKeys(); S.subs = {}; console.log("Made new push keys"); }
webpush.setVapidDetails("mailto:sparky-study@users.noreply.github.com", S.vapid.publicKey, S.vapid.privateKey);

// ---- 1. new messages (ntfy keeps them 12 hours; this runs every 15 minutes) ----
const res = await fetch(RELAY + "/json?poll=1&since=12h");
if (!res.ok) throw new Error("relay " + res.status);
const msgs = (await res.text()).split("\n").filter(Boolean).map(l => JSON.parse(l)).filter(m => m.event === "message");
const seen = new Set(S.seen);
for (const m of msgs.sort((a, b) => a.time - b.time)) {
  if (seen.has(m.id)) continue; seen.add(m.id);
  let x; try { x = JSON.parse(m.message); } catch (e) { continue; }
  const dev = String(x.dev || "unknown").slice(0, 40);
  if (x.t === "done" && /^\d{4}-\d\d-\d\d$/.test(x.day)) { if (!S.days.includes(x.day)) S.days.push(x.day); }
  else if (x.t === "sub") {
    const s = S.subs[dev] || {};
    if (x.sub && x.sub.endpoint) { s.sub = x.sub; s.welcome = true; }
    if (/^\d\d:\d\d$/.test(x.time || "")) s.time = x.time;
    if (x.tz) s.tz = String(x.tz).slice(0, 60);
    s.on = x.on !== false; s.updated = x.at;
    if (s.sub) S.subs[dev] = s;
  }
  else if (x.t === "off" && S.subs[dev]) S.subs[dev].on = false;
  else if (x.t === "test" && S.subs[dev]) S.subs[dev].test = true;
}
S.seen = [...seen].slice(-300);
S.days = S.days.sort().slice(-400);

// ---- 2/3. reminders ----
const local = tz => {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-GB", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
    .formatToParts(new Date()).map(x => [x.type, x.value]));
  return { day: `${p.year}-${p.month}-${p.day}`, hm: `${p.hour}:${p.minute}` };
};
const prev = k => { const d = new Date(k + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() - 1); return d.toISOString().slice(0, 10); };
function streak(today) {
  const has = new Set(S.days);
  let k = has.has(today) ? today : prev(today), n = 0;
  while (has.has(k)) { n++; k = prev(k); }
  return n;
}
async function push(dev, s, payload) {
  try { await webpush.sendNotification(s.sub, JSON.stringify(payload), { TTL: 3 * 3600, urgency: "high" }); console.log("sent", dev, payload.title); return true; }
  catch (e) {
    console.log("push failed", dev, e.statusCode, e.body);
    if (e.statusCode === 404 || e.statusCode === 410 || e.statusCode === 403) delete S.subs[dev];   // phone removed the app or the key changed
    return false;
  }
}
for (const [dev, s] of Object.entries(S.subs)) {
  const { day, hm } = local(s.tz || "Europe/London");
  const done = S.days.includes(day), n = streak(day);
  const sent = S.sent[dev] = S.sent[dev] && S.sent[dev].day === day ? S.sent[dev] : { day };
  if (s.welcome) { delete s.welcome; await push(dev, s, { title: "⚡ Sparky reminders are on", body: `You'll get a nudge at ${s.time || "19:00"} if you haven't done a lesson that day.`, clearBadge: done }); }
  if (s.test) { delete s.test; await push(dev, s, { title: "⚡ Test from Sparky", body: "Reminders are working.", clearBadge: done }); }
  if (!s.on || done || !S.subs[dev]) continue;
  const time = s.time || "19:00";
  if (n > 0 && hm >= LAST_CALL && hm < "23:59" && !sent.last) {
    sent.last = sent.remind = true;
    await push(dev, s, { title: `🔥 Your ${n}-day streak is about to end!`, body: "Do one quick lesson before midnight to save it.", tag: "sparky-last" });
  } else if (hm >= time && hm < "23:59" && !sent.remind) {
    sent.remind = true;
    await push(dev, s, n > 0
      ? { title: "⚡ Time for today's lesson", body: `Keep your ${n}-day streak going. It only takes 5 minutes.` }
      : { title: "⚡ Time for today's lesson", body: "Do one lesson today to start a streak." });
  }
}
for (const dev of Object.keys(S.sent)) if (!S.subs[dev]) delete S.sent[dev];

// public summary the app reads (no push addresses in it)
const pub = { vapidPublic: S.vapid.publicKey, days: S.days, subs: Object.fromEntries(Object.entries(S.subs).map(([d, s]) => [d, { on: s.on, time: s.time }])) };
const out = [];
if (JSON.stringify(S) !== before) { fs.writeFileSync(PRIVATE_FILE, JSON.stringify(S)); out.push("private=1"); }
if (JSON.stringify(pub) !== pubBefore) { fs.writeFileSync(PUBLIC_FILE, JSON.stringify(pub, null, 1) + "\n"); out.push("public=1"); }
if (GITHUB_OUTPUT && out.length) fs.appendFileSync(GITHUB_OUTPUT, out.join("\n") + "\n");
console.log("changed:", out.join(" ") || "nothing");
