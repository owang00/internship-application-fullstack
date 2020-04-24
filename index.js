addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
	const response = await fetch(new URL('https://cfw-takehome.developers.workers.dev/api/variants'));
	let data = await response.json();
	var urls = data["variants"];

	if(getRandomInt() == 0) {
		
	}


	/*
	var1 = data["variants"][0];
	var2 = data["variants"][1];
	console.log(var1);
	console.log(var2);
	*/ 
	return new Response(var1+"\n"+var2, {
		headers: { 'content-type': 'text/plain' },
	});
}

function getRandomInt() {
  return Math.floor(Math.random()*(2));
}
