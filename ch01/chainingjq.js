$(document).ready(function() {  
$('li:contains(Cell Phones)').parent().find('li:eq(0)')
.addClass('highlight1').end().find('li:eq(2)')
.addClass('highlight2');
});

