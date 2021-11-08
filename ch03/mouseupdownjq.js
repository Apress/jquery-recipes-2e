$(document).ready(function() {  
	$("button#show").on("mousedown", function() {
		$("img").fadeIn();
	});
	$("button#show").on("mouseup", function() {
		$("img").fadeOut();
	});
});

