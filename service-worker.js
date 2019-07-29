importScripts("/todo/precache-manifest.779aa5cb81ad0d8f95b56fbf6621aaf0.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

