$(document).ready(function() {  
	$("button#fade").hover( function() {
		$("img#pic1").fadeTo('slow',0,"linear");
		$("img#pic1").addClass("enlarge").fadeTo('fast',1, "swing");
	}, function() {
		$("img#pic1").removeClass("enlarge").fadeTo('slow',0, "linear");
		$("img#pic1").fadeTo('slow',1);
	});	
});

