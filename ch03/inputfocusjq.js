$(document).ready(function() {  
$("input").on("focus", function() {
 alert("Enter product to search");
}).on("blur", function() {
alert("We will mail you the related products");
//$("#submit").trigger( "click" );
});
});

