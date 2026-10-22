// Sparky Study service worker: keeps the app working offline and shows the reminder notifications.
const VERSION = "2.2.0-0ef0d354";
const ASSETS = ["./", "app.js", "forms/EICR_Form.pdf", "forms/EIC_Form.pdf", "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable.png", "index.html", "lessons/a1-01.js", "lessons/a1-02.js", "lessons/a1-03.js", "lessons/a1-04.js", "lessons/a1-05.js", "lessons/a2-01.js", "lessons/a2-02.js", "lessons/a2-03.js", "lessons/a2-04.js", "lessons/a2-05.js", "lessons/a2-06.js", "lessons/a3-01.js", "lessons/a3-02.js", "lessons/a3-03.js", "lessons/a3-04.js", "lessons/a3-05.js", "lessons/a4-01.js", "lessons/a4-02.js", "lessons/a4-03.js", "lessons/a4-04.js", "lessons/a5-01.js", "lessons/a5-02.js", "lessons/a5-03.js", "lessons/a5-04.js", "lessons/a5-05.js", "lessons/a6-01.js", "lessons/a6-02.js", "lessons/a6-03.js", "lessons/a6-04.js", "lessons/manifest.js", "lessons/topics.js", "lessons/units.js", "manifest.webmanifest", "phone-config.js", "phone.css", "phone.js", "style.css"];
const CACHE = "sparky-" + VERSION;

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("sparky-") && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;   // relay and state.json always go to the network
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request)));
});

self.addEventListener("push", e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { body: e.data && e.data.text() }; }
  const title = d.title || "Sparky Study";
  const jobs = [self.registration.showNotification(title, {
    body: d.body || "Time for today's lesson.", icon: "icons/icon-192.png", badge: "icons/icon-192.png", tag: d.tag || "sparky", data: { url: "./" }
  })];
  if (self.navigator && self.navigator.setAppBadge) jobs.push(d.clearBadge ? self.navigator.clearAppBadge() : self.navigator.setAppBadge(1));
  e.waitUntil(Promise.all(jobs).catch(() => {}));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(ws => {
    for (const w of ws) if ("focus" in w) return w.focus();
    return self.clients.openWindow("./");
  }));
});
