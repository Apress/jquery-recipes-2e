$(document).ready(function() {  
$(".product").on("mousedown", function(event) {
	if(event.which==1){
		alert("Left mouse button is pressed on "+$(this).text());
	}
	else
	{
		alert("Right mouse button is pressed on "+$(this).text());
	}
});
});

