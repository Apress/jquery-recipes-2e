$(document).ready(function() {
	$('.list').click(function () {
		$('#message').load('namesinfo.html li');
		return false;
	});
});
