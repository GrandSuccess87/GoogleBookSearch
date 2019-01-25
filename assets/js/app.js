function bookQuery(event) {
	event.preventDefault();
	// Grabs the user input
	const search = document.querySelector('#search').value;
	localStorage.setItem("last search ", $("#search").val().trim());
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
$("#viewerCanvas").empty();

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
const titleDiv = document.createElement('p');
const bookTitle = document.createElement('a');
const titleLink = document.createTextNode(title);
bookTitle.appendChild(titleLink);
bookTitle.title = 'Book_Title'
bookTitle.setAttribute('class', 'title');
bookTitle.href = preview;
titleDiv.appendChild(bookTitle);
// author
const authorDiv = document.createElement('p');
const bookAuthor = document.createElement('a');
const authorLink = document.createTextNode(author);
bookAuthor.appendChild(authorLink);
bookAuthor.title = 'Book_Author'
bookAuthor.setAttribute('class', 'author');
bookAuthor.href = preview;
authorDiv.appendChild(bookAuthor);
// publisher
const publisherDiv = document.createElement('p');
const bookPublisher = document.createElement('a');
const publisherLink = document.createTextNode(publisher);
bookPublisher.appendChild(publisherLink);
bookPublisher.title = 'Book_Publisher';
bookPublisher.setAttribute('class', 'publisher');
bookPublisher.href = preview;
publisherDiv.appendChild(bookPublisher);
// book image
// const imageDiv = document.createElement('p');
const bookImageLink = document.createElement('a');
bookImageLink.href = preview;
const bookImage = document.createElement('img');
bookImage.setAttribute('class', 'thumbnail');
bookImage.setAttribute('src', smallThumbnail);
bookImageLink.appendChild(bookImage);
// imageDiv.appendChild(bookImageLink);
// preview
const bookPreview = document.createElement('a');
const linkText = document.createTextNode('Preview');
bookPreview.appendChild(linkText);
bookPreview.title = 'Book_Preview';
bookPreview.setAttribute('class', 'preview');
bookPreview.href = preview;

// append the data to the newBookDiv
newBookDiv.appendChild(bookPreview);
newBookDiv.appendChild(titleDiv);
newBookDiv.appendChild(authorDiv);
newBookDiv.appendChild(publisherDiv);
newBookDiv.appendChild(bookImageLink);
// append this div to the viewCanvas div
viewerCanvas.appendChild(newBookDiv);
});
$("#search").val("");
}

document.getElementById('searchButton').addEventListener('click', bookQuery, false);
