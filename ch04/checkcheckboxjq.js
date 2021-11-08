$(document).ready(function() {   
	$('.error').hide();
	$('.submit').click(function(event){
		var count=0;
		var amt=0;
		$('form').find(':checkbox').each(function(){
			if($(this).is(':checked'))
			{
				count++;
				amt=amt+parseInt($(this).val());
			}
		});   
		if(count==0)   
		{
			$('p.result').hide();
			$('.error').show();
 		}
		else
		{
			$('.error').hide();
			$('p.result').show();
			$('p.result').text('Your bill is $ '+amt);
		}
		event.preventDefault();
	});	
});
