$(document).ready(function() {
	$('p.menus').mouseout(function(){
		$("div.menuitems'").slideUp("slow");    
		$('p').css({backgroundImage:""});
	});

  	$('p.menus').mouseover(function(){
		$(this).css({'background-image':"url(down.png)", 'background-repeat':"no-repeat", 
			'background-position':"right"}).next("div.menuitems").slideDown(500)
			.siblings("div.menuitems").slideUp("slow");
		$(this).siblings().css({backgroundImage:""});
	});
});
