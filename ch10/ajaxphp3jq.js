$(document).ready(function() {
	$('#submit').click(function () {
		var emailaddr = $('.email').val();
		var pwd = $('.passwd').val();
		var data='email='+emailaddr+'&password='+pwd;
		$.ajax({
			type:"GET",
			url:"authenticate.php",
			data:data,
			success:function(html) {
				$("#response").html(html);
			}
		});
		return false;
	});
});


