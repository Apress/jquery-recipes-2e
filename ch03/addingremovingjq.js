$(document).ready(function() {
	$('.add').on("mousedown", function() {
		$('div').prepend('<p>Styles make the formatting job much easier and more efficient. To give an attractive look to web sites, styles are heavily used. A person must have a good knowledge of HTML and CSS and a bit of JavaScript. </p>');
	});
	$('.remove').on("mousedown", function() {
		$('p').remove();
	});
});
