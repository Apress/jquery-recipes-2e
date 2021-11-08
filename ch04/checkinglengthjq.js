$(document).ready(function() {   
	$('.error').hide();
	$('.submit').click(function(event){
		var amt=0;
		var count=$('input:checked').length;
		if(count==0)
		{
			$('p.result').hide();
			$('.error').show();
		}
		else
		{
			$('form').find(':checkbox').each(function(){
				if($(this).is(':checked'))
				{
					amt=amt+parseInt($(this).val());
				}
			});   
			$('.error').hide();
			$('p.result').show();
			$('p.result').text('Your bill is $ '+amt);
		}
		event.preventDefault();
	});
});
