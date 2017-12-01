// Grab the search input box
var searchVal = $("#search-term").val().trim();

// Grab the Numbers dropdown box
var NumberRecords = $("#limit-art").val();

// Grab the start year box
var StartYear = $("#start-year").val();

// Grab the End year box
var EndYear = $("#end-year").val();

// Set an onclick listener for the Search Button
// This will populate the results div with the results from the AJAX call
$("#search-btn").on("click", function() {

	// Prevent the form from submitting
//	event.preventDefault();

	// Make an AJAX call
	AJAXcall();

});

// Set an onclick listener for the Clear button
// This will erase all the records displayed in the results div
$("#clear").on("click", function() {
	$("#search-results").empty();
});

	var APIKey = "db39dc1be42144009472b181348fb721"

//console.log(queryURL);

function AJAXcall() {


	// Grab the results div
	// This results div will show each data from the AJAX call
	var resultHTML = $("#search-results");

	// Create a URL for the query
	var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchVal + "&page=0&sort=oldest&api-key=" + APIKey;

	// Make an AJAX call
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
	console.log(queryURL);
	console.log(response);
		// Insert a data into a div

	});
}
