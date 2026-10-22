(function () {
"use strict";
const KEY = "sparkystudy.v1";
const D = window.sparky || null;   // desktop bridge (Electron); null when opened in a browser
const M = window.sparkyPhone || null;   // iPhone home-screen app bridge (phone/phone.js); null otherwise
const $ = (s, e = document) => e.querySelector(s);

/* ---------- helpers ---------- */
function h(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === "class") e.className = v;
    else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
    else if (v === true) e.setAttribute(k, "");
    else if (v !== false && v != null) e.setAttribute(k, v);
  }
  for (const k of kids.flat()) if (k != null) e.append(k.nodeType ? k : document.createTextNode(k));
  return e;
}
const pad = n => String(n).padStart(2, "0");
const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const dayDiff = (a, b) => Math.round((new Date(b + "T12:00:00") - new Date(a + "T12:00:00")) / 864e5);
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
// answers compare without spaces, case or a trailing unit (so "0.29", "0.29 Ω", "10.75V" and "2.25 m" all match)
const norm = s => String(s).toLowerCase().replace(/\s+/g, "").replace(/(Ω|ω|ohms?|v|volts?|m|metres?|meters?)$/, "").replace(/^0+(?=\d)/, "");
// Typed answers count as right if the text matches, the number matches (0.80 = .8 = 0.8 Ω), or both are lists of
// conductor pairs in any order with either end first (L1-L2, L3-L1 ... = L2-L1, L1-L3 ...).
const pairSet = s => {
  const t = String(s).toLowerCase().replace(/[‐-―−–—]/g, "-"), re = /\b([lne]\d?)\s*-\s*([lne]\d?)\b/g, ps = new Set();
  let m; while ((m = re.exec(t))) ps.add([m[1], m[2]].sort().join("-"));
  return ps.size > 1 && !t.replace(re, "").replace(/\band\b|[\s,;&.]/g, "") ? [...ps].sort().join(" ") : null;
};
const numOf = s => { const t = String(s).toLowerCase().replace(/\s+/g, "").replace(/(Ω|ω|ohms?|kv?a|ma|a|v(dc)?|volts?|ms|mm2|mm²|m|metres?|meters?|years?)$/, ""); return /^\d*\.?\d+$/.test(t) ? parseFloat(t) : null; };
const sameAnswer = (a, b) => norm(a) === norm(b) || (pairSet(a) !== null && pairSet(a) === pairSet(b)) || (numOf(a) !== null && numOf(a) === numOf(b));

/* ---------- saved state ---------- */
const blank = () => ({ streak: { count: 0, best: 0, last: null }, lessons: {}, topics: {}, days: {}, videos: {}, units: {}, mistakes: {}, approvals: {},
  settings: { reminder: false, time: "19:00", showDrafts: true, notified: null, sound: true, dates: DATES() } });
// Tom's course dates (Access Training, Edenbridge). Editable in Settings.
function DATES() { return { training: { start: "2026-11-23", end: "2026-12-04" }, assessment: { start: "2026-12-14", end: "2026-12-17" } }; }
let S;
async function load() {
  try {
    const raw = D ? await D.loadState() : JSON.parse(localStorage.getItem(KEY) || "{}");
    S = Object.assign(blank(), raw || {}); S.settings = Object.assign(blank().settings, S.settings);
    for (const k of ["videos", "units", "mistakes", "approvals"]) S[k] = S[k] || {};
    S.settings.dates = Object.assign(DATES(), S.settings.dates);
  } catch (e) { S = blank(); }
}
function save() {
  if (D) { D.saveState(S); return; }
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage blocked */ }
}
function effectiveStreak() {
  const l = S.streak.last; if (!l) return 0;
  const d = dayDiff(l, dayKey());
  return d <= 1 ? S.streak.count : 0;
}
const doneToday = () => S.streak.last === dayKey();

/* ---------- lessons ---------- */
let LESSONS = [], PROBLEMS = [], LOAD_ERRORS = [];
function validate(l) {
  const p = [];
  if (!l.id || !l.title || !l.topic) p.push("needs id, title and topic");
  if (!(window.TOPICS || []).some(t => t.id === l.topic)) p.push(`unknown topic "${l.topic}"`);
  if (!Array.isArray(l.questions) || !l.questions.length) p.push("no questions");
  (l.questions || []).forEach((q, i) => {
    const n = `question ${i + 1}`;
    if (!q.why) p.push(`${n}: missing the one-line "why"`);
    if (q.type === "choice" && !(Array.isArray(q.options) && q.options[q.answer] != null)) p.push(`${n}: bad options/answer`);
    else if (q.type === "order" && !(Array.isArray(q.steps) && q.steps.length > 1)) p.push(`${n}: needs steps`);
    else if (q.type === "match" && !(Array.isArray(q.pairs) && q.pairs.length > 1)) p.push(`${n}: needs pairs`);
    else if (q.type === "fill" && !(q.q && q.q.includes("___") && Array.isArray(q.answers) && q.answers.length)) p.push(`${n}: fill needs "___" and answers`);
    else if (!["choice", "order", "match", "fill"].includes(q.type)) p.push(`${n}: unknown type "${q.type}"`);
    if (q.form && !(["EIC", "EICR"].includes(q.form.doc) && q.form.box)) p.push(`${n}: form needs doc (EIC/EICR) and box`);
    if (q.explain && typeof q.explain !== "object") p.push(`${n}: explain must be {what, why, how, where}`);
  });
  if (l.status === "approved") {
    if (l.unconfirmed) p.push("approved lessons cannot be marked unconfirmed");
    if (!l.sources || !l.sources.length) p.push("approved lessons need sources");
    if (!l.checker || !l.checker.by) p.push("approved lessons need a checker record");
    if (!l.approved || !l.approved.by) p.push("approved lessons need Tom's approval record");
  } else if (l.status !== "draft") p.push('status must be "draft" or "approved"');
  if (l.checker && !["pass", "fix", "unconfirmed"].includes(l.checker.verdict)) p.push('checker.verdict must be "pass", "fix" or "unconfirmed"');
  return p;
}
function loadScript(src, optional) {
  return new Promise(res => { const s = document.createElement("script"); s.src = src; s.onload = () => res(); s.onerror = () => { if (!optional) LOAD_ERRORS.push(src); res(); }; document.head.append(s); });
}
let LESSON_DIR = "lessons/";
async function loadLessons() {
  window.LESSONS = []; window.TOPICS = []; window.LESSON_FILES = []; window.UNITS = []; window.VIDEOS = []; LOAD_ERRORS = [];
  if (D) LESSON_DIR = await D.lessonsBase();
  await loadScript(LESSON_DIR + "topics.js");
  await loadScript(LESSON_DIR + "manifest.js");
  await loadScript(LESSON_DIR + "units.js", true);
  await loadScript(LESSON_DIR + "videos.js", true);
  for (const f of window.LESSON_FILES || []) await loadScript(LESSON_DIR + f);
  PROBLEMS = [];
  LESSONS = [];
  for (const l of window.LESSONS) {
    const p = validate(l);
    if (p.length) PROBLEMS.push({ l, p }); else LESSONS.push(l);
  }
}
// A lesson counts as approved if its file says so, or Tom pressed Approve in the app after the Checker passed it.
const isApproved = l => l.status === "approved" || !!(l.checker && l.checker.verdict === "pass" && S.approvals && S.approvals[l.id]);
const canApprove = l => !isApproved(l) && !l.unconfirmed && l.checker && l.checker.verdict === "pass";
function tags(l) {
  const out = [];
  if (isApproved(l)) out.push(h("span", { class: "tag ok" }, "APPROVED"));
  else {
    out.push(h("span", { class: "tag draft" }, "DRAFT"));
    if (l.checker) out.push(h("span", { class: "tag " + (l.checker.verdict === "pass" ? "ok" : "unc") }, l.checker.verdict === "pass" ? "CHECKED" : "CHECKER: FIX"));
  }
  if (l.unconfirmed) out.push(h("span", { class: "tag unc" }, "UNCONFIRMED"));
  return out;
}

/* ---------- units and the path ---------- */
const MASCOT_SVG = `<svg viewBox="0 0 120 132" aria-hidden="true">
  <g class="m-all">
    <rect x="40" y="2" width="11" height="24" rx="4" fill="#9aa5b1"/><rect x="69" y="2" width="11" height="24" rx="4" fill="#9aa5b1"/>
    <path class="arm-l" d="M20 74 Q4 66 8 48" stroke="#f5b800" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path class="arm-r" d="M100 74 Q116 66 112 48" stroke="#f5b800" stroke-width="10" stroke-linecap="round" fill="none"/>
    <rect x="16" y="20" width="88" height="100" rx="40" fill="#ffc800"/>
    <ellipse cx="60" cy="112" rx="36" ry="8" fill="#e0a300" opacity=".55"/>
    <path d="M64 70 L52 92 H62 L57 108 L74 82 H64 L69 70Z" fill="#fff" opacity=".9"/>
    <ellipse cx="44" cy="50" rx="10" ry="12" fill="#fff"/><ellipse cx="76" cy="50" rx="10" ry="12" fill="#fff"/>
    <circle class="pupil" cx="46" cy="53" r="5.5" fill="#1f2933"/><circle class="pupil" cx="78" cy="53" r="5.5" fill="#1f2933"/>
    <circle cx="33" cy="66" r="5" fill="#ff8a8a" opacity=".55"/><circle cx="87" cy="66" r="5" fill="#ff8a8a" opacity=".55"/>
    <path class="m-happy" d="M48 66 Q60 77 72 66" stroke="#1f2933" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path class="m-sad" d="M49 72 Q60 63 71 72" stroke="#1f2933" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g></svg>`;
function mascot(cls = "") { const m = h("div", { class: "mascot " + cls }); m.innerHTML = MASCOT_SVG; return m; }

const visibleL = l => isApproved(l) || S.settings.showDrafts;
const visible = () => LESSONS.filter(visibleL);
const isDone = l => !!(S.lessons[l.id] && S.lessons[l.id].done);
const videoById = id => (window.VIDEOS || []).find(v => v.id === id);
function units() {
  const byId = Object.fromEntries(LESSONS.map(l => [l.id, l])), used = new Set();
  const U = (window.UNITS || []).map(u => {
    const items = [];
    for (const it of u.items || []) {
      if (it.startsWith("video:")) { if (M) continue; const v = videoById(it.slice(6)); if (v) items.push({ kind: "video", id: v.id, v }); }
      else if (it === "test") items.push({ kind: "test", id: "test:" + u.id });
      else { used.add(it); const l = byId[it]; if (l && visibleL(l)) items.push({ kind: "lesson", id: l.id, l }); }
    }
    return { ...u, items };
  });
  const rest = LESSONS.filter(l => !used.has(l.id) && visibleL(l));
  if (rest.length) U.push({ id: "more", title: "More lessons", colour: "#1cb0f6", items: rest.map(l => ({ kind: "lesson", id: l.id, l })) });
  for (const u of U) if (!u.items.some(x => x.kind === "lesson")) u.items = u.items.filter(x => x.kind !== "test");
  return U.filter(u => u.items.length);
}
function itemDone(it) {
  if (it.kind === "lesson") return isDone(it.l);
  if (it.kind === "video") return !!(S.videos[it.id] && S.videos[it.id].watched);
  return !!(S.units[it.id] && S.units[it.id].passed);
}
// Walk the path in order. Lessons and unit tests must be finished to open what comes next; videos never block.
function pathState() {
  const U = units(); let open = true, current = null;
  for (const u of U) for (const it of u.items) {
    it.done = itemDone(it); it.unlocked = open || it.done; it.unit = u;
    if (it.kind !== "video" && it.unlocked && !it.done && !current) current = it;
    if (it.kind !== "video" && !it.done) open = false;
  }
  if (current) current.current = true;
  return U;
}
const OFFS = [0, 46, 72, 46, 0, -46, -72, -46];
function itemTitle(it) { return it.kind === "lesson" ? it.l.title : it.kind === "video" ? it.v.title : "Unit test"; }
function viewLearn() {
  const v = $("#view"); v.replaceChildren();
  const U = pathState();
  v.append(countdownCard());
  if (!U.length) { v.append(h("div", { class: "card" }, "No lessons to show. Turn on draft lessons in Settings, or add lessons (see LESSON-FORMAT.md).")); return; }
  let n = 0;
  U.forEach((u, ui) => {
    v.append(h("div", { class: "unit", style: `--u:${u.colour || "#58cc02"}` },
      h("div", { class: "uinfo" }, h("div", { class: "ukicker" }, u.id === "more" ? "EXTRA" : `UNIT ${ui + 1}`), h("div", { class: "utitle" }, u.title),
        u.award ? h("div", { class: "uaward" }, u.award) : null),
      h("button", { class: "guide", onclick: () => guidebook(u) }, "📖", h("span", {}, "Guidebook"))));
    const col = h("div", { class: "snake" });
    for (const it of u.items) {
      const off = OFFS[n++ % OFFS.length];
      const icon = it.kind === "video" ? "▶" : it.kind === "test" ? "🏆" : it.done ? "✓" : it.unlocked ? "★" : "🔒";
      const wrap = h("div", { class: "pnwrap", style: `transform:translateX(${off}px)` });
      if (it.current) wrap.append(h("div", { class: "startbubble" }, "START"));
      wrap.append(h("button", { class: ["pn", it.kind, it.done ? "done" : "", it.current ? "current" : "", it.unlocked ? "" : "locked"].join(" "),
        style: `--u:${u.colour || "#58cc02"}`, title: itemTitle(it), onclick: e => { e.stopPropagation(); popover(wrap, it); } }, icon));
      if (it.current) wrap.append(mascot("side " + (off > 0 ? "left" : "right")));
      col.append(wrap);
    }
    v.append(col);
  });
  const cur = v.querySelector(".pn.current");
  if (cur) cur.scrollIntoView({ block: "center" });
}
document.addEventListener("click", () => { const p = $(".pop"); if (p) p.remove(); });
function popover(wrap, it) {
  const old = $(".pop"); if (old) { old.remove(); if (old.parentNode === null && old.dataset.id === it.id) return; }
  const kids = [h("b", {}, itemTitle(it))];
  if (it.kind === "lesson") {
    const l = it.l, rec = S.lessons[l.id];
    kids.push(h("div", {}, tags(l)),
      h("div", { class: "small" }, `${l.questions.length} questions` + (l.awards ? " · " + l.awards.join(", ") : "") + (rec && rec.done ? ` · best ${rec.best}%` : "")),
      l.note ? h("div", { class: "small warn" }, "⚠ " + l.note) : null,
      l.checker && l.checker.notes && !isApproved(l) ? h("div", { class: "small" }, "Checker: " + l.checker.notes) : null,
      !it.unlocked ? h("div", { class: "small" }, "Finish the lessons above to unlock this.") : null,
      h("div", { class: "row" },
        it.unlocked ? h("button", { class: "btn", onclick: () => startLesson(l) }, it.done ? "Practise again" : "Start") : null,
        canApprove(l) && it.done ? h("button", { class: "btn ghost", onclick: () => {
          if (!confirm(`Approve "${l.title}"?\n\nOnly approve if it matches what your course taught you.`)) return;
          S.approvals = S.approvals || {}; S.approvals[l.id] = { date: dayKey() }; save(); render();
        } }, "Approve") : null));
  } else if (it.kind === "video") {
    kids.push(h("div", { class: "small" }, "Practical demonstration from your course" + (it.done ? " · watched ✓" : "")),
      it.unlocked ? h("button", { class: "btn", onclick: () => viewVideo(it.v) }, it.done ? "Watch again" : "Watch") : h("div", { class: "small" }, "Reach this point on the path to unlock it."));
  } else {
    const r = S.units[it.id];
    kids.push(h("div", { class: "small" }, "15 questions from this unit. Score 80% or more to earn the trophy and open the next unit." + (r ? ` Best: ${r.best}%.` : "")),
      it.unlocked ? h("button", { class: "btn", onclick: () => startTest(it.unit) }, it.done ? "Take again" : "Start test") : h("div", { class: "small" }, "Finish every lesson in this unit first."));
  }
  const pop = h("div", { class: "pop", style: `--u:${it.unit.colour || "#58cc02"}`, "data-id": it.id, onclick: e => e.stopPropagation() }, kids);
  wrap.append(pop);
  pop.scrollIntoView({ block: "nearest", behavior: calm() ? "auto" : "smooth" });
}

/* ---------- guidebook: the key facts of a unit, taken straight from its questions ---------- */
function keyFact(q) {
  if (q.type === "choice") return [q.q, q.options[q.answer]];
  if (q.type === "fill") return [q.q.replace("___", "[" + q.answers[0] + "]"), null];
  if (q.type === "order") return [q.q, q.steps.map((s, i) => `${i + 1}. ${s}`).join("  ")];
  return [q.q, q.pairs.map(p => `${p[0]}: ${p[1]}`).join(" · ")];
}
function guidebook(u) {
  const body = h("div", { class: "gbody" });
  for (const it of u.items.filter(x => x.kind === "lesson")) {
    body.append(h("h3", {}, it.l.title));
    if (it.l.intro) { body.append(...introBlocks(it.l.intro)); continue; }
    for (const q of it.l.questions) {
      const [a, b] = keyFact(q);
      body.append(h("div", { class: "fact" }, h("div", {}, a, b ? h("b", {}, "  →  " + b) : null), h("div", { class: "small muted" }, q.why)));
    }
  }
  for (const it of u.items.filter(x => x.kind === "video")) body.append(h("div", { class: "fact" }, "▶ Video: " + it.v.title));
  showModal(h("div", { class: "modal guidebook", style: `--u:${u.colour}` }, h("h2", {}, "📖 " + u.title), u.award ? h("div", { class: "muted" }, u.award) : null,
    h("div", { class: "small muted" }, "What each lesson in this unit teaches, from your course files."), body,
    h("button", { class: "btn", onclick: closeModal }, "Close")));
}
function showModal(m) { const o = $("#overlay"); o.hidden = false; o.replaceChildren(m); }
function closeModal() { const o = $("#overlay"); o.hidden = true; o.replaceChildren(); render(); }

/* ---------- videos ---------- */
async function viewVideo(vd) {
  const v = $("#view"); v.replaceChildren();
  const back = h("button", { class: "btn ghost", onclick: () => go("learn") }, "← Path");
  if (!D) { v.append(back, h("div", { class: "card" }, "Videos play in the Sparky Study desktop app.")); return; }
  const rec = S.videos[vd.id] = S.videos[vd.id] || {};
  const src = (await D.videosBase()) + vd.file.split("/").map(encodeURIComponent).join("/");
  const vid = h("video", { class: "vplayer", controls: true, preload: "metadata", src });
  const err = h("div", { class: "card warnbox", hidden: true }, "This video won't play inside Sparky (the file may be missing or in a format it can't read). Use the button below to open it in your normal video player.");
  const mark = h("button", { class: "btn" }, rec.watched ? "Watched ✓" : "Mark as watched");
  const markWatched = () => {
    if (rec.watched) return; rec.watched = dayKey(); save(); mark.textContent = "Watched ✓"; sound("good"); confetti(40);
    if (D) D.logLesson({ id: vd.id, title: "Video: " + vd.title, topic: topicNotion(vd.topic), score: null, questions: null, streak: S.streak.count, status: "Video", date: dayKey() });
  };
  mark.onclick = markWatched;
  let lastSave = 0;
  vid.addEventListener("loadedmetadata", () => { if (rec.pos && rec.pos < vid.duration - 10) vid.currentTime = rec.pos; });
  vid.addEventListener("timeupdate", () => {
    if (Date.now() - lastSave > 5000) { rec.pos = vid.currentTime; save(); lastSave = Date.now(); }
    if (vid.duration && vid.currentTime / vid.duration > 0.9) markWatched();
  });
  vid.addEventListener("error", () => { err.hidden = false; });
  const goes = (vd.lessons || []).map(id => LESSONS.find(l => l.id === id)).filter(Boolean).map(l => l.title);
  v.append(h("div", { class: "row" }, back, h("h2", { style: "margin:0" }, vd.title)), vid, err,
    h("div", { class: "row", style: "margin-top:10px" }, mark, h("button", { class: "btn ghost", onclick: () => D.openVideo(vd.file) }, "Open in video player")),
    h("div", { class: "small muted", style: "margin-top:8px" }, "Picks up where you left off. Counts as watched at 90%." + (goes.length ? " Goes with: " + goes.join(", ") + "." : "")));
}
const topicNotion = id => (window.TOPICS.find(t => t.id === id) || {}).notion || id || "General";

/* ---------- practice hub ---------- */
function poolOf(lessons) { return lessons.flatMap(l => l.questions.map((q, qi) => ({ l, q, qi }))); }
function viewPractice() {
  const v = $("#view"); v.replaceChildren();
  v.append(h("h2", {}, "Practice"), h("div", { class: "muted small" }, "Practice counts towards your streak. It uses lessons you've already finished."));
  v.append(h("div", { class: "card practice" }, h("div", { class: "picon" }, "📄"),
    h("div", { class: "pinfo" }, h("b", {}, "Your blank forms"), h("div", { class: "small muted" }, "The IET BS 7671:2018+A4:2026 model forms. Open one next to a lesson to see where each box is.")),
    h("div", { class: "row" }, h("button", { class: "btn ghost", onclick: () => openSource("EIC form", 2) }, "EIC"), h("button", { class: "btn ghost", onclick: () => openSource("EICR form", 2) }, "EICR"))));
  const all = poolOf(visible().filter(isDone));
  if (!all.length) { v.append(h("div", { class: "card practice" }, mascot("small"), h("div", {}, "Finish your first lesson on the path, then come back here."))); return; }
  const mist = all.filter(x => S.mistakes[`${x.l.id}:${x.qi}`]);
  const stats = window.TOPICS.map(t => ({ t, ...topicStats(t.id), n: all.filter(x => x.l.topic === t.id).length })).filter(x => x.total && x.n);
  stats.sort((a, b) => a.pct - b.pct);
  const weak = stats[0];
  const card = (icon, title, sub, items, label) => h("div", { class: "card practice" }, h("div", { class: "picon" }, icon),
    h("div", { class: "pinfo" }, h("b", {}, title), h("div", { class: "small muted" }, sub)),
    h("button", { class: "btn", disabled: !items.length, onclick: () => startSession("practice", title, items, {}) }, label));
  v.append(
    card("🎯", "Fix your mistakes", mist.length ? `${mist.length} ${mist.length > 1 ? "questions" : "question"} you got wrong. Get ${mist.length > 1 ? "them" : "it"} right to clear ${mist.length > 1 ? "them" : "it"}.` : "No mistakes waiting. Nice.", shuffle(mist).slice(0, 10), "Start"),
    weak ? card("💪", "Weak spot: " + weak.t.name, `${weak.pct}% right first time so far.`, shuffle(all.filter(x => x.l.topic === weak.t.id)).slice(0, 8), "Start") : null,
    card("⚡", "Quick review", "10 random questions from everything you've finished.", shuffle(all).slice(0, 10), "Start"));
}

/* ---------- progress ---------- */
function topicStats(id) {
  const t = S.topics[id] || { right: 0, total: 0 };
  return { ...t, pct: t.total ? Math.round(100 * t.right / t.total) : null };
}
function viewProgress() {
  const v = $("#view"); v.replaceChildren();
  const U = pathState(), vis = visible();
  const trophies = U.filter(u => u.items.some(x => x.kind === "test" && x.done)).length;
  const tile = (icon, n, label) => h("div", { class: "tile" }, h("div", { class: "ticon" }, icon), h("div", { class: "tn" }, String(n)), h("div", { class: "small muted" }, label));
  v.append(h("h2", {}, "Progress"), h("div", { class: "tiles" },
    tile("🔥", effectiveStreak(), "day streak"), tile("🏅", S.streak.best, "best streak"),
    tile("📘", `${vis.filter(isDone).length}/${vis.length}`, "lessons"), tile("🏆", trophies, "unit trophies"),
    tile("▶", Object.values(S.videos).filter(x => x.watched).length, "videos watched")));
  v.append(h("h3", {}, "Topic map"), h("div", { class: "muted small" }, "Accuracy is first-try answers. Red = weak spot (under 70% after at least 5 answers)."));
  for (const t of window.TOPICS) {
    const st = topicStats(t.id), n = vis.filter(l => l.topic === t.id).length;
    const weak = st.total >= 5 && st.pct < 70;
    v.append(h("div", { class: "card topic" },
      h("div", { class: "name" }, h("b", {}, t.name), t.weakSpot ? h("span", { class: "tag unc" }, "KNOWN WEAK") : null,
        h("div", { class: "muted small" }, n ? `${n} lesson${n > 1 ? "s" : ""}` : "no lessons yet")),
      h("div", { class: "bar" }, st.pct == null ? null : h("i", { class: weak ? "weak" : st.pct < 85 ? "mid" : "", style: `width:${st.pct}%` })),
      h("div", { class: "small", style: "width:90px;text-align:right" }, st.pct == null ? "not started" : `${st.pct}% (${st.total})`)));
  }
}

/* ---------- chrome ---------- */
let tab = "learn";
const FLAME = `<svg viewBox="0 0 24 30" class="flame"><path d="M12 1C13 7 19 10 19 18a7 7 0 0 1-14 0c0-4 2-6 3-8 1 3 2 4 3 4 0-4-1-8 1-13z"/><path class="core" d="M12 14c1 3 4 4 4 8a4 4 0 0 1-8 0c0-2 1-3 2-4 0 1 1 2 2 2 0-2-1-4 0-6z"/></svg>`;
function renderStreak() {
  const n = effectiveStreak(), s = $("#streak");
  s.innerHTML = FLAME + `<span>${n}</span>`;
  s.className = doneToday() ? "lit" : "off";
  s.title = doneToday() ? "Streak safe for today" : n ? "Do a lesson today to keep your streak!" : "Start a streak with a lesson";
}
/* ---------- countdown to training and assessment ---------- */
const fmtDay = k => new Date(k + "T12:00:00").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
function countdown(ev) {
  const today = dayKey(), toStart = dayDiff(today, ev.start), toEnd = dayDiff(today, ev.end || ev.start);
  if (toStart > 1) return { big: String(toStart), small: "days to go", when: fmtDay(ev.start) };
  if (toStart === 1) return { big: "1", small: "day to go: tomorrow!", when: fmtDay(ev.start) };
  if (toEnd >= 0) return { big: "NOW", small: `day ${1 - toStart} of ${dayDiff(ev.start, ev.end || ev.start) + 1}`, when: "until " + fmtDay(ev.end || ev.start), now: true };
  return { big: "✓", small: "finished", when: fmtDay(ev.end || ev.start), past: true };
}
function countdownCard() {
  const d = S.settings.dates;
  const one = (icon, label, ev) => { const c = countdown(ev);
    return h("div", { class: "cd" + (c.now ? " now" : c.past ? " past" : "") }, h("div", { class: "cdicon" }, icon),
      h("div", {}, h("div", { class: "cdlabel" }, label), h("div", { class: "cdnum" }, h("b", {}, c.big), " ", c.small), h("div", { class: "small muted" }, c.when))); };
  return h("div", { class: "countdown" }, one("🛠️", "Practical training", d.training), one("🎯", "Practical assessment", d.assessment));
}

/* ---------- streak number on the Windows taskbar icon ---------- */
let lastBadge = null;
function renderBadge() {
  if (!D || !D.setBadge) return;
  const n = effectiveStreak(), safe = doneToday(), key = n + ":" + safe;
  if (key === lastBadge) return; lastBadge = key;
  if (!n) { D.setBadge(0, null); return; }
  const c = document.createElement("canvas"); c.width = c.height = 32; const x = c.getContext("2d");
  x.fillStyle = safe ? "#ff9600" : "#ff4b4b"; x.beginPath(); x.arc(16, 16, 16, 0, Math.PI * 2); x.fill();
  const t = n > 99 ? "99+" : String(n);
  x.fillStyle = "#fff"; x.textAlign = "center"; x.textBaseline = "middle";
  x.font = `bold ${t.length === 1 ? 24 : t.length === 2 ? 19 : 13}px "Segoe UI", Arial, sans-serif`; x.fillText(t, 16, 17.5);
  D.setBadge(n, c.toDataURL("image/png"), safe ? `${n}-day streak, safe today` : `${n}-day streak, do a lesson today to keep it`);
}
function renderBanner() {
  const b = $("#banner");
  if (!doneToday() && visible().length && tab === "learn") {
    const n = effectiveStreak();
    b.hidden = false;
    b.textContent = n ? `⚠️ Today's lesson isn't done yet. Do one to keep your ${n}-day streak.` : "Do a lesson today to start your streak.";
  } else b.hidden = true;
}
function go(t) {
  tab = t;
  document.querySelectorAll("#tabs button").forEach(b => b.classList.toggle("active", b.dataset.tab === t));
  render();
}
function render() {
  document.body.classList.remove("inlesson");
  renderStreak(); renderBanner(); renderBadge();
  if (M) M.onRender(S);
  ({ learn: viewLearn, practice: viewPractice, progress: viewProgress, settings: viewSettings })[tab]();
}

function viewSettings() {
  const v = $("#view"); v.replaceChildren();
  const set = S.settings;
  v.append(h("h2", {}, "Settings"));

  const perm = "Notification" in window ? Notification.permission : "unsupported";
  if (M) v.append(M.reminderCard(h, S, save)); else v.append(h("div", { class: "card" }, h("b", {}, "Daily reminder"),
    h("div", { class: "muted small" }, D
      ? "Windows notification if today's lesson isn't done, even when the window is closed (Sparky keeps running in the tray, by the clock). A last warning comes at 21:30 if your streak is at risk."
      : "Shows a notification (and the banner) if you haven't done today's lesson. Only fires while this browser tab is open."),
    h("div", { class: "row", style: "margin-top:10px" },
      h("label", {}, h("input", { type: "checkbox", checked: set.reminder, onchange: async e => {
        set.reminder = e.target.checked;
        if (!D && set.reminder && "Notification" in window && Notification.permission === "default") await Notification.requestPermission();
        save(); viewSettings();
      } }), " Remind me at "),
      h("input", { type: "time", value: set.time, onchange: e => { set.time = e.target.value; set.notified = null; save(); } }),
      h("button", { class: "btn ghost", onclick: () => notify("Test reminder", "This is what a reminder looks like.") }, "Test")),
    D ? h("label", { style: "display:block;margin-top:8px" }, h("input", { type: "checkbox", checked: S.settings.autostart !== false, onchange: e => { S.settings.autostart = e.target.checked; save(); } }), " Start Sparky with Windows (needed for reminders after a restart)")
      : h("div", { class: "small muted", style: "margin-top:6px" }, "Notification permission: " + perm)));
  v.append(syncCard());
  if (D) v.append(notionCard());

  const dates = S.settings.dates;
  const dateIn = (ev, k) => h("input", { type: "date", value: ev[k], onchange: e => { if (!e.target.value) return; ev[k] = e.target.value; if (ev.end < ev.start) ev.end = ev.start; save(); viewSettings(); } });
  v.append(h("div", { class: "card" }, h("b", {}, "Your dates"),
    h("div", { class: "muted small" }, "Used for the countdowns at the top of the path."),
    h("div", { class: "row", style: "margin-top:8px" }, h("span", { style: "min-width:170px" }, "🛠️ Practical training"), dateIn(dates.training, "start"), "to", dateIn(dates.training, "end")),
    h("div", { class: "row", style: "margin-top:6px" }, h("span", { style: "min-width:170px" }, "🎯 Practical assessment"), dateIn(dates.assessment, "start"), "to", dateIn(dates.assessment, "end")),
    h("button", { class: "btn ghost", style: "margin-top:8px", onclick: () => { S.settings.dates = DATES(); save(); viewSettings(); } }, "Reset to course dates")));

  v.append(h("div", { class: "card" }, h("b", {}, "Sounds"),
    h("label", { style: "display:block" }, h("input", { type: "checkbox", checked: set.sound !== false, onchange: e => { set.sound = e.target.checked; save(); } }), " Play sounds for right and wrong answers")));
  v.append(h("div", { class: "card" }, h("b", {}, "Draft lessons"),
    h("div", { class: "muted small" }, "Draft/UNCONFIRMED lessons have not been checked against your course files or approved by you. Turn this off once real approved lessons exist so only approved ones show."),
    h("label", {}, h("input", { type: "checkbox", checked: set.showDrafts, onchange: e => { set.showDrafts = e.target.checked; save(); render(); } }), " Show draft lessons (preview mode)")));

  v.append(h("div", { class: "card" }, h("b", {}, "Your progress"),
    h("div", { class: "muted small" }, `Stored on this ${M ? "phone" : "PC"}. Best streak: ${S.streak.best}. Back it up or move it with these buttons.`),
    h("div", { class: "row", style: "margin-top:10px" },
      h("button", { class: "btn ghost", onclick: exportProgress }, "Export"),
      h("label", { class: "btn ghost" }, "Import", h("input", { type: "file", accept: ".json", hidden: true, onchange: importProgress })),
      h("button", { class: "btn ghost", onclick: () => { if (confirm("Erase ALL progress and streak on this " + (M ? "phone" : "PC") + "?")) { const y = S.sync; S = blank(); if (y) { S.sync = y; y.mark = syncPart(S); } save(); render(); } } }, "Reset"))));

  const bad = PROBLEMS.length || LOAD_ERRORS.length;
  v.append(h("div", { class: "card" }, h("b", {}, "Lesson file check ", h("span", { class: "tag " + (bad ? "bad" : "ok") }, bad ? "PROBLEMS" : "ALL OK")),
    h("div", { class: "muted small" }, `${LESSONS.length} lesson(s) loaded from ${D ? decodeURI(LESSON_DIR.replace("file:///", "")) : "the lessons folder"}.`),
    D ? h("div", { class: "row", style: "margin-top:8px" }, h("button", { class: "btn ghost", onclick: () => D.openLessonsFolder() }, "Open lessons folder"),
      h("button", { class: "btn ghost", onclick: async () => { await loadLessons(); render(); } }, "Reload lessons")) : null,
    LOAD_ERRORS.length ? h("ul", { class: "issues" }, LOAD_ERRORS.map(f => h("li", {}, "Could not load " + f))) : null,
    PROBLEMS.length ? h("ul", { class: "issues" }, PROBLEMS.map(x => h("li", {}, h("b", {}, x.l.id || "(no id)"), ": ", x.p.join("; ")))) : null));
  v.append(h("div", { class: "small muted", style: "text-align:center;margin:14px 0" }, `Sparky Study version ${VERSION}`));
}
function exportProgress() {
  const a = h("a", { href: URL.createObjectURL(new Blob([JSON.stringify(S, null, 2)], { type: "application/json" })), download: `sparky-progress-${dayKey()}.json` });
  document.body.append(a); a.click(); a.remove();
}
function importProgress(e) {
  const f = e.target.files[0]; if (!f) return;
  f.text().then(t => { try { const o = JSON.parse(t); if (!o.streak || !o.lessons) throw 0; const y = S.sync; S = Object.assign(blank(), o); if (y) { S.sync = y; y.mark = syncPart(S); } else delete S.sync; save(); render(); alert("Progress imported."); } catch (x) { alert("That file isn't a Sparky progress export."); } });
}

/* ---------- reminders ---------- */
function notionCard() {
  const status = h("div", { class: "small muted", style: "margin-top:6px" }, "Checking…");
  const tok = h("input", { type: "password", placeholder: "Paste Notion integration secret (ntn_… or secret_…)", style: "flex:1;min-width:260px;font:inherit;padding:6px 10px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink)" });
  const refresh = () => D.notionStatus().then(st => {
    status.textContent = (st.connected ? "✅ Connected. " : st.hasToken ? "⚠️ " + (st.error || "Not connected yet.") + " " : "Not connected. ")
      + (st.pending ? `${st.pending} lesson(s) waiting to send.` : "Nothing waiting to send.") + (st.lastSent ? ` Last sent ${st.lastSent}.` : "");
  });
  refresh();
  return h("div", { class: "card" }, h("b", {}, "Notion progress log"),
    h("div", { class: "muted small" }, "Each finished lesson adds a row to \"Sparky Study App Log\" in your Level 3 NVQ Electrical Study Hub. If you're offline it waits and sends later."),
    h("div", { class: "row", style: "margin-top:10px" }, tok,
      h("button", { class: "btn", onclick: async () => { if (!tok.value.trim()) return; status.textContent = "Testing…"; await D.setNotionToken(tok.value.trim()); tok.value = ""; refresh(); } }, "Save & test"),
      h("button", { class: "btn ghost", onclick: async () => { status.textContent = "Sending…"; await D.notionFlush(); refresh(); } }, "Send now")),
    status);
}
function notify(title, body) {
  if (D) { D.notify(title, body); return; }
  if ("Notification" in window && Notification.permission === "granted") { try { new Notification(title, { body }); return; } catch (e) { /* fall through */ } }
  alert(title + "\n" + body);
}
function reminderTick() {
  const s = S.settings; if (!s.reminder || doneToday()) return;
  const now = new Date(), [hh, mm] = s.time.split(":").map(Number);
  if (s.notified === dayKey()) return;
  if (now.getHours() * 60 + now.getMinutes() >= hh * 60 + mm) {
    s.notified = dayKey(); save();
    const n = effectiveStreak();
    notify("Sparky Study", n ? `Do today's lesson to keep your ${n}-day streak!` : "Do today's lesson to start your streak.");
  }
}
/* ---------- one streak for PC and iPhone ---------- */
// The PC tells the iPhone reminder service (phone/reminders) which days a lesson was done, and reads back the phone's days.
const RELAY = "https://ntfy.sh/sparky-atnAadAj93UPoNdCk9OgzNoj";
const SHARED = "https://raw.githubusercontent.com/yochrissenor-pixel/sparky-study/state/state.json";
function shareDays() {
  if (!D) return;
  const days = Object.keys(S.days).filter(k => S.days[k] > 0).sort().slice(-60), last = days[days.length - 1];
  if (!last || S.settings.shared === last) return;
  fetch(RELAY, { method: "POST", body: JSON.stringify({ t: "days", dev: "pc", days, at: new Date().toISOString() }) })
    .then(r => { if (r.ok) { S.settings.shared = last; save(); } }).catch(() => { /* offline: tries again next time */ });
}
async function phoneDays() {
  if (!D) return;
  let st; try { const r = await fetch(SHARED + "?t=" + Date.now(), { cache: "no-store" }); if (!r.ok) return; st = await r.json(); } catch (e) { return; }
  const has = new Set([...Object.keys(S.days).filter(k => S.days[k] > 0), ...(st.days || [])]);
  const prev = k => { const d = new Date(k + "T12:00:00"); d.setDate(d.getDate() - 1); return dayKey(d); };
  const end = has.has(dayKey()) ? dayKey() : has.has(prev(dayKey())) ? prev(dayKey()) : null;
  if (!end) return;
  let n = 0; for (let k = end; has.has(k); k = prev(k)) n++;
  if (S.streak.last === end && S.streak.count === n) return;
  S.streak.last = end; S.streak.count = n; S.streak.best = Math.max(S.streak.best, n); save();
  if (!P) render();
}
/* ---------- progress sync between PC and iPhone ---------- */
// Each device posts what changed since its last post to the same private relay. The reminder service (phone/reminders)
// also files these changes in state.json, so a device that was away for more than 12 hours still catches up.
// Counts add up, best scores and dates take the later/higher one, so a lesson done on either device counts on both.
const SYNC_KEYS = ["lessons", "units", "topics", "days", "mistakes", "approvals", "videos"];
let SYNCING = false, SYNC_LOG = null;
function syncPart(s) {   // the parts of progress that sync (video positions stay where they were watched)
  const o = {};
  for (const k of SYNC_KEYS) o[k] = JSON.parse(JSON.stringify(s[k] || {}));
  for (const id of Object.keys(o.videos)) { if (o.videos[id] && o.videos[id].watched) o.videos[id] = { watched: o.videos[id].watched }; else delete o.videos[id]; }
  return o;
}
function syncSetup() {
  const y = S.sync = S.sync || {};
  if (!y.dev) y.dev = (D ? "pc-" : M ? "phone-" : "web-") + Math.random().toString(36).slice(2, 8);
  if (!y.mark) y.mark = syncPart(blank());   // a new device shares everything it already has
  if (!y.since) y.since = new Date().toISOString();
  y.seq = y.seq || 0; y.seen = y.seen || []; y.out = y.out || []; y.peers = y.peers || {};
  return y;
}
// what changed from a to b (both from syncPart)
function syncDiff(a, b) {
  const d = {}, put = (k, id, x) => { if (Object.keys(x).length) (d[k] = d[k] || {})[id] = x; };
  const n = v => v || 0;
  for (const k of ["lessons", "units"]) for (const [id, r] of Object.entries(b[k])) {
    const o = a[k][id] || {}, x = {};
    if (r.done && !o.done) x.done = true;
    if (r.passed && !o.passed) x.passed = r.passed;
    if (n(r.attempts) > n(o.attempts)) x.attempts = r.attempts - n(o.attempts);
    if (n(r.best) > n(o.best)) x.best = r.best;
    if (r.last && r.last !== o.last) x.last = r.last;
    put(k, id, x);
  }
  for (const [id, r] of Object.entries(b.topics)) {
    const o = a.topics[id] || {}, x = {};
    if (n(r.right) > n(o.right)) x.right = r.right - n(o.right);
    if (n(r.total) > n(o.total)) x.total = r.total - n(o.total);
    put("topics", id, x);
  }
  for (const [day, c] of Object.entries(b.days)) if (n(c) > n(a.days[day])) (d.days = d.days || {})[day] = c - n(a.days[day]);
  for (const id of new Set([...Object.keys(a.mistakes), ...Object.keys(b.mistakes)]))
    if (a.mistakes[id] !== b.mistakes[id]) (d.mistakes = d.mistakes || {})[id] = b.mistakes[id] || null;   // null = got it right since
  for (const k of ["approvals", "videos"]) for (const [id, r] of Object.entries(b[k])) if (!a[k][id]) (d[k] = d[k] || {})[id] = r;
  return d;
}
function syncApply(s, d) {
  const n = v => v || 0;
  for (const k of ["lessons", "units"]) for (const [id, x] of Object.entries(d[k] || {})) {
    const r = s[k][id] = s[k][id] || { attempts: 0, best: 0 };
    if (x.done) r.done = true;
    if (x.passed && (!r.passed || x.passed < r.passed)) r.passed = x.passed;
    if (x.attempts > 0) r.attempts = n(r.attempts) + x.attempts;
    if (x.best > n(r.best)) r.best = x.best;
    if (x.last && (!r.last || x.last > r.last)) r.last = x.last;
  }
  for (const [id, x] of Object.entries(d.topics || {})) { const t = s.topics[id] = s.topics[id] || { right: 0, total: 0 }; t.right += n(x.right); t.total += n(x.total); }
  for (const [day, c] of Object.entries(d.days || {})) if (/^\d{4}-\d\d-\d\d$/.test(day) && c > 0) s.days[day] = n(s.days[day]) + c;
  for (const [id, v] of Object.entries(d.mistakes || {})) { if (v) s.mistakes[id] = v; else delete s.mistakes[id]; }
  for (const [id, v] of Object.entries(d.approvals || {})) if (!s.approvals[id]) s.approvals[id] = v;
  for (const [id, v] of Object.entries(d.videos || {})) { const r = s.videos[id] = s.videos[id] || {}; if (!r.watched && v.watched) r.watched = v.watched; }
}
// One relay message holds about 4 KB, so a big first share is sent in several parts.
function syncChunks(d) {
  const out = []; let cur = {}, size = 0;
  for (const k of SYNC_KEYS) for (const [id, v] of Object.entries(d[k] || {})) {
    const len = JSON.stringify(id).length + JSON.stringify(v).length + 4;
    if (size && size + len > 2800) { out.push(cur); cur = {}; size = 0; }
    (cur[k] = cur[k] || {})[id] = v; size += len;
  }
  if (size) out.push(cur);
  return out;
}
// Note what changed here since the last share and queue it to send.
function syncPush() {
  const y = syncSetup(), now = syncPart(S), parts = syncChunks(syncDiff(y.mark, now));
  if (!parts.length) { y.mark = now; return false; }
  parts.forEach((d, i) => y.out.push({ t: "ev", dev: y.dev, seq: ++y.seq, ver: VERSION, at: new Date().toISOString(), d,
    log: i === parts.length - 1 && SYNC_LOG ? SYNC_LOG : undefined }));
  SYNC_LOG = null; y.mark = now; y.out = y.out.slice(-200); save();
  return true;
}
async function syncFlush() {
  const y = syncSetup();
  while (y.out.length) {
    let ok = false;
    try { ok = (await fetch(RELAY, { method: "POST", body: JSON.stringify(y.out[0]) })).ok; } catch (e) { /* offline */ }
    if (!ok) break;
    y.out.shift(); y.lastSent = new Date().toISOString(); save();
  }
}
async function syncPull() {
  const y = syncSetup(), evs = [];
  let reached = false;
  try { const r = await fetch(SHARED + "?t=" + Date.now(), { cache: "no-store" }); if (r.ok) { reached = true; evs.push(...((await r.json()).events || [])); } } catch (e) { /* offline */ }
  try {
    const r = await fetch(RELAY + "/json?poll=1&since=12h");
    if (r.ok) { reached = true; for (const line of (await r.text()).split("\n")) { try { const m = JSON.parse(line); if (m.event !== "message") continue; const x = JSON.parse(m.message); if (x.t === "ev") evs.push(x); } catch (e) { /* not ours */ } } }
  } catch (e) { /* offline */ }
  if (reached) y.lastPull = new Date().toISOString();
  const seen = new Set(y.seen); let changed = false;
  for (const x of evs.sort((a, b) => String(a.at).localeCompare(String(b.at)) || a.seq - b.seq)) {
    if (!x || typeof x.dev !== "string" || !(x.seq > 0) || !x.d || typeof x.d !== "object") continue;
    const id = x.dev + ":" + x.seq;
    if (x.dev === y.dev || seen.has(id)) continue;
    seen.add(id); changed = true;
    syncApply(S, x.d); syncApply(y.mark, x.d);   // already here, so it isn't shared back
    y.peers[x.dev] = { ver: x.ver, at: x.at };
    if (D && x.log && x.at > y.since) D.logLesson(Object.assign({}, x.log, { streak: S.streak.count, title: x.log.title + " (" + (x.dev.startsWith("phone-") ? "iPhone" : "other device") + ")" }));
  }
  y.seen = [...seen].slice(-5000);
  if (changed) streakFromDays();
  save();
  return changed;
}
// One streak for every device: count back from today (or yesterday) over the days a lesson was done.
function streakFromDays() {
  const has = new Set(Object.keys(S.days).filter(k => S.days[k] > 0));
  const prev = k => { const d = new Date(k + "T12:00:00"); d.setDate(d.getDate() - 1); return dayKey(d); };
  const end = has.has(dayKey()) ? dayKey() : has.has(prev(dayKey())) ? prev(dayKey()) : null;
  if (!end) return;
  let n = 0; for (let k = end; has.has(k); k = prev(k)) n++;
  if (end > (S.streak.last || "") || (S.streak.last === end && n > S.streak.count)) { S.streak.last = end; S.streak.count = n; }
  S.streak.best = Math.max(S.streak.best, S.streak.count);
}
const vcmp = (a, b) => { const x = String(a).split(".").map(Number), y = String(b).split(".").map(Number); for (let i = 0; i < 3; i++) if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) - (y[i] || 0); return 0; };
async function syncNow() {
  if (SYNCING || !S) return; SYNCING = true;
  try { syncPush(); await syncFlush(); if (await syncPull() && !P && !$("video") && !$("#learn")) render(); }
  finally { SYNCING = false; }
}
function syncCard() {
  const y = syncSetup(), here = M ? "iPhone" : D ? "PC" : "browser";
  const name = dev => dev.startsWith("pc-") ? "PC" : dev.startsWith("phone-") ? "iPhone" : "Browser";
  const ago = t => { if (!t) return "never"; const m = Math.round((Date.now() - new Date(t)) / 60000); return m < 1 ? "just now" : m < 60 ? m + " min ago" : m < 1440 ? Math.round(m / 60) + " h ago" : Math.round(m / 1440) + " days ago"; };
  const peers = Object.entries(y.peers).sort((a, b) => String(b[1].at).localeCompare(String(a[1].at)));
  const status = h("div", { class: "small", style: "margin-top:6px" });
  return h("div", { class: "card" }, h("b", {}, "Sync with your " + (M ? "PC" : "iPhone")),
    h("div", { class: "muted small" }, `Lessons, scores, mistakes, approvals and your streak are shared between your PC and iPhone. A lesson done on one shows on the other within a few minutes (needs the internet; if you're offline it waits and sends later).`),
    h("ul", { class: "small", style: "margin:8px 0 0 18px;padding:0" },
      h("li", {}, `This ${here}: v${VERSION}` + (y.out.length ? ` · ${y.out.length} change(s) waiting to send` : " · all sent") + ` · last checked ${ago(y.lastPull)}`),
      peers.length ? peers.map(([dev, p]) => h("li", {}, `${name(dev)}: v${p.ver || "?"} · last change ${ago(p.at)}`,
        p.ver && p.ver !== "browser" && VERSION !== "browser" && p.ver !== VERSION ? h("span", { class: "tag unc", style: "margin-left:6px" }, vcmp(p.ver, VERSION) > 0 ? "NEWER THAN THIS ONE" : "OLDER: UPDATE IT") : null))
        : h("li", { class: "muted" }, `Nothing from your ${M ? "PC" : "iPhone"} yet. Open Sparky there (v2.2.0 or newer) and it will join in.`)),
    h("button", { class: "btn ghost", style: "margin-top:8px", onclick: async () => { status.textContent = "Syncing…"; await syncNow(); viewSettings(); } }, "Sync now"),
    status);
}
/* ---------- sound and celebration ---------- */
let AC = null;
function sound(kind) {
  if (S.settings.sound === false) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    const notes = { good: [660, 990], bad: [220, 160], done: [523, 659, 784, 1047] }[kind] || [];
    notes.forEach((f, i) => {
      const o = AC.createOscillator(), g = AC.createGain(), t = AC.currentTime + i * 0.09;
      o.type = kind === "bad" ? "square" : "sine"; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(kind === "bad" ? 0.05 : 0.12, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      o.connect(g).connect(AC.destination); o.start(t); o.stop(t + 0.2);
    });
  } catch (e) { /* no audio */ }
}
const calm = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function confetti(n = 120) {
  if (calm()) return;
  const c = h("canvas", { class: "confetti" }); document.body.append(c);
  const W = c.width = innerWidth, H = c.height = innerHeight, x = c.getContext("2d");
  const cols = ["#58cc02", "#ffc800", "#1cb0f6", "#ff4b4b", "#ce82ff", "#ff9600"];
  const ps = Array.from({ length: n }, () => ({ x: W / 2 + (Math.random() - .5) * 200, y: H * .45, vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 4,
    r: Math.random() * 6 + 4, a: Math.random() * 6, va: (Math.random() - .5) * .3, c: cols[Math.floor(Math.random() * cols.length)] }));
  const t0 = performance.now();
  (function frame(t) {
    x.clearRect(0, 0, W, H);
    for (const p of ps) { p.vy += .35; p.x += p.vx; p.y += p.vy; p.a += p.va; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); x.restore(); }
    if (t - t0 < 2600) requestAnimationFrame(frame); else c.remove();
  })(t0);
}

/* ---------- lesson player (lessons, unit tests and practice all run through here) ---------- */
let P = null;
function startSession(kind, title, items, meta) {
  if (!items.length) return;
  P = { kind, title, meta, items, queue: items.map((_, i) => i), pos: 0, firstTry: 0, total: items.length, failed: new Set(), answered: 0, stats: {}, run: 0 };
  $("#banner").hidden = true; document.body.classList.add("inlesson");
  const p = $(".pop"); if (p) p.remove();
  nextQuestion();
}
function startLesson(l) {
  const go = () => startSession("lesson", l.title, l.questions.map((q, qi) => ({ l, q, qi })), { l });
  if (l.intro) learnFirst(l, go); else go();
}
// The teach-first screen: what it is, why, how, where, and the reason it matters, before any questions.
function introBlocks(i) {
  const sec = (icon, k, body) => body && (!Array.isArray(body) || body.length) ? h("div", { class: "lsec" }, h("div", { class: "lhead" }, icon + " " + k), body) : null;
  return [
    sec("❓", "What it is", h("p", {}, i.what)),
    sec("💡", "Why", h("p", {}, i.why)),
    sec("🛠️", "How you do it", Array.isArray(i.how) ? h("ol", {}, i.how.map(x => h("li", {}, x))) : h("p", {}, i.how)),
    sec("📍", "Where", h("p", {}, i.where)),
    sec("⭐", "The reason it matters", h("p", {}, i.reason)),
    i.numbers && i.numbers.length ? sec("🔢", "Numbers to know", h("ul", { class: "nums" }, i.numbers.map(x => h("li", {}, x)))) : null];
}
function learnFirst(l, go) {
  const pop = $(".pop"); if (pop) pop.remove();
  document.body.classList.add("inlesson"); $("#banner").hidden = true;
  const v = $("#view"); v.replaceChildren();
  const start = h("button", { class: "btn", onclick: go }, `Start the ${l.questions.length} questions`);
  v.append(h("div", { id: "learn" },
    h("div", { class: "ltop" }, h("button", { class: "quit", title: "Back to the path", onclick: () => render() }, "✕"), h("div", { class: "kicker" }, "📘 LEARN FIRST")),
    h("h2", {}, l.title), l.note ? h("div", { class: "small warn" }, "⚠ " + l.note) : null,
    ...introBlocks(l.intro), h("div", { class: "foot" }, start), mascot("inlesson")));
  window.scrollTo(0, 0);
}
function startTest(u) {
  const pool = poolOf(u.items.filter(x => x.kind === "lesson").map(x => x.l));
  startSession("test", u.title + ": unit test", shuffle(pool).slice(0, 15), { u });
}
function quit() { P = null; render(); }
function shell(body, footer) {
  const v = $("#view"); v.replaceChildren();
  v.append(h("div", { id: "lesson" },
    h("div", { class: "ltop" }, h("button", { class: "quit", title: "Quit", onclick: () => { if (confirm("Quit? Progress in this session is lost.")) quit(); } }, "✕"),
      h("div", { class: "pbar" }, h("i", { style: `width:${Math.round(100 * P.answered / (P.total + P.failed.size))}%` })),
      P.run >= 3 ? h("div", { class: "runbadge" }, `🔥 ${P.run} in a row`) : null),
    P.kind !== "lesson" ? h("div", { class: "kicker" }, P.kind === "test" ? "🏆 UNIT TEST" : "💪 PRACTICE") : null,
    sceneCard(curQ()), ...body, footer, mascot("inlesson")));
}
const curQ = () => P && P.pos < P.queue.length ? P.items[P.queue[P.pos]].q : null;
function sceneCard(q) {
  if (!q || !q.scene) return null;
  return h("div", { class: "scene" }, h("div", { class: "scenetag" }, "📋 THE SITUATION"), q.scene);
}
// A box drawn like the real IET form, so Tom learns where each answer goes.
function formBox(q, inner) {
  const f = q.form;
  return h("div", { class: "formbox" },
    h("div", { class: "formhead" }, h("b", {}, f.doc === "EIC" ? "Electrical Installation Certificate" : "Electrical Installation Condition Report"), f.where ? " · " + f.where : ""),
    h("div", { class: "formfield" }, h("div", { class: "formlabel" }, f.box), inner || h("div", { class: "formblank" }, "?")),
    f.page ? h("button", { class: "linkbtn", onclick: () => openSource(f.doc + " form", f.page) }, `📄 See it on the ${f.doc} form (page ${f.page})`) : null);
}

/* ---------- source links: open the course PDF or form at the right page ---------- */
const DOC_FILES = [[/^EICR form/i, "form:EICR_Form.pdf", "EICR form"], [/^EIC form/i, "form:EIC_Form.pdf", "EIC form"], [/^(\d+\.pdf)/i, null, null]];
function parseSources(src) {
  return String(src || "").split(";").map(part => {
    part = part.trim(); if (!part) return null;
    const pm = part.match(/\bpp?\.?\s?(\d+)/); const page = pm ? +pm[1] : null;
    for (const [re, file, label] of DOC_FILES) {
      const m = part.match(re); if (!m) continue;
      return { file: file || m[1], label: (label || m[1]) + (page ? " page " + page : ""), page, text: part };
    }
    return { file: null, label: part, page, text: part };
  }).filter(Boolean);
}
function openSource(name, page) {
  const s = parseSources(name + (page ? " p" + page : ""))[0];
  if (s) openDoc(s);
}
function openDoc(s) {
  if (!s.file) return;
  if (D && D.openDoc) { D.openDoc(s.file, s.page).then(err => { if (err) alert(err); }); return; }
  if (s.file.startsWith("form:")) window.open("forms/" + s.file.slice(5) + (s.page ? "#page=" + s.page : ""), "_blank");
  else alert(M ? `This is in your course PDF ${s.file}, page ${s.page}. The course PDFs are on your PC (Downloads\\Documents for study app).`
    : `Open ${s.file} from "Downloads\\Documents for study app" and go to page ${s.page}.`);
}
function sourceLinks(src) {
  const ss = parseSources(src); if (!ss.length) return null;
  return h("div", { class: "srclinks" }, "Source: ", ...ss.map(x => x.file
    ? h("button", { class: "linkbtn", title: x.text, onclick: () => openDoc(x) }, "📄 " + x.label)
    : h("span", {}, x.text)));
}
function explainPanel(q, open) {
  const e = q.explain || {};
  const rows = [["What", e.what], ["Why", e.why || q.why], ["How", e.how], ["Where", e.where]].filter(r => r[1]);
  const body = h("div", { class: "explain" }, rows.map(([k, t]) => h("div", { class: "exrow" }, h("b", {}, k), h("div", {}, t))), sourceLinks(q.src));
  if (open) return body;
  const d = h("details", { class: "exmore" }, h("summary", {}, "Explain more"), body);
  return d;
}
function nextQuestion() {
  if (P.pos >= P.queue.length) return finishSession();
  const key = P.queue[P.pos], q = P.items[key].q;
  ({ choice: qChoice, order: qOrder, match: qMatch, fill: qFill })[q.type](q, key);
}
function feedback(q, key, ok) {
  sound(ok ? "good" : "bad");
  const m = $(".mascot.inlesson"); if (m) { m.classList.remove("cheer", "wince"); void m.offsetWidth; m.classList.add(ok ? "cheer" : "wince"); }
  const box = h("div", { class: "fb " + (ok ? "right" : "wrong") },
    h("div", { class: "msg" }, h("b", {}, ok ? ["Correct!", "Nice one!", "Spot on!", "Great!"][Math.floor(Math.random() * 4)] : "Not quite."),
      h("div", {}, q.why), explainPanel(q, !ok)),
    h("button", { class: "btn", onclick: () => advance(key, ok) }, "Continue"));
  $("#lesson").append(box);
  box.scrollIntoView({ block: "end" });
  const c = box.querySelector(".btn"); c.focus();
}
function advance(key, ok) {
  const it = P.items[key], t = it.l.topic, mk = `${it.l.id}:${it.qi}`;
  (P.stats[t] = P.stats[t] || { right: 0, total: 0 });
  const retry = P.failed.has(key);
  if (!retry) {
    P.stats[t].total++;
    if (ok) { P.stats[t].right++; P.firstTry++; delete S.mistakes[mk]; } else { P.failed.add(key); S.mistakes[mk] = dayKey(); }
  }
  P.run = ok ? P.run + 1 : 0;
  if (!ok && !retry) P.queue.push(key);   // wrong answers come round once more at the end
  P.answered++; P.pos++;
  nextQuestion();
}
function qChoice(q, key) {
  const order = shuffle(q.options.map((_, i) => i));   // new answer order every time the question is shown
  const btns = order.map(i => h("button", { class: "opt", "data-i": i, onclick: () => {
    btns.forEach(b => b.disabled = true);
    btns[order.indexOf(q.answer)].classList.add("right");
    if (i !== q.answer) btns[order.indexOf(i)].classList.add("wrong");
    feedback(q, key, i === q.answer);
  } }, q.options[i]));
  shell([q.form ? formBox(q) : null, h("div", { class: "qtext" }, q.q), h("div", { class: "opts" }, btns)], null);
}
function qFill(q, key) {
  const [a, b] = q.q.split("___");
  const input = h("input", { type: "text", autocomplete: "off", spellcheck: "false" });
  const check = h("button", { class: "btn", disabled: true, onclick: () => {
    const ok = q.answers.some(x => sameAnswer(x, input.value));
    input.readOnly = true; input.classList.add(ok ? "right" : "wrong"); check.remove();
    if (!ok) input.value = input.value + "  →  " + q.answers[0];
    feedback(q, key, ok);
  } }, "Check");
  input.addEventListener("input", () => check.disabled = !input.value.trim());
  input.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); if (!check.disabled) check.click(); } });   // preventDefault so the same Enter does not also press Continue
  const row = h("div", { class: "fillrow" }, a, input, b);
  shell(q.form ? [h("div", { class: "qtext" }, "Fill in the form"), formBox(q, row)] : [h("div", { class: "qtext" }, "Fill in the box"), row], h("div", { class: "foot" }, check));
  input.focus();
}
function qOrder(q, key) {
  let idx = q.steps.map((_, i) => i), bank;
  do { bank = shuffle(idx); } while (bank.every((v, i) => v === i));
  let placed = [];
  const slots = h("div", { class: "slots" }), pool = h("div", { class: "opts" });
  const check = h("button", { class: "btn", disabled: true, onclick: () => {
    const ok = placed.every((v, i) => v === i);
    slots.querySelectorAll(".opt").forEach((b, i) => { b.disabled = true; b.classList.add(placed[i] === i ? "right" : "wrong"); });
    check.remove();
    if (!ok) slots.after(h("div", { class: "small muted" }, "Right order: " + q.steps.map((s, i) => `${i + 1}. ${s}`).join("  ")));
    feedback(q, key, ok);
  } }, "Check");
  function draw() {
    slots.replaceChildren(...placed.map((s, n) => h("button", { class: "opt", "data-n": n + 1, onclick: () => { placed.splice(n, 1); bank.push(s); draw(); } }, q.steps[s])));
    pool.replaceChildren(...bank.map(s => h("button", { class: "opt", onclick: () => { bank.splice(bank.indexOf(s), 1); placed.push(s); draw(); } }, q.steps[s])));
    check.disabled = bank.length > 0;
  }
  shell([q.form ? formBox(q) : null, h("div", { class: "qtext" }, q.q), h("div", { class: "muted small" }, "Tap steps to build the sequence. Tap a placed step to take it back."), slots, pool], h("div", { class: "foot" }, check));
  draw();
}
function qMatch(q, key) {
  const L = shuffle(q.pairs.map((p, i) => i)), R = shuffle(L);
  let sel = null, mistakes = 0, left = L.length;
  const lb = L.map(i => h("button", { class: "opt", onclick: () => pick("l", i) }, q.pairs[i][0]));
  const rb = R.map(i => h("button", { class: "opt", onclick: () => pick("r", i) }, q.pairs[i][1]));
  const btnOf = (side, i) => side === "l" ? lb[L.indexOf(i)] : rb[R.indexOf(i)];
  function pick(side, i) {
    const b = btnOf(side, i); if (b.classList.contains("done")) return;
    if (!sel || sel.side === side) { if (sel) btnOf(sel.side, sel.i).classList.remove("sel"); sel = { side, i }; b.classList.add("sel"); return; }
    const li = side === "l" ? i : sel.i, ri = side === "r" ? i : sel.i;
    const a = btnOf(sel.side, sel.i);
    // identical answers (e.g. two "230 V") are interchangeable
    if (li === ri || q.pairs[li][1] === q.pairs[ri][1]) { a.classList.remove("sel"); [a, b].forEach(x => { x.classList.add("done"); x.disabled = true; }); left--; sel = null;
      if (!left) feedback(q, key, mistakes === 0); }
    else { mistakes++; sound("bad"); a.classList.remove("sel"); [a, b].forEach(x => x.classList.add("wrong")); sel = null;
      setTimeout(() => [a, b].forEach(x => x.classList.remove("wrong")), 600); }
  }
  shell([q.form ? formBox(q) : null, h("div", { class: "qtext" }, q.q), h("div", { class: "cols" }, h("div", { class: "opts" }, lb), h("div", { class: "opts" }, rb))], null);
}
function finishSession() {
  const pct = Math.round(100 * P.firstTry / P.total), today = dayKey(), kind = P.kind, title = P.title;
  for (const [t, st] of Object.entries(P.stats)) { const x = S.topics[t] || { right: 0, total: 0 }; x.right += st.right; x.total += st.total; S.topics[t] = x; }
  let passed = null;
  if (kind === "lesson") {
    const l = P.meta.l, rec = S.lessons[l.id] || { attempts: 0, best: 0 };
    rec.done = true; rec.attempts++; rec.best = Math.max(rec.best, pct); rec.last = today; S.lessons[l.id] = rec;
  } else if (kind === "test") {
    const id = "test:" + P.meta.u.id, r = S.units[id] || { attempts: 0, best: 0 };
    r.attempts++; r.best = Math.max(r.best, pct); passed = pct >= 80; if (passed && !r.passed) r.passed = today; S.units[id] = r;
  }
  S.days[today] = (S.days[today] || 0) + 1;
  const first = S.streak.last !== today;
  if (first) { S.streak.count = effectiveStreak() + 1; S.streak.last = today; S.streak.best = Math.max(S.streak.best, S.streak.count); }
  save();
  const l = P.meta.l, log = { id: l ? l.id : kind, title: kind === "lesson" ? title : (kind === "test" ? "Unit test: " : "Practice: ") + (kind === "test" ? P.meta.u.title : title),
    topic: l ? topicNotion(l.topic) : kind === "test" ? "Unit test" : "Practice", score: pct, questions: P.total, streak: S.streak.count,
    status: l ? (isApproved(l) ? "Approved" : "Draft") : kind === "test" ? (passed ? "Passed" : "Not passed") : "Practice", date: today };
  if (D) D.logLesson(log);
  else SYNC_LOG = log;   // the PC adds lessons done on the phone to the Notion log
  if (M) M.lessonDone(S);
  shareDays();
  syncNow();
  P = null;
  celebrate({ kind, title, pct, first, passed });
}
function celebrate({ kind, title, pct, first, passed }) {
  const perfect = pct === 100;
  const steps = [];
  if (kind === "test") steps.push(passed
    ? () => [h("div", { class: "trophy" }, "🏆"), h("h2", {}, "Unit complete!"), h("p", {}, `${pct}% on the unit test. The next unit is open.`)]
    : () => [mascot("big wince"), h("h2", {}, "Not this time"), h("p", {}, `You got ${pct}%. You need 80% to pass. Practise the unit and try again.`)]);
  else steps.push(() => [mascot("big cheer"), h("h2", {}, perfect ? "Perfect lesson!" : kind === "practice" ? "Practice done!" : "Lesson complete!"),
    h("p", { class: "muted" }, `${title}: ${pct}% right first time`)]);
  if (first) steps.push(() => [h("div", { class: "bigflame" }), h("h2", {}, "Streak saved!"), h("div", { class: "streaknum" }, String(S.streak.count)),
    h("p", { class: "muted" }, S.streak.count === 1 ? "Day one. Come back tomorrow to build it." : `${S.streak.count} days in a row. Keep it going tomorrow.`)]);
  let i = 0;
  const show = () => {
    const kids = steps[i]();
    const m = h("div", { class: "modal celebrate" }, kids, h("button", { class: "btn", onclick: () => { i++; if (i < steps.length) show(); else { closeModal(); if (first) { const s = $("#streak"); s.classList.add("ignite"); } } } }, "Continue"));
    showModal(m);
    const bf = m.querySelector(".bigflame"); if (bf) bf.innerHTML = FLAME;
    sound("done");
    if (bf || perfect || passed) confetti(perfect || passed ? 180 : 100);
  };
  show();
}


/* ---------- boot ---------- */
document.querySelectorAll("#tabs button").forEach(b => b.addEventListener("click", () => {
  if (P && !confirm("Leave this session? Progress in it is lost.")) return;
  P = null; go(b.dataset.tab);
}));
$("#view").replaceChildren(h("div", { class: "loading" }, mascot("big"), h("div", { class: "muted" }, "Loading your lessons…")));
let VERSION = "browser";
const ver = h("span", { class: "ver" }); $(".brand").append(ver);
Promise.resolve(D && D.version ? D.version() : M ? M.version : "browser").then(v => { VERSION = v; ver.textContent = v === "browser" ? "" : "v" + v; });
load().then(loadLessons).then(() => {
  render();
  syncNow(); setInterval(syncNow, 3 * 60 * 1000);   // progress is shared between the PC and the iPhone
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") syncNow(); });
  if (M) M.start(() => S, save, () => { if (!P) render(); });   // reminders come from the server; streak is shared with the PC
  else if (!D) { reminderTick(); setInterval(reminderTick, 30000); }
  else { shareDays(); phoneDays(); setInterval(() => { shareDays(); phoneDays(); }, 10 * 60 * 1000); D.onFocus(() => { phoneDays(); syncNow(); if (!P && !$("video") && !$("#learn")) render(); }); }   // the day may have changed while hidden in the tray
});
// expose for testing
window.__sparky = { get S() { return S; }, get P() { return P; }, save, dayKey };
})();
