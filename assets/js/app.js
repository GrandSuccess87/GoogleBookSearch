let maxResults = 'maxResults=35';
let startIndex = 'startIndex=0';

$('#search_results_pagination').hide();
$('#GoogleLogo1').hide();

function bookQuery(event) {
	event.preventDefault();
	// Grabs the user input
	const search = getSearchInput($('#search'));
	localStorage.setItem('last search ', $('#search').val().trim());
	// Checks to see if the input field is empty
	if(search == '' || search == null) {
		$('#noSearchInput_Modal').modal();
	} else {
		// Sends an HTTP GET request to the API
		$.ajax({
			url: 'https://www.googleapis.com/books/v1/volumes?q=' + search  + '&' + maxResults + '&' + startIndex,
			type: 'GET',
			data: search,
			dataType: 'json',
			source:'en'
		}).then(function(callbackData) {
			renderBook(callbackData);
			setNoBookFound();
			setBookLimit(callbackData);
		}, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        });
	}
};


// This function handles some limited search results returned
function setBookLimit(callbackData) {
	console.log('set book limit fxn hit');
	maxResults = 'maxResults<10';
	if(maxResults) {
	$('#noResults_Modal').modal();
	console.log(callbackData);
	};
};

// Timeout function if no search is performed after 10 minutes
const windowTimeout = setTimeout(function() {
	alert("Would you like to make a search?");
}, 600000);


// Handles the API responding with an error if a book does not exist in the database
function alertNotFound() {
    alert("Could not find the book, please try another search");
}

function setNoBookFound() {
    if(search == 'Full stack web development'){
    	return alertNotFound();
    }
}

// Grabs the user input
function getSearchInput(searchInput) {
	return searchInput.val().trim();
};

// Allows the user to press enter to make a search
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
	// Declare initial variables
	const data = callbackData.items;
	const viewerCanvas = document.getElementById('viewerCanvas');
	$('#viewerCanvas').empty();
	// Loops through the book data
	data.forEach(function(bookData) {
		// Declare variable for the book data
		const book = bookData.volumeInfo;
		// Assign the title, author, publisher, image, and preview link then append to the new div
		// Title
		setBookTitleAttributes(book, localStorage);
		// Author
		setBookAuthorAttributes(book, localStorage);
		// Publisher
		setBookPublisherAttributes (book, localStorage);
		// Book image
		setBookImageAttributes(book, localStorage);
		// Preview
		setBookPreview (book, localStorage);
		// Appends all data to the newBookDiv
		createBook();
		// Empties search div
		$('#search').val('');
		// Shows pagination and google logo
		$('#search_results_pagination').show();
		$('#GoogleLogo1').show();
	});
};

function setPage2_Pagination () {
	console.log('page 2 hit');
	startIndex = 'startIndex=20';
	let search = $('#search').val();
	console.log(startIndex);
	const page2 = $('#page_link_2');
	console.log(search);
	page2.href = 'https://www.google.com/search?q=' + search + '&' + startIndex;
	console.log(page2);
};

function setPage3_Pagination () {
	console.log('page 3 hit');
	startIndex = 'startIndex=30'
	console.log(startIndex);
	const page3 = $('#page_link_3');
	page3.href = 'https://www.google.com/search?q=' + search + '&' + startIndex;
	console.log(page3);

};

// Invokes book query function
document.getElementById('searchButton').addEventListener('click', bookQuery, false);
// Handles Limited Search Results
document.getElementById('page_link_2').addEventListener('click', setPage2_Pagination, false);
document.getElementById('page_link_3').addEventListener('click', setPage3_Pagination, false);
// Invokes search via return key
setEnterButton();