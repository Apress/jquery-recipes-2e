$(document).ready(function() {  
	$("button#anim").click( function() {
		$("img#pic1").animate({ left: '350px', width: '400px', height: '350px'}, 'slow',
		function(){
			$("img#pic1").attr("src", "computer.jpg");
		});
	});
});



