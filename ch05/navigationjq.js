$(document).ready(function() {   
	$('.web').hide();
	$('.prog').hide();
	$('.rdbms').hide();

	$('body').keypress(function(event){
		if(String.fromCharCode(event.keyCode)=="w" || String.fromCharCode(event.keyCode)=="W")
		{
			$('#webd').hover();
		}
		if(String.fromCharCode(event.keyCode)=="p" || String.fromCharCode(event.keyCode)=="P")
		{
   		 	$('#pgmng').hover();
		}
		if(String.fromCharCode(event.keyCode)=="r" || String.fromCharCode(event.keyCode)=="R")
		{
   			 $('#datab').hover();
		}
	});

	$('#webd').hover(function(event){
		$('.web').show();
    		$('.prog').hide();
   		 $('.rdbms').hide();
   		$('#webd').addClass('hover');
	}, function(){
		$('#webd').removeClass('hover');
	});

  	$('#pgmng').hover(function(event){
		$('.web').hide();
    		$('.prog').show();
    		$('.rdbms').hide();
   		 $('#pgmng').addClass('hover');
		}, function(){
			$('#pgmng').removeClass('hover');
	});

	$('#datab').hover(function(event){
		$('.web').hide();
   		 $('.prog').hide();
    		$('.rdbms').show();
    		$('#datab').addClass('hover');
		}, function(){
			$('#datab').removeClass('hover');
	});
});
