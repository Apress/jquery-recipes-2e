$(document).ready(function() {  
var countries={
 "India" : "New Delhi",
 "United States" : "Washington D.C.",
"England" : "London",
"Australia" : "Canberra"
};
$('div#allcountries').text("List of countries and their capitals");
$.each(countries, function(key, value) {
$('p.allcountries').append("<tr><td>"+key+ " </td><td>"+value+"</td><tr/>");
});
});
