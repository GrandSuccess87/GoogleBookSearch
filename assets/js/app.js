function bookQuery(event) {
	event.preventDefault();
	// Grabs the user input
	const search = getSearchInput($('#search'));
	localStorage.setItem('last search ', $('#search').val().trim());
	localStorage.getItem('last search')
	// Checks to see if the input field is empty
	if(search == '' || search == null) {
		alert('Your search field is empty.  Please enter the book or author you would like to search.');
	} else {
		// Sends an HTTP GET request to the API
		$.ajax({
			url: 'https://www.googleapis.com/books/v1/volumes?q=' + search + '&startIndex=0' + '&maxResults=30',
			type: 'GET',
			data: search,
			dataType: 'json'
		}).then(function(callbackData) {
			renderBook(callbackData);
		});
	}
};

function getSearchInput(searchInput) {
	return searchInput.val().trim();
};


function setEnterButton () {
	document.querySelector('#search').addEventListener('keyup', function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
		document.getElementById('searchButton').click();
		}
	});
};

// Loops through the callbackData
function renderBook(callbackData) {
	const data = callbackData.items;
	const viewerCanvas = document.getElementById('viewerCanvas');
	$('#viewerCanvas').empty();
	// Loops through the book data
	data.forEach(function(bookData) {
		// Declare variables for the book data
		const book = bookData.volumeInfo;
		// Creates a new div for each book in the array
		const newBookDiv = document.createElement('div');
		newBookDiv.setAttribute('class', 'book');
		// assign the title, author, publisher, image, and preview link then append to the new div
		// title
		setBookTitleAttributes(book, localStorage);
		// author
		setBookAuthorAttributes(book, localStorage);
		// publisher
		setBookPublisherAttributes (book, localStorage);
		// book image
		setBookImageAttributes(book, localStorage);
		// preview
		setBookPreview (book, localStorage);
		// Appends all data to the newBookDiv
		newBookDiv.appendChild(link_section);
		newBookDiv.appendChild(title_section);
		newBookDiv.appendChild(auth_section);
		newBookDiv.appendChild(pub_section);
		newBookDiv.appendChild(bookImageLink);
		// Appends new book div to the viewerCanvas div
		viewerCanvas.appendChild(newBookDiv);
		//Empties search div
		$('#search').val('');
	});
};

// Invoke functions below
document.getElementById('searchButton').addEventListener('click', bookQuery, false);
setEnterButton();