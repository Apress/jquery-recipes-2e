$(document).ready(function() {  
	$("button#hide").on("click", function() {
		//$("img").hide();
		$("img").fadeOut();
		//$("button#hide").off("click");
	});
	$("button#show").on("click", function() {
		//$("img").slideDown();
		$("img").fadeIn();
		//$("button#show").off("click");
	});
});

