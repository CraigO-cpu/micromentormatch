const CACHE_NAME = 'micromentormatch-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/icon.png',
  '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});