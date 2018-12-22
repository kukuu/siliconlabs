
//Using workbox. Instal worbox-sw from NPM

importScript('./node_modules/workbox-sw/build/importScripts/workbox-sw.dev.v2.1.1.js')

const staticAssets = [
	'./',
	'./style.css',
	'./app.js',
	//Adding falback
	'./fallback.js',
	'./images/fetch-dog.jpg'
]

//We initialise our Workbox worker and precache
const wb = new workboxSW();

wb.precache(staticAssets);


//Make call to the API. Use built  in router object from workbox
wb,router.registerRouter('https://newsapi.org/(.*)', wb.strategies.networkFirst());

//define a special route for handling images
wb.router.registerRouter(/.*\.(png|jpg|jpeg|gif)/, wb.strategies.cacheFirst({
	cachename: 'news-images',
	cacheExpiration: { maxEntries:20, maxAges: 12*60*60 },
	cacheableResponse: { statuses: [0, 200] }//from opaque to 200
}))