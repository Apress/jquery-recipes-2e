$(document).ready(function() {
	$('.books').hide();
	$('.movies').hide();
	$('.music').hide();
	$('#booksbutton').on("mousedown", function() {
		$('.books').show('slow');
		$('.movies').hide();
		$('.music').hide();
	});
	$('#moviesbutton').on("mousedown", function() {
		$('.movies').show('slow');
		$('.books').hide();
		$('.music').hide();
	});
	$('#musicbutton').on("mousedown", function() {
		$('.music').show('slow');
		$('.books').hide();
		$('.movies').hide();
	});
});
