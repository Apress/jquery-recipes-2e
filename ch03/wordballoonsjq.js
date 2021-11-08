$(document).ready(function() {
	$('.buttons').hover(
		function(event){
			$(this).addClass('hover');
			var $txt=$(this).text();
			$('<span class="showtip"> This is '+$txt+' menu </span>').appendTo($(this));
		},
		function(){
			$(this).removeClass('hover');
			$('.showtip').remove();
		}
	);
});
