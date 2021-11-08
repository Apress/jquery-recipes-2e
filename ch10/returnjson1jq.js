$.getJSON( "/jsonsample1.json", function(result ) {
  	var items = [];
  	$.each(result, function( item, price ) {
    		items.push( "<tr><td>" + item + "</td><td>" + price + "</td><tr/>" );
  	});
  	$( "<table/>", {
    		html: items.join( "" )
  	}).appendTo( "body" );
});
