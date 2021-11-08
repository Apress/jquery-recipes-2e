$(document).ready(function() {  
var items=["Television", "Referigerator", "Cameras", "Cell Phones", "Laptops", "Jeans", "Shirts", "Blazers" ]
electronics=items.splice(0,5);
$('div#electronics').text("Following are the " +  electronics.length + " electronic items for sale");
$('p.electronics').html(electronics.join());
$('div#garments').text("Following are the " +  items.length + " garments for sale");
$('p.garments').html(items.join());
});
