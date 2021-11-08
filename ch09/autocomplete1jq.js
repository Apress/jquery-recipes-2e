$(document).ready(function() {
  var foodItems = [
     "Bacon Cheese Burger",
"Biscuits",
"Blizzard",
"Cajun Fries ",
"Chicken Nuggets",
"Chicken Sandwich",
"Chicken Tenders",
"Crunch Shell Tacos",
"Curly Fries",
"Fries", 
"Frosty",
"Pretzel",
"Shack Burger",
"Tacos", 
"Waffle Fries"
    ];
    $( "#items" ).autocomplete({
 autoFocus: true,
delay: 400,
 minLength: 1,
position: { my : "left top", at: "right bottom" },
//disabled: true,
      source: foodItems

    });
});