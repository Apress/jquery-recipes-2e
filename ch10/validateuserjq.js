$(document).ready(function() {
	$('.error').hide();
	$('#submit').click(function () {
		var name = $('.uname').val();
		var data='uname='+name;
		$.ajax({
			type:"POST",
			url:"validateuser.php",
			data:data,
			success:function(html) {
				$('.error').show();
				$('.error').text(html);
			}
		});
		return false;
	});
});
