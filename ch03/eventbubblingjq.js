$(document).ready(function() {  
	$('div').click(function(event){
		alert('<div> element is clicked');
	});
	$('ul').click(function(event){
  		event.stopPropagation();
		alert('<ul> element is clicked');
	});
	$('p').click(function(event){
  		event.stopPropagation();
		alert('<p> element is clicked');
	});
	$('strong').click(function(event){
  		event.stopPropagation();
		alert('<strong> element is clicked');
	});
});

