/* Nakawe Service Worker — ExpoCiencias 2026 */

const CACHE = 'nakawe-v2';
const ASSETS = [
  'index.html',
  'manifest.json',
  'assets/images/logo.png',
  'assets/images/luz.png',
  'assets/images/nakawe-logo.jpeg',
  'assets/images/icon-192.png',
  'assets/images/icon-512.png',
  'assets/images/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin
  if (request.method !== 'GET' || url.origin !== location.origin) return;

  // Images: cache-first
  if (/\.(png|jpe?g|webp|svg|ico)$/i.test(url.pathname)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // HTML: network-first
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  // Everything else: stale-while-revalidate
  event.respondWith(staleWhileRevalidate(request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached || fetch(request);
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(CACHE);
    cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || new Response('Offline', { status: 503 });
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request).then(response => {
    cache.put(request, response.clone());
    return response;
  }).catch(() => cached);
  return cached || fetchPromise;
}
