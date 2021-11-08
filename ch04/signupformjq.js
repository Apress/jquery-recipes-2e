$(document).ready(function() {   
	$('.error').hide();
  	$('.submit').click(function(event){
    		var data=$('.infobox').val();
    		var len=data.length;
    		if(len<1)
    		{
      			$('.error').show();
      			event.preventDefault();
    		}
    		else
    		{
      			$('.error').hide();
    		}
   	});
});
