(function ($) {
$.fn.style_products = function(custom) {
	var settings = $.extend({
		product_name: 'Referigerators',
		fontSize: "15px",
		color : "white", 
		fontStyle: "bold",
		background : "blue" 
	}, custom);
//return this.css({ 
	return this.append(", "+settings.product_name).css({ 
 fontSize: settings.fontSize,
    	color: settings.color,  
	fontStyle: settings.fontStyle,
	background: settings.background 
	});
};
}(jQuery));

