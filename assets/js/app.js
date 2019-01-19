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


		 	console.log('Title: ' + data[i].volumeInfo.title);
		 	console.log('Author: ' + data[i].volumeInfo.authors);
		 	console.log('Publisher: ' + data[i].volumeInfo.publisher);
			console.log('Thumbnail: ' + data[i].volumeInfo.imageLinks.thumbnail);
			console.log('Small Thumbnail: ' + data[i].volumeInfo.imageLinks.smallThumbnail);
			console.log('Preview: ' + data[i].volumeInfo.previewLink);

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
			//title
			const bookTitle = document.createElement('p');
			bookTitle.setAttribute('class', 'title');
			bookTitle.textContent = 'Title: ' + title;
			bookTitle.href = preview;
			// author
			const bookAuthor = document.createElement('p');
			bookAuthor.setAttribute('class', 'author');
			bookAuthor.textContent = 'Author: ' + author;
			// publisher;
			const bookPublisher = document.createElement('p');
			bookPublisher.setAttribute('class', 'publisher');
			bookPublisher.textContent = 'Publisher: ' + publisher;
			// smallThumbnail;
			const bookImage = document.createElement('img');
			bookImage.setAttribute('class', 'smallThumbnail');
			// bookImage.textContent = 'Image: ' + smallThumbnail;
			bookImage.setAttribute('src', smallThumbnail);
			// preview;
			const bookPreview = document.createElement('a');
			const linkText = document.createTextNode('Preview');
			bookPreview.appendChild(linkText);
			bookPreview.title = 'Book Preview';
			bookPreview.setAttribute('class', 'preview');
			bookPreview.href = preview;

			// append the data to the newBookDiv
			newBookDiv.appendChild(bookTitle);
			newBookDiv.appendChild(bookAuthor);
			newBookDiv.appendChild(bookPublisher);
			newBookDiv.appendChild(bookImage);
			newBookDiv.appendChild(bookPreview);
			// append this div to the viewCanvas div
			viewerCanvas.appendChild(newBookDiv);
		 }

	
	});
}

document.getElementById('searchButton').addEventListener('click', renderBooks, false);