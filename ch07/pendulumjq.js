$(document).ready(function() {
	var $wrapper=$('#scroller a img');
	var left_rightanimator = function() {
	$wrapper.animate(
		{left:-770}, 5000,
		function() {
		$wrapper.animate({left:465 }, 5000);
		left_rightanimator();
		}
	);
	}
	left_rightanimator();
});
