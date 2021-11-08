$(document).ready(function() {   
	$('#checkall').click(function(){
		$("input[type='checkbox']").attr('checked', $('#checkall').is(':checked'));   
	});   
	$('form').find(':checkbox').click(function(){
		var amt=0;
		$('div').filter(':gt(0)').find(':checkbox').each(function(){
			if($('div:gt(0)'))
			{
				if($(this).is(':checked'))
				{
					amt=amt+parseInt($(this).val());
				}
			}
		});   
		$('p').remove();
		$('<p>').insertAfter('div:eq(4)');
		$('p').text('Your bill is $ '+amt);
	});   
});
