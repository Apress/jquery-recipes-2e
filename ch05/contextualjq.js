$(document).ready(function() {   
	$('.web').hide();
  	$('.prog').hide();
  	$('.rdbms').hide();

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
