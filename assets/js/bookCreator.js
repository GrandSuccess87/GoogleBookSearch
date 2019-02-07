// function to set the title attributes 
function setBookTitleAttributes(book, localStorage) {
	const title = book.title;
	const preview = book.previewLink;

	localStorage.setItem("title", title);
	localStorage.getItem("title");

	title_section = document.createElement('p');
	const bookTitle = document.createElement('a');
	const titleLink = document.createTextNode(title);
	bookTitle.appendChild(titleLink);
	bookTitle.title = 'Book_Title'
	bookTitle.setAttribute('class', 'title');
	bookTitle.href = preview;
	title_section.appendChild(bookTitle);
};

// function to set the author attributes
function setBookAuthorAttributes(book, localStorage) {
	const author = book.authors;
	const preview = book.previewLink;

	localStorage.setItem("author", author);
	localStorage.getItem("author");

	auth_section = document.createElement('p');
	const bookAuthor = document.createElement('a');
	const authorLink = document.createTextNode(author);
	bookAuthor.appendChild(authorLink);
	bookAuthor.title = 'Book_Author'
	bookAuthor.setAttribute('class', 'author');
	bookAuthor.href = preview;
	auth_section.appendChild(bookAuthor);
};

// function to set the publisher attributes
function setBookPublisherAttributes (book, localStorage) {
	const publisher = book.publisher;
	const preview = book.previewLink;

	localStorage.setItem("publisher", publisher);
	localStorage.getItem("publisher");

	pub_section = document.createElement('p');
	const bookPublisher = document.createElement('a');
	const publisherLink = document.createTextNode('Published By ' + publisher);
	bookPublisher.appendChild(publisherLink);
	bookPublisher.title = 'Book_Publisher';
	bookPublisher.setAttribute('class', 'publisher');
	bookPublisher.href = preview;
	pub_section.appendChild(bookPublisher);
};

// function to set the image attributes
function setBookImageAttributes(book, localStorage) {
	const image = book.imageLinks;
	const thumbnail = image.thumbnail;
	const smallThumbnail = image.smallThumbnail;	
	const preview = book.previewLink;

	localStorage.setItem("thumbnail", smallThumbnail);
	localStorage.getItem("thumbnail");

	bookImageLink = document.createElement('a');
	bookImageLink.href = preview;
	const bookImage = document.createElement('img');
	bookImage.setAttribute('class', 'thumbnail');
	bookImage.setAttribute('src', smallThumbnail);
	bookImageLink.appendChild(bookImage);
};

// function to set the preview attributes
function setBookPreview (book, localStorage) {
	const preview = book.previewLink;

	localStorage.setItem("preview", preview);
	localStorage.getItem("preview");

	link_section = document.createElement('p');
	const bookPreview = document.createElement('a');
	const linkText = document.createTextNode('Preview');
	bookPreview.appendChild(linkText);
	bookPreview.title = 'Book_Preview';
	bookPreview.setAttribute('class', 'preview');
	bookPreview.href = preview;
	link_section.appendChild(bookPreview);
};