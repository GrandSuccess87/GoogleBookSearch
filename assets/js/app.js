function bookQuery(event) {
	event.preventDefault();
	// Grabs the user input
	const search = $("#search").val().trim();
	localStorage.setItem("last search ", $("#search").val().trim());
	localStorage.getItem("last search")
	// Checks to see if the input field is empty
	if(search == '' || search == null) {
		alert('Your search field is empty.  Please enter the book or author you would like to search.');
	} else {
	// Sends an HTTP GET request to the API
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&maxResults=30",
		type: 'GET',
		data: search,
		dataType: "json"
	}).then(function(callbackData) {
		renderBook(callbackData);
	});
	}
}

function enter_button () {
	document.querySelector('#search').addEventListener("keyup", function(event) {
	  event.preventDefault();
	  if (event.keyCode === 13) {
		document.getElementById('searchButton').click();
	  }
	});
};

// Loops through the callbackData
function renderBook(callbackData) {
	const data = callbackData.items;
	const viewerCanvas = document.getElementById('viewerCanvas')
	$("#viewerCanvas").empty();

	// Loops through the book data
	data.forEach(function(bookData) {
	// Declare variables for the book data
	const book = bookData.volumeInfo;
	const title = book.title;
	const author = book.authors;
	const publisher = book.publisher;
	const image = book.imageLinks;
	const thumbnail = image.thumbnail;
	const smallThumbnail = image.smallThumbnail;
	const preview = book.previewLink;

	// Creates a new div for each book in the array
	const newBookDiv = document.createElement('div');
	newBookDiv.setAttribute('class', 'book')

	// assign the title, author, publisher, image, and preview link then append to the new div

	// title
	localStorage.setItem("title", title);
	localStorage.getItem("title");
	const title_section = document.createElement('p');
	const bookTitle = document.createElement('a');
	const titleLink = document.createTextNode(title);
	bookTitle.appendChild(titleLink);
	bookTitle.title = 'Book_Title'
	bookTitle.setAttribute('class', 'title');
	bookTitle.href = preview;
	title_section.appendChild(bookTitle);

	// author
	localStorage.setItem("author", author);
	localStorage.getItem("author");
	const auth_section = document.createElement('p');
	const bookAuthor = document.createElement('a');
	const authorLink = document.createTextNode(author);
	bookAuthor.appendChild(authorLink);
	bookAuthor.title = 'Book_Author'
	bookAuthor.setAttribute('class', 'author');
	bookAuthor.href = preview;
	auth_section.appendChild(bookAuthor);

	// publisher
	localStorage.setItem("publisher", publisher);
	localStorage.getItem("publisher");
	const pub_section = document.createElement('p');
	const bookPublisher = document.createElement('a');
	const publisherLink = document.createTextNode('Published By ' + publisher);
	bookPublisher.appendChild(publisherLink);
	bookPublisher.title = 'Book_Publisher';
	bookPublisher.setAttribute('class', 'publisher');
	bookPublisher.href = preview;
	pub_section.appendChild(bookPublisher);

	// book image
	localStorage.setItem("thumbnail", smallThumbnail);
	localStorage.getItem("thumbnail");
	const bookImageLink = document.createElement('a');
	bookImageLink.href = preview;
	const bookImage = document.createElement('img');
	bookImage.setAttribute('class', 'thumbnail');
	bookImage.setAttribute('src', smallThumbnail);
	bookImageLink.appendChild(bookImage);

	// preview
	localStorage.setItem("preview", preview);
	localStorage.getItem("preview");
	const link_section = document.createElement('p');
	const bookPreview = document.createElement('a');
	const linkText = document.createTextNode('Preview');
	bookPreview.appendChild(linkText);
	bookPreview.title = 'Book_Preview';
	bookPreview.setAttribute('class', 'preview');
	bookPreview.href = preview;
	link_section.appendChild(bookPreview);

	// Appends all data to the newBookDiv
	newBookDiv.appendChild(link_section);
	newBookDiv.appendChild(title_section);
	newBookDiv.appendChild(auth_section);
	newBookDiv.appendChild(pub_section);
	newBookDiv.appendChild(bookImageLink);

	// Appends new book div to the viewCanvas div
	viewerCanvas.appendChild(newBookDiv);

	//Empties search div
	$("#search").val("");
	});
};

// Invoke functions below
document.getElementById('searchButton').addEventListener('click', bookQuery, false);
enter_button();
