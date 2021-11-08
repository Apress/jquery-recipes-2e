$(document).ready(function() {   
  var $nodes = $('#ElectronicsProducts').children();
  alert('Number of nodes is '+$nodes.length);
  var txt="";
for (var i = 0; i < $nodes.length; i++){   
    txt+=$('#ElectronicsProducts').find('li:eq('+i+')').text()+" ";
}
  alert("Items in the unordered lists are "+txt);
});


 