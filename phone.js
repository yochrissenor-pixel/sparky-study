// iPhone home-screen version of Sparky Study (window.sparkyPhone, used by app.js as M).
// Reminders are sent by the GitHub Action in reminders/remind.mjs, so they arrive with the app closed.
// The phone talks to it through a private ntfy.sh topic (CFG.relay) and reads back state.json (CFG.state):
// the days a lesson was done on any device, the push key and which phones are signed up.
(function () {
"use strict";
const CFG = window.SPARKY_PHONE_CFG;
const DEV_KEY = "sparkystudy.device";
const pad = n => String(n).padStart(2, "0");
const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const addDays = (k, n) => { const d = new Date(k + "T12:00:00"); d.setDate(d.getDate() + n); return dayKey(d); };

let dev;
try { dev = localStorage.getItem(DEV_KEY); if (!dev) { dev = "iphone-" + Math.random().toString(36).slice(2, 10); localStorage.setItem(DEV_KEY, dev); } }
catch (e) { dev = "iphone"; }

const installed = () => navigator.standalone === true || matchMedia("(display-mode: standalone)").matches;
const pushOK = () => "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;

let REMOTE = null, getS = null, saveS = null, rerender = null;

function send(msg) {
  return fetch(CFG.relay, { method: "POST", body: JSON.stringify(Object.assign({ dev, at: new Date().toISOString() }, msg)) })
    .then(r => r.ok).catch(() => false);
}
// Lessons done while offline wait here and go when the phone is back online.
const OUTBOX = "sparkystudy.outbox";
function queue(msg) {
  let q = []; try { q = JSON.parse(localStorage.getItem(OUTBOX) || "[]"); } catch (e) { /* ignore */ }
  q.push(msg); try { localStorage.setItem(OUTBOX, JSON.stringify(q.slice(-30))); } catch (e) { /* ignore */ }
  return flush();
}
async function flush() {
  let q = []; try { q = JSON.parse(localStorage.getItem(OUTBOX) || "[]"); } catch (e) { return; }
  while (q.length) { if (!(await send(q[0]))) break; q.shift(); try { localStorage.setItem(OUTBOX, JSON.stringify(q)); } catch (e) { break; } }
}

async function fetchState() {
  try { const r = await fetch(CFG.state + "?t=" + Date.now(), { cache: "no-store" }); if (r.ok) REMOTE = await r.json(); } catch (e) { /* offline */ }
  return REMOTE;
}
// One streak for PC and phone: count back from today (or yesterday) over every day a lesson was done anywhere.
function mergeStreak(S) {
  const days = new Set(Object.keys(S.days || {}).filter(k => S.days[k] > 0));
  for (const k of (REMOTE && REMOTE.days) || []) days.add(k);
  const today = dayKey();
  let end = days.has(today) ? today : days.has(addDays(today, -1)) ? addDays(today, -1) : null;
  if (!end) return false;
  let n = 0; for (let k = end; days.has(k); k = addDays(k, -1)) n++;
  if (S.streak.last === end && S.streak.count === n) return false;
  S.streak.last = end; S.streak.count = n; S.streak.best = Math.max(S.streak.best || 0, n);
  return true;
}

function badge(S) {
  if (!navigator.setAppBadge) return;
  const at = S.streak.last !== dayKey();
  (at ? navigator.setAppBadge(1) : navigator.clearAppBadge()).catch(() => {});
}

async function subscribe(S, save) {
  const perm = await Notification.requestPermission();
  if (perm !== "granted") return "blocked";
  const st = REMOTE || await fetchState();
  if (!st || !st.vapidPublic) return "nokey";
  const reg = await navigator.serviceWorker.ready;
  let sub = await reg.pushManager.getSubscription();
  if (sub && S.settings.pushKey !== st.vapidPublic) { await sub.unsubscribe(); sub = null; }
  if (!sub) sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64u(st.vapidPublic) });
  S.settings.pushKey = st.vapidPublic; S.settings.reminder = true; save();
  const ok = await send({ t: "sub", sub: sub.toJSON(), on: true, time: S.settings.time, tz: tz() });
  return ok ? "ok" : "offline";
}
const tz = () => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/London"; } catch (e) { return "Europe/London"; } };
function b64u(s) {
  const raw = atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4));
  return Uint8Array.from(raw, c => c.charCodeAt(0));
}

function reminderCard(h, S, save) {
  const set = S.settings, me = REMOTE && REMOTE.subs && REMOTE.subs[dev];
  const status = h("div", { class: "small", style: "margin-top:8px" });
  const say = t => { status.textContent = t; };
  const card = h("div", { class: "card" }, h("b", {}, "Daily reminder"));
  if (!installed()) {
    card.append(h("div", { class: "muted small" }, "Reminders only work once Sparky is on your Home Screen."),
      h("ol", { class: "small steps" },
        h("li", {}, "In Safari, tap the Share button (the square with the arrow)."),
        h("li", {}, "Scroll down and tap ", h("b", {}, "Add to Home Screen"), ", then ", h("b", {}, "Add"), "."),
        h("li", {}, "Open Sparky from your Home Screen and come back here.")));
    return card;
  }
  if (!pushOK()) { card.append(h("div", { class: "muted small" }, "This iPhone can't get web reminders. Update to iOS 16.4 or newer (Settings > General > Software Update).")); return card; }
  card.append(h("div", { class: "muted small" }, "A notification at your time if you haven't done a lesson today (on your phone or PC). If your streak is at risk, a last warning comes at 21:30. They can arrive up to 20 minutes late."));
  const time = h("input", { type: "time", value: set.time, onchange: e => { set.time = e.target.value || "19:00"; save(); if (set.reminder) send({ t: "sub", on: true, time: set.time, tz: tz() }).then(ok => say(ok ? "✅ Time saved." : "⚠️ Couldn't reach the internet. Try again.")); } });
  const on = Notification.permission === "granted" && set.reminder;
  card.append(h("div", { class: "row", style: "margin-top:10px" },
    on ? h("span", {}, "Remind me at ") : null, on ? time : null,
    h("button", { class: "btn" + (on ? " ghost" : ""), onclick: async () => {
      if (on) { set.reminder = false; save(); await send({ t: "off" }); rerender && rerender(); return; }
      say("Setting up…");
      const r = await subscribe(S, save).catch(e => "err:" + e.message);
      say(r === "ok" ? "✅ Reminders are on. A welcome notification will arrive in the next 20 minutes."
        : r === "blocked" ? "Notifications are turned off for Sparky. Go to iPhone Settings > Notifications > Sparky and turn on Allow Notifications, then try again."
        : r === "nokey" ? "The reminder service isn't ready yet. Try again in a few minutes."
        : r === "offline" ? "Couldn't reach the internet. Try again when you're online." : "Something went wrong (" + r + ").");
      if (r === "ok") setTimeout(() => rerender && rerender(), 2500);
    } }, on ? "Turn off" : "Turn on reminders"),
    on ? h("button", { class: "btn ghost", onclick: async () => { const ok = await send({ t: "test" }); say(ok ? "Test asked for. It should arrive within 20 minutes." : "Couldn't reach the internet."); } }, "Send a test") : null));
  if (on) card.append(h("div", { class: "small muted", style: "margin-top:6px" }, me && me.on ? "✅ The reminder service has this phone." : "⏳ Waiting for the reminder service to pick this phone up (up to 20 minutes)."));
  card.append(status);
  return card;
}

window.sparkyPhone = {
  version: CFG.version,
  reminderCard,
  onRender(S) { badge(S); },
  lessonDone(S) { mergeStreak(S); badge(S); queue({ t: "done", day: dayKey() }); },
  start(get, save, render) {
    getS = get; saveS = save; rerender = render;
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
    const sync = async () => {
      await flush();
      const st = await fetchState(); if (!st) return;
      const S = getS();
      // the push key changed (reminder service was reset): sign this phone up again quietly
      if (S.settings.reminder && st.vapidPublic && S.settings.pushKey && S.settings.pushKey !== st.vapidPublic && Notification.permission === "granted") subscribe(S, saveS).catch(() => {});
      if (mergeStreak(S)) saveS();
      rerender();
    };
    sync();
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") sync(); });
  }
};
})();
