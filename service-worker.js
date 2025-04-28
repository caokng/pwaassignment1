self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('pwa-demo').then(function(cache) {
            return cache.addAll([
                './',
                './index.html',
                './index.css',
                './manifest.json',
                './app.js',
                'images/droplet.png',
                'images/droplet2.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
