// connect js and html
function renderBooks(argument) {
	console.log("Render Books Function Successfully Loaded");
	const search = document.querySelector('#search').value;
	// const search = $('#search').val().trim();
	console.log(search);

	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		// + intitle + inauthor + inpublisher + key=AIzaSyDyNOO9LVN_GjuouA8pqHHRSXtBB_RZO8Y
		type: 'GET',
		data: search,
		dataType: "json",
		success: function(data) {
		 console.log(data)
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
 
