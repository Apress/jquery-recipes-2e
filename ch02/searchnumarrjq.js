$(document).ready(function() {  
var nums=[5,0,4,2,7,1,9,3,6,8]
$('div#allnums').text("Complete list");
$('p.allnums').html(nums.join(", "));
first5 =$.grep(nums, function( n, i ) {
  return ( i<=4 );
});
$('div#first5').text("First 5 values");
$( "p.first5" ).text(first5.join( ", " ) );
lessthan5 =$.grep(nums, function( n, i ) {
  return ( n<5 );
});
$('div#lessthan5').text("Values less than 5");
$( "p.lessthan5" ).text(lessthan5.join( ", " ) );
});
