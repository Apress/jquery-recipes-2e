$(document).ready(function() {  
$('H1').remove(); 
$('p:eq(0)').prepend('<img src="a1.jpg" /></a><br/>');
$('p:eq(2)').remove();
$('p:eq(1)').append('<p>Festivals Offers starts</p>');
})
