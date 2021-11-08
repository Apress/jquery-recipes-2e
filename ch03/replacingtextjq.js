$(document).ready(function() {
	$('p#message1').css({'border': '2px solid', 'text-align': 'center','fontweight':'bold'}).hide();
	$('p#message2').css({'backgroundColor': '#f00','color':'#fff','text-align': 'center','font-weight':'bold'}).on("mousedown", function() {
			$(this).slideUp('slow');
			$('p#message1').slideDown('slow');
		}
	);
});
