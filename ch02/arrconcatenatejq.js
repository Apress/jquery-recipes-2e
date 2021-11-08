$(document).ready(function() {  
var nums=[5,0,4,2,7,1,9,3,6,8]
$('div#allnums').text("Complete list");
$('p.allnums').html(nums.join(", "));
divby5 =$.grep(nums, function( n, i ) {
  return ( (n!=0) && (n%5==0 ));
});
$('div#divisibleby5').text("Values divisble by 5");
$( "p.divisibleby5" ).text(divby5.join( ", " ) );
divby3 =$.grep(nums, function( n, i ) {
  return ( (n!=0) && (n%3==0) );
});
$('div#divisibleby3').text("Values divisible by 3");
$( "p.divisibleby3" ).text(divby3.join( ", " ) );
$.merge( divby3,divby5 )
//divby3or5=divby3.concat(divby5);
$('div#divisibleby3or5').text("Values divisible by 3 or 5");
$( "p.divisibleby3or5" ).text(divby3.join( ", " ) );
//$( "p.divisibleby3or5" ).text(divby3or5.join( ", " ) );
});
