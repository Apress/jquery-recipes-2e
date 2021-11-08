$(document).ready(function() {
	$('#list ul').hide();
	$('.electronics').click(function() {
		$(this).children("ul").slideToggle();
  		return false;
	});
 });


 