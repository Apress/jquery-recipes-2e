$(document).ready(function() {
	var $wrapper=$('#scroller a img');
	var leftanimator = function(imgblock) {
		imgblock.animate({left:-310 }, 2000);
	}
	var rightanimator = function(imgblock) {
		imgblock.animate({left:0 }, 2000);
	}
	$('.leftarrow').on("mousedown", function(event){
		leftanimator($wrapper);
		event.preventDefault();
	});
	$('.rightarrow').on("mousedown", function(event){
		rightanimator($wrapper);
		event.preventDefault();
	});
});
