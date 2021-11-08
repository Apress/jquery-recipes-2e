$(document).ready(function() {  
$("#slideshow ul li").slice(1).hide();

setInterval(function() {
  $('#slideshow ul li:first')
    .fadeOut(500)
    .next()
    .fadeIn(500)
    .end()
    .appendTo('#slideshow ul');
}, 2000);	

});
