// Grab the search input box
var searchVal = $("#search").val().trim();

// Grab the Numbers dropdown box
var NumberRecords = $("#number").val();

// Grab the start year box
var StartYear = $("#start").val();

// Grab the End year box
var EndYear = $("#end").val();

// Set an onclick listener for the Search Button
// This will populate the results div with the results from the AJAX call
$("#buttonSearch").on("click", function() {

	// Prevent the form from submitting
	event.preventDefault();

	// Grab the results div
	$("#result");

	// Make an AJAX call
	AJAXcall();

});

// Set an onclick listener for the Clear button
// This will erase all the records displayed in the results div
$("#clearButton").on("click", function() {
	$("#result").empty();
});