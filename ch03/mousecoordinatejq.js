$(document).ready(function() {
	$('img').mousedown(function(event){
		$('p').text('Mouse is clicked at horizontal coordinate: '+event.screenX+' and at vertical coordinate: '+event.screenY);
	});
});
