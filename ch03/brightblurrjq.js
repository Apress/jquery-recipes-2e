$(document).ready(function() {
	$('img').css('opacity',0.4);
	$("span#bright").on("mouseenter", function() {
		$('img').css('opacity',1.0);
	}).on("mouseleave", function() {
		$('img').css('opacity',0.4);
	});
	$("span#bright").on("mousedown", function(event) {
		$('img').css('width',function(){ return $(this).width()+50;});
		$('img').css('height',function(){ return $(this).height()+30;});
	});
});
