$(document).ready(function() {
	$( "#jquery_intro" ).dialog({
		title: "What is jQuery",
  		closeOnEscape: false,
  		draggable: false,
		height: "auto",
		width: 200, 
  		minHeight: 200,
  		maxHeight: 400,
  		minWidth: 150,
  		maxWidth: 300,
		//  hide: "slideUp",
		hide: { effect: "fadeOut", duration: 2000 },
  		buttons: [
    		{
      			text: "Close",
      			icon: "ui-icon-closethick",
      			click: function() {
        				$( this ).dialog( "close" );
      			}
    		}
  		],
  		modal: true, 
		//show: true
		show: { effect: "slideDown", duration: 1000 }
	});
});