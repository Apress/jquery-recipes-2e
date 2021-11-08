$(document).ready(function() {  
 $("img#pic1")
 .animate({ "height" : 300 })
 .fadeOut()
 .fadeIn()
 .animate({ "width" : 400 })
    .slideToggle( 3000 )
  var n =$("img#pic1").queue( "fx" ).length;
alert("The queue length is "+n);
});



