$(document).ready(function() {
	$(".imge").hide();
	var next;
	$('.imge:first').fadeIn('slow');
	$('.imge').on("mousedown", function(event) {
		$(this).fadeIn('slow');
		next = ($(this).next().length) ? $(this).next() :$('.imge:first');
		$(this).fadeOut('slow');
		next.fadeIn('slow');
		event.preventDefault();
	});
});
