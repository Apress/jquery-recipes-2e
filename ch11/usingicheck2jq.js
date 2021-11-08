$(document).ready(function() {
 	$('input').each(function(){
    		var self = $(this),
      		label = self.next(),
      		label_text = label.text();

    		label.remove();
    		self.iCheck({
      			checkboxClass: 'icheckbox_line',
      			radioClass: 'iradio_line',
      			insert: '<div class="icheck_line-icon"></div>' + label_text
    		});
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

