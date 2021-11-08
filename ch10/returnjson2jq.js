$(document).ready(function(){
	$("button").click(function(){
		$.getJSON( "/jsonsample2.json", function(jsonObj ) {
			$("#Name").html( jsonObj.name);
			$("#Work").html( jsonObj.work);
		});
	});
});