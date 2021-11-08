$(document).ready(function() {
	$(".imge").hide();
	$('.imge:first').fadeIn('slow');
	$('.imge').hover(
	function(){
		$(this).fadeIn('slow');
	},
	function(){
		var next = ($(this).next().length) ? $(this).next() :$('.imge:first');
		$(this).fadeOut('slow');
		next.fadeIn('slow');
	}
	);
});
