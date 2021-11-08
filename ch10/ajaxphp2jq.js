$(document).ready(function() {
$('.fooditem').on('change', function () {
var str = $('.fooditem').val();
var data = 'fooditem=' + str;
$.ajax({
type:"GET",
url:"findprice.php",
data: data,
success: function (html) {
$('#info').html(html);
}
});
return false;
});
});


