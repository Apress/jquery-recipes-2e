$(document).ready(function() {  
var items=["Television", "Referigerator", "Cameras", "Cell Phones", "Laptops" ]
items.sort();
items.reverse();
$('div').text("Following are the " +  items.length + " electronic items for sale");
for (var i = 0; i < items.length; i++){  
$('ul.sorted').append($("<li>" + items[i] + "</li>"));
}
});
