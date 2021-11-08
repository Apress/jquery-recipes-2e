$(document).ready(function() {   
  $('th').each(function(column) {   
    $(this).hover(
      function(){
        $(this).addClass('hover');
      }, 
      function(){
        $(this).removeClass('hover');
      }
    );

    $(this).click(function(){
      var rec=$('table').find('tbody >tr').get();
      rec.sort(function(a, b) {	
        var val1 = $(a).children('td').eq(column).text().toUpperCase();
        var val2 = $(b).children('td').eq(column).text().toUpperCase();
        return (val1 < val2) ? -1 : (val1 > val2) ? 1 : 0;
      });

      $.each(rec, function(index, row) {   
        $('tbody').append(row);   
      });   
    });
  });
});
