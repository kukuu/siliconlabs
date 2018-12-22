//Author - Alexander Adu-Sarkodie
//store key
const apiKey  = 000000000000000;
//Using plane JS to load data
const main = document.querySelector('main');
//Get handler for attaching source
const sourceSelector = document.querySelector('#sourceSelector');
//Define default source
const defaultSource = 'the-washington-post';

//add event listenere whiles not blocking  page load
//this has been updated to an async call to fetch selected values
//from drop down menu. Lines 14,18 and 20 have been updated
window.addEventListener('load', async e => {
	updateNews();

	//Using the updateource we can update the parent of our endpoint
	await updateSource();
	//get value from drop downmenu
	sourceSelector.value = defaultSource;

	//we implement sourceSelector change event
	sourceSelector.addEventListener('change', e => {
		updateNews(e.target.value);
	});

	//Injecting service worker
	if('serviceWorker' in  navigator){
		try {
			navigator.serviceWorker.register('sw.js');
			console.log(`Service Worker registerd`)
		}
		catch(error){
			console.log(`SW registeration failed`);
		}
	}
});

//2
async function updateSource(){
	const res = await fetch('/v2/top-headlines');
	const json = await res.json();

	sourceSelector.innerHTML = json.sources
	.map(src => `<option value="${src.id}>${src.name}</option>` ).join('\name');
}

//1. use async functions which enables reading of promises in a more fashionable way
async function updateNews( source = defaultSource) {
	// get result
	const res = await fetch('https://newsapi.org/v2/top-headlines?country=source&apiKey=apiKey')

	//get json from result
	const json = await res.json

	//update page content 
	main.innerHTML = json.articles.map(createdArticle).join('\n')

}

//Evaluate createArticle() to return data

function createArticle(artticle){
	return `
		<div class="artticle">
			<a href="${artticle.url}">
				<h2>${artticle.title}</h2>
				<img src="${artticle.urlToImage}">
				<p>${artticle.description}</p>
			</a>

		</div>
	`;
}

