$(document).ready(function() {
 	 $('p').eq(1).hide();
 	$('a#expand').click(function(event) {
 		event.preventDefault();
 		if ($('a#expand').text() == 'read more') {
		$('p').eq(1).hide().slideToggle('slow');
 			$('a#expand').text('read less');			
 		} else {
			$('p').eq(1).show().slideToggle('slow');
 			$('a#expand').text('read more');
 		}
 	});
});