$(document).ready(function() {  
var items=["Aloe vera juice", "Apple juice", "Biscuits", "Juice of oranges", "Cakes", "Brownies", "Doughnut", "Juice of pomegranate" ]
$('div#allitems').text("Complete list");
$('p.allitems').html(items.join(", "));

$('div#length8').text("Items of length 8 characters");
length8items =$.grep(items, function( n, i ) {
  return ( n.length ==8 );
});
$( "p.length8" ).text(length8items.join( ", " ) );

$('div#endingwiths').text("Items ending with 's'");
endingwithsitems =$.grep(items, function( n, i ) {
  return n.match(/[s]$/)
});
$( "p.endingwiths" ).text(endingwithsitems.join( ", " ) );
$('div#juices').text("List of juices");
juiceitems =$.grep(items, function( n, i ) {
  return ( n.toLowerCase().indexOf("juice") >= 0 );
});
$( "p.juices" ).text(juiceitems.join( ", " ) );
});
