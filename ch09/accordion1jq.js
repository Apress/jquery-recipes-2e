$(document).ready(function() {
 	$( "#accordion" ).accordion({
  		active: 3,
  		animate: 1000,
  		disabled: false,
		event: "mouseover",
  		collapsible: true,
  		heightStyle: "content",
  		header: "h3",
 		icons: { "header": "ui-icon-arrowthick-1-s", "activeHeader": "ui-icon-arrowthick-1-n" }
	});
});