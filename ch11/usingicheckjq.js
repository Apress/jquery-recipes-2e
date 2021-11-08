$(document).ready(function() {
	$('input').iCheck({
    		checkboxClass: 'icheckbox_futurico',
    		radioClass: 'iradio_futurico',
    		increaseArea: '20%' // optional
  	});
  	$("#btnSubmit").click(function() {  
		var selected = [];
            		$.each($("input[name='food']:checked"), function(){
                			selected.push($(this).val());
            	});
	paymethod =  $('input[name="iCheck"]:checked',  '#pay').val();
	selected.push(paymethod)
            	alert("Selected food items and pay method is: " + selected.join(", "));
        });  
});

