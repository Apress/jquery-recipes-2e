$(document).ready(function() {
	var $pic = $('#scroller a img');
	$pic.hover(
		function(){
			$(this).fadeOut(5000);
		});
});
