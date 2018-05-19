importScripts('/assets/js/cache-polyfill.js');
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('r3bl.me').then(function(cache) {
      return cache.addAll([
      '/',
      '/index.html',
      '/assets/css/main.css',
      '/assets/logos/logo-512.png',
      '/assets/js/vendor/jquery-3.3.1.min.js',
      '/assets/js/scripts.min.js'
    ]);
  })
  );
});
