$(document).ready(function() {
	var memlist = $( "#list" );
	var members = [ "John", "Steve", "Ben", "Damon", "Ian" ];
	members=$.map(members, function(n){ return(n.toUpperCase());});
	$.each(members,function( index, value ){
		memlist.append($( "<li>" + value + "</li>" ));
	});
});
