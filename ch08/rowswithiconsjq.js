$(document).ready(function() {   
$('.studgroup').css(
{'background-image':"url(plus.jpg)", 
    		 'background-repeat':"no-repeat", 
   		  'background-position':"left"}
  	);
	$('table tbody tr').hide();
	$('table tbody').find('.studgroup').parent().show();
  	$('tbody tr').hover(
		function(){   
			$(this).find('.studgroup').css(
				{'background-image':"url(minus.jpg)", 
        				 'background-repeat':"no-repeat", 
         				'background-position':"left"}
			);
  			var tr=$('table tbody tr');
			var rindex=$(this).parent().children().index(this);
  			for(var i=rindex;i<=rindex+5;i++)
  			{
    				$(tr[i]).show();
  			}
      			$(this).addClass('hover');
   		 }, 
    		function(){   
      			$(this).find('.studgroup').css(
       				 {'background-image':"url(plus.jpg)", 
        				 'background-repeat':"no-repeat", 
         				'background-position':"left"}
     			 );
			$('table tbody tr').hide();
			$('table tbody').find('.studgroup').parent().show();
			$(this).removeClass('hover');
   		 }
  	);   
});
