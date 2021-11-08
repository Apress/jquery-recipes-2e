$(document).ready(function() {
	$('.roll').addClass('link');
	$('.roll').hover(
		function(){
			$(this).addClass('hover');
		},
		function(){
			$(this).removeClass('hover');
		}
	);
	$('.roll').click(function(event){
		$(this).addClass('active');
		event.preventDefault();
	});
});
