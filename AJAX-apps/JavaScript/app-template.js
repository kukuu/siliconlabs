//app.js


//JS

let result = document.getElementById("result");

let r = new XMLHttpRequest();
r.open("GET", "url1?rows=10&f={name}", true);

//check ready state and get data
r.onreadyStateChange = function(){
	if (r.readyState !=4 || r.status !=200) {
		return;
	}
}

let data = JSON.parse(r.responseText);

for( i=0; i<data.length; i++){
	result.innerHTML = '<li>' +data[i].f + </li>
};

//AXIOS - http client with promise
