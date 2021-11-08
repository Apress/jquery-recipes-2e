$(document).ready(function() {  
var nums=[5,0,4,2,7,1,9,3,6,8]
$('div#allnums').text("Complete list");
$('p.allnums').html(nums.join(", "));
var revarr=nums.reverse();
alert(revarr);
$('p.reversestr').text(revarr);
});
