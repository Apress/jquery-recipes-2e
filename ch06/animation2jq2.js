$(document).ready(function() {  
 $("img#pic1")
 .animate({ "height" : 300 })
 .fadeOut()
 .fadeIn()
 .animate({ "width" : 400 })
    .slideToggle( 3000 )

var queue = $("img#pic1").queue();
//var popped_func = queue.pop();
//queue.unshift(popped_func);
//$("img#pic1").clearQueue();

$("img#pic1").queue(queue.slice(3,4));

});



