$(document).ready(function() {   
	$('#contextmenu').hide();
	$('.info').mousedown(function(event){
		if(event.button==2){
			$('#contextmenu').show();
      			$('#contextmenu').css({'position': 'absolute', 'left':event.screenX, 
				'top':event.screenY-70});
		}
	});
  	$('a').hover(function(event){
		$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
	});
	$('body').keypress(function(event){
		if(event.keyCode==27)
		{
  		$('#contextmenu').hide();
		}
  	});
});
