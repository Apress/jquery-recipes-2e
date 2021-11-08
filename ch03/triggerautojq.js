$(document).ready(function() {
	$('.buttons').bind('click', function(){
		alert('You have clicked the ' +$(this).text()+' button');
	});
	$('.italic').trigger('click');
});
