$(document).ready(function() {  
var items=[67,51,125,39,84, 44]
items.sort(function(a,b){
return a-b;
});
$('div').text("Following are the " +  items.length + " numericals in ascending order");
for (var i = 0; i < items.length; i++){  
$('ul.sorted').append($("<li>" + items[i] + "</li>"));
}
});
