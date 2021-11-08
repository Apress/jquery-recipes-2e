$(document).ready(function() {  
	setInterval(function() {
		$("#slideshow ul li:first").animate({
			"scrollTop": 200}, 400, function(){
    				$("#scroll").find('li:last').after($('li:first', "#scroll"));
			});
	},1000);
});


