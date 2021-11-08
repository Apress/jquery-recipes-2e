$(document).ready(function() {
	var $pic = $('#scroller a img');
	$pic.hover(
	function(){
		$(this).animate({'left': -770}, 5000);
	});
});
