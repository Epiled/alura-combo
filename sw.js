const cacheName = 'Alura HTML/CSS';

const versao = 2;

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            cache.addAll([
                './',
                './index.html',
                './manifest.webmanifest',
                './assets/css/style.css',
                'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Overpass:wght@400;600;700;800;900&display=swap',

                './assets/img/Background.webp',
                './assets/img/celular.png',
                './assets/img/Combo.webp',
                './assets/img/computador.png',
                './assets/img/favicon.png',
                './assets/img/Logo.webp',
                './assets/img/Notebook.webp',
                './assets/img/Plataformas.webp',
                './assets/img/Telas.webp',
                './assets/img/tv.png',

                './assets/img/pwa/app_icon.png',
                './assets/img/pwa/maskable_icon.png',
                './assets/img/pwa/alura_lingua_icone_512.png',
            ])
        })
    )
    return self.skipWaiting();
});

self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(event.request);
      }
    )
   )
 });