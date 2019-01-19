// connect js and html
function renderBooks(argument) {
	console.log("Render Books Function Successfully Loaded");
}

document.getElementById('searchButton').addEventListener('click', renderBooks, false);

// example of embedded viewer 
google.books.load();

      function initialize() {
        var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        viewer.load('ISBN:0738531367');
      }

      google.books.setOnLoadCallback(initialize);
 
