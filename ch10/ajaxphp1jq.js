$(document).ready(function() {
$('#submit').click(function () {
var str = $('.enteredStr').val();
var data = 'enteredStr=' + str;
$.ajax({
type:"POST",
url:"convertcap.php",
data: data,
success: function (html) {
$('#response').html(html);
}
});
return false;
});
});