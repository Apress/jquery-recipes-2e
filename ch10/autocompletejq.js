$(document).ready(function() {
	$('.listbox').hide();
	$('.userid').keyup(function () {
		var uid = $('.userid').val();
		var data='userid='+uid;
		$.ajax({
			type:"POST",
			url:"autocompletescript.php",
			data:data,
			success:function(html) {
				$('.listbox').show();
				$('.nameslist').html(html);
				$('li').hover(function(){
					$(this).addClass('hover');
				},function(){
					$(this).removeClass('hover');
				});
				$('li').click(function(){
					$('.userid').val($(this).text());
					$('.listbox').hide();
				});
			}
		});
		return false;
	});
});
