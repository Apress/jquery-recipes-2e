$(document).ready(function() {   
	$('.error').hide();
	$('.submit').click(function(event){
		var count=$('select option:selected').val();
		if(count==0)
		{
			$('p.result').hide();
			$('.error').show();
		}
		else
		{
			$('.error').hide();
			$('p.result').show();
			$('p.result').text('You have selected '+$('select option:selected').text());
		}
		event.preventDefault();
	});
});
