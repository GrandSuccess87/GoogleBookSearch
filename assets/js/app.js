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


		 // loop through the books that match the query
		 for(var i = 0; i < data.length; i++) {


		 	console.log(data[i].volumeInfo.title);
		 	console.log(data[i].volumeInfo.authors);
		 	console.log(data[i].volumeInfo.publisher);
			console.log(data[i].volumeInfo.imageLinks.thumbnail);
			console.log(data[i].volumeInfo.imageLinks.smallThumbnail);
			console.log(data[i].volumeInfo.previewLink);

			const book = data[i].volumeInfo;
			const title = book.title;
			const author = book.authors;
			const image = book.imageLinks.thumbnail;
			const smallThumbnail = book.imageLinks.smallThumbnail;
			const preview = book.previewLink;
		 }

	
	});
}

document.getElementById('searchButton').addEventListener('click', renderBooks, false);



// example of embedded viewer 
// google.books.load();

//       function initialize() {
//         var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
//         viewer.load('ISBN:0738531367');
//       }

//       google.books.setOnLoadCallback(initialize);
 
