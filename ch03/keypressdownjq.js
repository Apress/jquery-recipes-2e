$(document).ready(function() {  
	$("input").on("keydown", function(event) {
		$('p#kdown').text('Key down is '+ event.keyCode);
		//$('p#kdown').text('Key down is '+String.fromCharCode(event.keyCode));
	});
	$("input").on("keypress", function(event) {
  		$('p#kpress').text('Key pressed is '+event.keyCode);
	});
	$("input").on("keyup", function(event) {
		$('p#kup').text('Key up is '+ event.keyCode);
	});
});

