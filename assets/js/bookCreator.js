// function to set the title attributes 
function setBookTitleAttributes(book, localStorage) {
	// Declare initial variables
	const title = book.title;
	const preview = book.previewLink;
	// Set item to local storage for data persistence
	localStorage.setItem("title", title);
	// Set title attributes
	title_section = document.createElement('p');
	const bookTitle = document.createElement('a');
	const titleLink = document.createTextNode(title);
	bookTitle.appendChild(titleLink);
	bookTitle.title = 'Book_Title'
	bookTitle.setAttribute('class', 'title');
	bookTitle.href = preview;
	title_section.appendChild(bookTitle);
	// Leaves blank if no title exists
	if(!title) {
		return titleLink.nodeValue = ' ';
	}
};

// function to set the author attributes
function setBookAuthorAttributes(book, localStorage) {
	// Declare initial variables
	const author = book.authors;
	const preview = book.previewLink;
	// Set item to local storage for data persistence
	localStorage.setItem('author', author);
	// Set author attributes
	auth_section = document.createElement('p');
	const bookAuthor = document.createElement('a');
	const authorLink = document.createTextNode(author[0] + ', ' + author[1]);			
	bookAuthor.appendChild(authorLink);
	bookAuthor.title = 'Book_Author'
	bookAuthor.setAttribute('class', 'author');
	bookAuthor.href = preview;
	auth_section.appendChild(bookAuthor);
	// Leaves blank if no author(s) exists
	if(!author) {
		return authorLink.nodeValue = ' ';
	};

	if(!author[1]) {
		return authorLink.nodeValue = author[0];
	};
};

// function to set the publisher attributes
function setBookPublisherAttributes (book, localStorage) {
	// Declare initial variables
	const publisher = book.publisher;
	const preview = book.previewLink;
	// Set item to local storage for data persistence
	localStorage.setItem('publisher', publisher);
	// Set publisher attributes
	pub_section = document.createElement('p');
	const bookPublisher = document.createElement('a');
	const publisherLink = document.createTextNode('Published By ' + publisher);
	bookPublisher.appendChild(publisherLink);
	bookPublisher.title = 'Book_Publisher';
	bookPublisher.setAttribute('class', 'publisher');
	bookPublisher.href = preview;
	pub_section.appendChild(bookPublisher);
	// Leaves blank if no publisher exists
	if(!publisher) {
		return publisherLink.nodeValue = ' ';
	}
};

// function to set the image attributes
function setBookImageAttributes(book, localStorage) {
	// Declare initial variables
	const image = book.imageLinks;
	const thumbnail = image.thumbnail;
	const smallThumbnail = image.smallThumbnail;	
	const preview = book.previewLink;
	// Set item to local storage for data persistence
	localStorage.setItem('thumbnail', smallThumbnail);
	// Set image attributes
	bookImageLink = document.createElement('a');
	bookImageLink.href = preview;
	const bookImage = document.createElement('img');
	bookImage.setAttribute('class', 'thumbnail');
	bookImage.setAttribute('src', smallThumbnail);
	bookImageLink.appendChild(bookImage);
	// Leaves blank if no image exists
	if(!smallThumbnail) {
		return bookImage.nodeValue = ' ';
	}

};

// function to set the preview attributes
function setBookPreview (book, localStorage) {
	// Declare initial variable
	const preview = book.previewLink;
	// Set item to local storage for data persistence
	localStorage.setItem('preview', preview);
	// Set preview attributes
	link_section = document.createElement('p');
	const bookPreview = document.createElement('a');
	const linkText = document.createTextNode('Preview');
	bookPreview.appendChild(linkText);
	bookPreview.title = 'Book_Preview';
	bookPreview.setAttribute('class', 'preview');
	bookPreview.href = preview;
	link_section.appendChild(bookPreview);
	// Leaves blank if no preview exists
	if(!preview) {
		return linkText.nodeValue = ' ';
	}
}; 

// function to create the book and append all data
function createBook () { 
	// Creates a new div for each book in the array
	const newBookDiv = document.createElement('div');
	newBookDiv.setAttribute('class', 'book');
	// Appends all data to the newBookDiv
	newBookDiv.appendChild(link_section);
	newBookDiv.appendChild(title_section);
	newBookDiv.appendChild(auth_section);
	newBookDiv.appendChild(pub_section);
	newBookDiv.appendChild(bookImageLink);
	// Appends new book div to the viewerCanvas div
	viewerCanvas.appendChild(newBookDiv);

};


