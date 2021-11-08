$(document).ready(function() {
	var $nodes = $('#root').children();
	alert('Number of nodes is '+$nodes.length);
	var txt="";
	$('#root').children().each( function() {
		txt+=$(this).text();
	});
	alert(txt);
});
