$(document).ready(function() {
	$('.buttons').bind('click', function(){
		alert('You have clicked the ' +$(this).text()+' button');
		$('.buttons').unbind('click');
	});
});
