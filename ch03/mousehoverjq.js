$(document).ready(function() {  
	$("button#hide").on("mouseenter", function() {
		// alert("hovered over");
		$("button#hide").addClass("highlight");
	}).on("mouseleave", function() {
		$("button#hide").removeClass("highlight");
		// alert("hovered out");
	});
});

