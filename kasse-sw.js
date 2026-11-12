// Service Worker für die Kasse
//
// Ziel: Die App läuft offline, bekommt aber trotzdem automatisch Updates
// (neue Preise, neue Produkte).
//
// Strategie: "Network first mit Zeitlimit"
//   1. Es wird zuerst das Netz gefragt (frische Version).
//   2. Antwortet das Netz nicht innerhalb von NETWORK_TIMEOUT_MS
//      oder gar nicht (offline), kommt die Version aus dem Cache.
//   3. Jede erfolgreiche Antwort wird im Cache abgelegt, so dass
//      nach dem ersten Besuch online auch alle JS-/CSS-Dateien offline da sind.
//
// Wartung: CACHE_VERSION nur erhöhen, wenn du den Cache komplett leeren willst.
// Für normale Preisänderungen ist das NICHT nötig.

var CACHE_VERSION = 'v1';
var CACHE = 'kasse-' + CACHE_VERSION;
var NETWORK_TIMEOUT_MS = 3000;

// Mindestens das muss offline vorhanden sein.
var PRECACHE = ['./', './index.html'];

self.addEventListener('install', function (evt) {
  evt.waitUntil(
    caches.open(CACHE)
      .then(function (cache) { return cache.addAll(PRECACHE); })
      .then(function () { return self.skipWaiting(); })   // neue Version sofort aktiv
  );
});

self.addEventListener('activate', function (evt) {
  evt.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(
          keys
            .filter(function (key) { return key !== CACHE; })   // alte Caches löschen
            .map(function (key) { return caches.delete(key); })
        );
      })
      .then(function () { return self.clients.claim(); })       // offene Tabs übernehmen
  );
});

self.addEventListener('fetch', function (evt) {
  var request = evt.request;

  // Nur GET-Anfragen auf die eigene Domain behandeln
  if (request.method !== 'GET') return;
  if (new URL(request.url).origin !== self.location.origin) return;

  evt.respondWith(networkFirst(request));
});

function networkFirst(request) {
  return fetchWithTimeout(request, NETWORK_TIMEOUT_MS)
    .then(function (response) {
      // Nur gültige Antworten merken
      if (response && response.ok) {
        var copy = response.clone();
        caches.open(CACHE).then(function (cache) { cache.put(request, copy); });
      }
      return response;
    })
    .catch(function () {
      return fromCache(request);
    });
}

function fetchWithTimeout(request, ms) {
  return new Promise(function (resolve, reject) {
    var timer = setTimeout(function () { reject(new Error('timeout')); }, ms);
    fetch(request).then(
      function (response) { clearTimeout(timer); resolve(response); },
      function (error) { clearTimeout(timer); reject(error); }
    );
  });
}

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request, { ignoreSearch: true }).then(function (match) {
      if (match) return match;
      // Seitenaufruf ohne Treffer (z. B. andere URL-Variante): App-Grundseite liefern
      if (request.mode === 'navigate') return cache.match('./index.html');
      return Response.error();
    });
  });
}