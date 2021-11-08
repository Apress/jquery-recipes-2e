$(document).ready(function() {  
var item = $("li").toArray();
alert(item);
items = $.makeArray(item);
//  var $nodes = $('#ElectronicsProducts').children();
//  alert('Number of nodes is '+$nodes.length);
//  var items="";
//for (var i = 0; i < $nodes.length; i++){   
 //   items+=$('#ElectronicsProducts').find('li:eq('+i+')').text()+", ";
//}
alert(items);

$('div').text("Following are the " +  items.length + " electronic items for sale");
items=items.sort();
alert(items);
$.each(items, function(index, value){
$('ul.sorted').append($("<li>" + value + "</li>"));
});
});
