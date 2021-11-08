$(document).ready(function() {
	var $pic = $('#images a');
	$pic.hide();
	var imgs = $pic.length;
	var next=$pic.eq(0);
	next.css({'position': 'absolute','left':10});
	next.show();
	var $pagenumbers=$('<div id="pages"></div>');
	for(i=0;i<imgs;i++)
	{
		$('<span class="page">'+(i+1)+'</span>').appendTo($pagenumbers);
	}
	$pagenumbers.insertBefore(next);
	$('.page').hover(
	function(){
		$(this).addClass('hover');
	},
	function(){
		$(this).removeClass('hover');
	}
	);
	$('span').on("mousedown", function(event){
		$pic.hide();
		next=$pic.eq($(this).text()-1);
		next.show();
	});
});
