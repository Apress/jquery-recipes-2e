$(document).ready(function() {  
	$("button.btn").hover( function() {
		$(this).addClass("highlight");
	}, function() {
		$(this).removeClass("highlight");
	});
});

