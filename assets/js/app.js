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
			source:'es'
		}).then(function(callbackData) {
			renderBook(callbackData);
			setNoBooksFound();
			// setBookLimit(callbackData);
		}, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        });
	}
};


// This function handles limited search results returned
// function setBookLimit(callbackData) {
// 	console.log('set book limit fxn hit');
// 	// maxResults;
// 	if(maxResults === 'maxResults=30') {
// 	$('#noResults_Modal').modal();
// 	console.log(callbackData);
// 	};
// };

// Timeout function if no search is performed after 10 minutes
const windowTimeout = setTimeout(function() {
	alert("Would you like to make a search?");
}, 600000);



function alertNotFound() {
    alert("Could not find the book, please try another search");
}

function setNoBooksFound() {
    if(search == 'ISBN:1234'){
    	return alertNotFound();
    }
}

// Timeout function if API responds slow
// const apiTimeout = setTimeout(function() {
// 	alert("Sorry, we seem to be experiencing some difficulties. Please try refreshing the page and try your search again. Thank You");
// }, 300000);

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

// Invoke functions below
document.getElementById('searchButton').addEventListener('click', bookQuery, false);
setEnterButton();