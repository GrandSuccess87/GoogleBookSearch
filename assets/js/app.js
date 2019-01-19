// connect js and html
function renderBooks(argument) {
	console.log("Render Books Function Successfully Loaded");
	// Grab the input from the user
	const search = document.querySelector('#search').value;
	// const search = $('#search').val().trim();
	console.log(search);

	// send an HTTP GET request to the API
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		// + intitle + inauthor + inpublisher + key=AIzaSyDyNOO9LVN_GjuouA8pqHHRSXtBB_RZO8Y
		type: 'GET',
		data: search,
		dataType: "json"
	}).then(function(callbackData) {
		
		// log the callback data
		 console.log(callbackData);

		 const data = callbackData.items;
		 const viewerCanvas = document.getElementById('viewerCanvas')

		 // loop through the books that match the query
		 for(var i = 0; i < data.length; i++) {


		 	console.log(data[i].volumeInfo.title);
		 	console.log(data[i].volumeInfo.authors);
		 	console.log(data[i].volumeInfo.publisher);
			console.log(data[i].volumeInfo.imageLinks.thumbnail);
			console.log(data[i].volumeInfo.imageLinks.smallThumbnail);
			console.log(data[i].volumeInfo.previewLink);

			// declare variables for the book data

			const book = data[i].volumeInfo;
			const title = book.title;
			const author = book.authors;
			const publisher = book.publisher;
			const image = book.imageLinks;
			const thumbnail = image.thumbnail;
			const smallThumbnail = image.smallThumbnail;
			const preview = book.previewLink;

			// for each book in the array create a new div
			const newBookDiv = document.createElement('div');
			newBookDiv.setAttribute('class', 'book')

			// assign the title, author, publisher, image, and preview link to the new div
			// const p = document.createElement('p');
			// p.textContent = title;
			newBookDiv.textContent = title;
			// newBookDiv.textContent = author;
			// newBookDiv.textContent = publisher;
			// newBookDiv.textContent = smallThumbnail;
			// newBookDiv.textContent = preview;

			// append the data to the newBookDiv
			// p.appendChild(newBookDiv);

			// append this div to the viewCanvas div
			viewerCanvas.appendChild(newBookDiv);
		 }

	
	});
}

document.getElementById('searchButton').addEventListener('click', renderBooks, false);