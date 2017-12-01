

// Set an onclick listener for the Search Button
// This will populate the results div with the results from the AJAX call
$("#search-btn").on("click", function() {
	// Grab the search input box
	var searchVal = $("#search-term").val().trim();

	// Grab the Numbers dropdown box
	var NumberRecords = $("#limit-art").val();

	// Grab the start year box
	var StartYear = $("#start-year").val();

	// Grab the End year box
	var EndYear = $("#end-year").val();

	var resultHTML = $("#search-results");
	resultHTML.append("HELLO");

	createArticles(NumberRecords);

	// Make an AJAX call
	//AJAXcall();

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



	});
}

function createArticles(num) {
	for(var i = 0; i < num; i++) {
		var newBlock = $("<div class='article'>");
		newBlock.append("<h3>");
		newBlock.append("<span class='label label-primary'>" + (i + 1) + "</span>");
		newBlock.append("<strong>" + articles[i] + "</strong>");
		newBlock.append("</h3>");

	}
}