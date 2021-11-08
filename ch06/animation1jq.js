$(document).ready(function() {  
	$("button#anim").click( function() {
		$("img#pic1").animate({ left: '350px'}, 'slow',
		function(){
			$("img#pic1").animate({ left: '0px'}, 'slow');
		});
	});
});
