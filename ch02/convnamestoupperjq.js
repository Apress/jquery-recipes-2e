$(document).ready(function() {
	var members = [ "John", "Steve", "Ben", "Damon", "Ian" ];
	members=$.map(members, function(n,i){ return(i+1+"."+n.toUpperCase());});
	$('p').html(members.join("<br/>"));
});
