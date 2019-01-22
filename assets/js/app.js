function bookQuery() {
	// Grabs the user input
	const search = document.querySelector('#search').value;
	//checks to see if the input field is empty
	if(search == '' || search == null) {
		alert('Your search field is empty.  Please enter the book or author you would like to search.');
		} else {
	// send an HTTP GET request to the API
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		type: 'GET',
		data: search,
		dataType: "json"
	}).then(function(callbackData) {
		renderBook(callbackData);
	});
}
}

// function that will loop through the callbackData
function renderBook(callbackData) {
const data = callbackData.items;
const viewerCanvas = document.getElementById('viewerCanvas')

// loops through the book data
data.forEach(function(bookData) {
// declare variables for the book data
const book = bookData.volumeInfo;
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

// assign the title, author, publisher, image, and preview link then append to the new div

//title
const bookTitle = document.createElement('div');
bookTitle.setAttribute('class', 'title');
bookTitle.textContent = 'Title: ' + title;
// author
const bookAuthor = document.createElement('div');
bookAuthor.setAttribute('class', 'author');
bookAuthor.textContent = 'Author: ' + author;
// publisher;
const bookPublisher = document.createElement('div');
bookPublisher.setAttribute('class', 'publisher');
bookPublisher.textContent = 'Publisher: ' + publisher;
// smallThumbnail;
const bookImage = document.createElement('img');
bookImage.setAttribute('class', 'smallThumbnail');
bookImage.setAttribute('src', smallThumbnail);
// preview;
const bookPreview = document.createElement('a');
const linkText = document.createTextNode('Preview');
bookPreview.appendChild(linkText);
bookPreview.title = 'Book Preview';
bookPreview.setAttribute('class', 'preview');
bookPreview.href = preview;

// append the data to the newBookDiv
newBookDiv.appendChild(bookPreview);
newBookDiv.appendChild(bookTitle);
newBookDiv.appendChild(bookAuthor);
newBookDiv.appendChild(bookPublisher);
newBookDiv.appendChild(bookImage);
// append this div to the viewCanvas div
viewerCanvas.appendChild(newBookDiv);
});
}

document.getElementById('searchButton').addEventListener('click', bookQuery, false);
