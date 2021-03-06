const cfg = {
	prefix: 'todo-react'
};

workbox.core.setCacheNameDetails({ prefix: cfg.prefix });

self.addEventListener('message', event => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
});

workbox.core.clientsClaim();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(
	workbox.precaching.getCacheKeyForURL('/index.html'),
	{
		blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
	}
);

self.addEventListener('fetch', event => {
	if (event.request.url === '/') {
		const staleWhileRevalidate = new workbox.strategies.StaleWhileRevalidate();
		event.respondWith(staleWhileRevalidate.handle({ event }));
	}
});
