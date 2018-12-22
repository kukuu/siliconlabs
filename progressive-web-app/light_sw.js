//lets cache all static assets to begin
const staticAssets = [
	'./',
	'./style.css',
	'./app.js',
	//Adding falback
	'./fallback.js',
	'./images/fetch-dog.jpg'
]

self.addEventListener('install', async event => {
	//console.log(`install`)
	const cache = await caches.open('news-static');
	cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
	//console.log(`fetch`);
	const req = event.request;

	//strategy to cache resources from origin
	const url = new URL(req.url)

	if(url.origin == location.origin){
		event.respondWith(cacheFirst(req));
	} else{
		event.respondWith(networkFirst(req));
	}

	//******** This below has been refactored to include lines 20 to 24
	//event.respondWith(cacheFirst(req));
});


async function cacheFirst(req) {
	console cachedResponse = await caches.match(req);
	return cachedResponse || fetch(req);
}

async function networkFirst(req){
	const cache = await caches.open('news-dynamic');

	try {
		const res = await fetch(req);
		//As the resource can only be read once. Instead we use put and then copy
		cach.put(req, res.clone());
		return res;
	}

	catch (erros){
		//we optimise the above to receive the fallback
		const cachedResponse = await cache.match(req);
		return cachedResponse || await caches.match('./fallback.json');
	}
}