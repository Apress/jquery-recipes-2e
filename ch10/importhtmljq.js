$(document).ready(function() {
	$('.list').click(function () {
		$('#message').load('namesinfo.html');
		return false;
	});
});
