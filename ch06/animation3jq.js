$(document).ready(function() {  
$('img.leftarrow').click(function() {
	if($("ul").css("marginLeft") == "0px"){
		alert("You are at the first image");
	} else {

 	$("#image_slider").children("ul").animate({
 		"margin-left" : "+=210px"
 		}, 2000);
};
});

$('img.rightarrow').click(function() {
	if($("ul").css("marginLeft") == "-840px"){
		alert("You are at the last image");
	} else {
 	$("#image_slider").children("ul").animate({
 		"margin-left" : "-=210px"
 		}, 2000);
};
});
});
