$(document).ready(function() {
	var $pic = $('#scroller a img');
	$pic.eq(0).animate(
	{'left': -155}, 5000,
	function(){
		$pic.eq(2).animate(
		{'right': -155}, 5000,
		function(){
			$pic.fadeOut(5000);
		}
		);
		}
	);
});
