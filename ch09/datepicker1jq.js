$(document).ready(function() {
	var datepicker_Options = {
		appendText: " MM/DD/YYYY",
		changeMonth: true,
		changeYear: true,
		isRTL: false,
		showOtherMonths: true,
		numberOfMonths: 2,
		duration: "normal"
	};
    	$( "#reserve_date" ).datepicker(datepicker_Options);
});