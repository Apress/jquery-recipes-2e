$(document).ready(function() {  
	function bounce() {
		var height = 250;
		var speed=1000;
		for (var i = 1; i <= 6; i++) {
			$('#ball').animate({
				 'bottom' : height}, speed);
			$('#ball').animate({'bottom' : 0}, speed);
			height = height/2;
		}
	}
	bounce();
});
