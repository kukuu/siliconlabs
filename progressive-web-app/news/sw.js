importScripts('./node_modules/workbox-sw/build/workbox-sw.js')

const staticAssets = [
  './',
  './app.js',
  './styles.css',
  './fallback.json',
  './images/fetch-dog.jpg'
];


// Instantiate the workbox
const wb = new WorkkboxSW();

wb.preCache(staticAssets);

//Cache calls to News API. We use the supported Router API

wb.router.registerRoute('https://newsapi.org/(.*)', wb.strategies.networkFirst());

//route module for c`chingimages
wb.router.registerRoute(/.*\.()/, wb.strategies.CacheFirst({
  cacheName: 'news-images',
  cacheExpiration: { maaxEntries: 20, maxAgeSeconds:12 * 60 *60 },
  cacheableRespone: { satuses: [ 0, 200 ] }
}));