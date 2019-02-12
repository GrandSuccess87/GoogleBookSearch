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

function setPagePagination () {
	const page2 = $('#page_link_2');
	page2.href = ('https://www.google.com/search?q=' + search + '&' + startIndex + '=20');
}

function setPagination () {
const nav = document.createElement('nav');
nav.setAttribute('id', 'search_results_pagination');
nav.setAttribute('aria-label', 'Search Results Pages');

const ulTag = document.createElement('ul');
ulTag.setAttribute('class', 'pagination justify-content-left');

const liPreviousTag = document.createElement('li');
liPreviousTag.setAttribute('class', 'page-item disabled');

const previousPageLink = document.createElement('a');
previousPageLink.setAttribute('class', 'page-link');
previousPageLink.href('#');
previousPageLink.tabindex('-1');
previousPageLink.setAttribute('aria-label', 'Previous');

// Appends a Tag to the list Tag
liPreviousTag.appendChild(previousPageLink);

const previousSpanTag_1 = document.createElement('span');
previousSpanTag.setAttribute('aria-hidden',' true');
previousSpanTag.textContent = '&laquo;'

// Appends first span Tag to the li Tag
liPreviousTag.appendChild(previousSpanTag_1);

const previousSpanTag_2 = document.createElement('span');
previousSpanTag_2.setAttribute('class', 'sr-only' );
previousSpanTag_2.textContent = 'Previous';

// Appends second span Tag to the li Tag
liPreviousTag.appendChild(previousSpanTag_2);

// Pagination for page one
// <li class="page-item"><a class="page-link" href="#">1</a></li>
const page1 = document.createElement('li');
page1.setAttribute('class', 'page-item');
const page1_aTag = document.createElement('a');
page1_aTag.setAttribute('class', 'page-link');
page1_aTag.href('#');
page1_aTag.textContent = '1';
page1.appendChild(page1_aTag);

// Pagination for page two
const page2 = document.createElement('li');
page2.setAttribute('class', 'page-item');

const page2_aTag = document.createElement('a');
page2_aTag.setAttribute('class', 'page-link');
page1_aTag.textContent = '2';
page2_aTag.href('https://www.google.com/search?q=' + search + '&' + startIndex + '=20');
page2.appendChild(page2_aTag);

};

