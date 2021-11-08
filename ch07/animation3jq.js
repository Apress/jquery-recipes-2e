$(document).ready(function() {  

var imageslide = function() {
	$("#slideshow").children("ul").animate({
    		"margin-top": -1000}, 4000, function() {
	$('#slideshow').append($('#scroll').clone());
	$('#scroll').css({ "margin-top": 0 });
	});
	imageslide();
}
imageslide();
});


