$(document).ready(function() {   
alert($('p').filter('.info').length+" paragraphs match the given class");
 $('p').filter('.info').addClass('highlight1');
})
