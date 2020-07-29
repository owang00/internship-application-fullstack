// Published version can be found at https://fullstack_internship.owang00.workers.dev/

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
	const oldResponse = await fetch(new URL('https://cfw-takehome.developers.workers.dev/api/variants'));
	let data = await oldResponse.json();
	var urls = data["variants"];

	var num = getRandomInt();
	var oldResponseURL;

	oldResponseURL = await fetch(new URL(urls[num]));

	const newResponse = new HTMLRewriter()
	//.on('p#description', new ElementHandler()).transform(oldResponseURL)
	//.on('h1#title', new ElementHandler()).transform(oldResponseURL)
	.on('*', new ElementHandler()).transform(oldResponseURL)

	return newResponse;
}

function getRandomInt() {
	return Math.floor(Math.random() * (2));
}

class ElementHandler {
	element(element) {
    //console.log(element.tagName)
    //console.log(element.getAttribute('id'))
	}

	comments(element) {
		console.log(`Some comment`);
	}

	text(element) {
		const attribute = element.text

		console.log(element)

		if (attribute.match("1"))
			element.replace("Hello World Variant 1");
		else if (attribute.match("2"))
			element.replace("Hello World Variant 2");
		else if (attribute.match("This is variant one of the take home project!"))
			element.replace("Now belongs to Oliver");
		else if (attribute.match("This is variant two of the take home project!"))
			element.replace("Now belongs to Oliver 2");
		return;
	}
}