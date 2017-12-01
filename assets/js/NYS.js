// Grab the search input box
var searchVal = $("#search-term").val();

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
	event.preventDefault();

	// Make an AJAX call
	AJAXcall();

});

// Set an onclick listener for the Clear button
// This will erase all the records displayed in the results div
$("#clear").on("click", function() {
	$("#search-results").empty();
});

function AJAXcall() {

	// Grab the results div
	// This results div will show each data from the AJAX call
	var resultHTML = $("#search-results");

	//API Key
	var APIKey = "";
	
	// Create a URL for the query
	var queryURL = "";

	// Make an AJAX call
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

	// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "22ed713519e84eceafab4289ff6c873b",
  'begin_date': "19000101",
  'end_date': "20171231"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
})

});
	});
}
