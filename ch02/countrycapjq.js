$(document).ready(function() {  
var countries=[
{
"country": "India",
"capital": "New Delhi"
},
{
"country": "United States",
"capital": "Washington D.C."
},
{
"country": "England",
"capital": "London"
},
{
"country": "Australia",
"capital": "Canberra"
}
];

countries=countries.sort(function(a,b){
if(a.country < b.country){return -1};
if(a.country > b.country){return 1};
return 0;
});

$('div#allcountries').text("List of countries and their capitals");
for(var i=0;i<countries.length;i++){
$('p.allcountries').append("<tr><td>"+countries[i].country+ " </td><td>"+countries[i].capital+"</td><tr/>");
}
});
