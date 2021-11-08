$(document).ready(function() {   
	$('table tbody tr').hide();
	$('table tbody').find('.studgroup').parent().show();
  	$('tbody tr').hover(
  	function(){   
  		var tr=$('table tbody tr');
		var rindex=$(this).parent().children().index(this);
  		for(var i=rindex;i<=rindex+5;i++)
  		{
    		$(tr[i]).show();
  		}
			$(this).addClass('hover');
		}, 
		function(){   
			$('table tbody tr').hide();
			$('table tbody').find('.studgroup').parent().show();
			$(this).removeClass('hover');
		}
  );   
});
