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
			$('.error').hide();
			$('p.result').show();
			$('p.result').text('You have selected '+$('input:checked').attr("value"));
		}
		event.preventDefault();
	});
 });
