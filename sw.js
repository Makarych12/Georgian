/* ==========================================================================
   Georgian Cards · ქართული ბარათები — Service Worker (Offline-Ready PWA)
   - App Shell (HTML / CSS / JS / базы данных): Network-First & Stale-While-Revalidate
   - Медиафайлы (MP3-озвучка, фотографии Грузии, иконки, шрифты): Cache-First
   ========================================================================== */

const SHELL_CACHE = 'georgian-cards-shell-v2';
const MEDIA_CACHE = 'georgian-cards-media-v2';

const APP_SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/data/alphabet.js',
  './js/data/trainer.js',
  './js/data/cards.js',
  './js/data/photo_credits.js',
  './js/storage.js',
  './js/audio.js',
  './js/app.js',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/favicon-32.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(SHELL_CACHE).then(function (cache) {
      return cache.addAll(APP_SHELL_ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          if (key !== SHELL_CACHE && key !== MEDIA_CACHE) {
            return caches.delete(key);
          }
          return Promise.resolve();
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

function isMediaRequest(url) {
  const p = url.pathname.toLowerCase();
  return (
    p.indexOf('/assets/audio/') !== -1 ||
    p.indexOf('/assets/photos/') !== -1 ||
    p.indexOf('/assets/icons/') !== -1 ||
    p.endsWith('.mp3') ||
    p.endsWith('.jpg') ||
    p.endsWith('.jpeg') ||
    p.endsWith('.png') ||
    p.endsWith('.webp') ||
    p.endsWith('.woff2') ||
    url.hostname === 'fonts.gstatic.com'
  );
}

function isNavigationOrManifest(request, url) {
  if (request.mode === 'navigate') return true;
  const p = url.pathname.toLowerCase();
  return p.endsWith('/') || p.endsWith('/index.html') || p.endsWith('/manifest.json');
}

async function buildRangeResponse(rangeHeader, fullResponse) {
  try {
    const buf = await fullResponse.arrayBuffer();
    const total = buf.byteLength;
    const match = /bytes=(\d+)-(\d*)/.exec(rangeHeader || '');
    if (!match) {
      return new Response(buf, {
        status: 200,
        headers: fullResponse.headers
      });
    }
    const start = parseInt(match[1], 10);
    const end = match[2] ? Math.min(total - 1, parseInt(match[2], 10)) : (total - 1);
    if (isNaN(start) || start >= total || end < start) {
      return new Response(null, {
        status: 416,
        headers: { 'Content-Range': 'bytes */' + total }
      });
    }
    const chunk = buf.slice(start, end + 1);
    const contentType = fullResponse.headers.get('Content-Type') || 'audio/mpeg';
    return new Response(chunk, {
      status: 206,
      statusText: 'Partial Content',
      headers: {
        'Content-Type': contentType,
        'Content-Length': String(chunk.byteLength),
        'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
        'Accept-Ranges': 'bytes'
      }
    });
  } catch (_) {
    return fullResponse;
  }
}

async function handleMediaCacheFirst(request) {
  const cache = await caches.open(MEDIA_CACHE);
  const rangeHeader = request.headers.get('range');
  const cacheKeyUrl = request.url;

  const cached = await cache.match(cacheKeyUrl);
  if (cached) {
    if (rangeHeader) {
      return buildRangeResponse(rangeHeader, cached.clone());
    }
    return cached;
  }

  try {
    // Для корректной записи в Cache API запрашиваем полный ресурс без заголовка Range
    const fetchReq = rangeHeader ? new Request(request.url, { mode: request.mode, credentials: request.credentials }) : request;
    const networkRes = await fetch(fetchReq);
    if (networkRes && networkRes.status === 200 && (networkRes.type === 'basic' || networkRes.type === 'cors')) {
      try {
        await cache.put(cacheKeyUrl, networkRes.clone());
      } catch (_) {}
      if (rangeHeader) {
        return buildRangeResponse(rangeHeader, networkRes.clone());
      }
    }
    return networkRes;
  } catch (_) {
    return Response.error();
  }
}

async function handleNetworkFirst(request) {
  const cache = await caches.open(SHELL_CACHE);
  try {
    const fresh = await fetch(request);
    if (fresh && fresh.status === 200) {
      cache.put(request, fresh.clone()).catch(function () {});
    }
    return fresh;
  } catch (_) {
    const cached = await cache.match(request);
    if (cached) return cached;
    if (request.mode === 'navigate') {
      const fallbackDoc = await cache.match('./index.html');
      if (fallbackDoc) return fallbackDoc;
    }
    return Response.error();
  }
}

async function handleStaleWhileRevalidate(request) {
  const cache = await caches.open(SHELL_CACHE);
  const cached = await cache.match(request);
  const networkPromise = fetch(request).then(function (fresh) {
    if (fresh && fresh.status === 200) {
      cache.put(request, fresh.clone()).catch(function () {});
    }
    return fresh;
  }).catch(function () {
    return null;
  });

  if (cached) {
    return cached;
  }
  const fresh = await networkPromise;
  return fresh || Response.error();
}

self.addEventListener('fetch', function (event) {
  const req = event.request;
  if (req.method !== 'GET') return;

  let url;
  try {
    url = new URL(req.url);
  } catch (_) {
    return;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  if (isMediaRequest(url)) {
    event.respondWith(handleMediaCacheFirst(req));
    return;
  }

  if (isNavigationOrManifest(req, url)) {
    event.respondWith(handleNetworkFirst(req));
    return;
  }

  event.respondWith(handleStaleWhileRevalidate(req));
});
