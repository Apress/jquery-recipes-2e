$(document).ready(function() {   
  	var drinks = $('ul').children('li').get();
  	drinks.sort(function(a, b) {
   		var val1 = $(a).text().toUpperCase();
    		var val2 = $(b).text().toUpperCase();
    		return (val1 < val2) ? -1 : (val1 > val2) ? 1 : 0;
  	});

  	$.each(drinks, function(index, row) {   
    		$('ul').append(row);   
  	});   
});
