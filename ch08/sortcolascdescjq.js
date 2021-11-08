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
      if($(this).is('.asc'))
      {
        $(this).removeClass('asc');
        $(this).addClass('desc');
        sortdir=-1;
      }
      else
      {
        $(this).addClass('asc');
        $(this).removeClass('desc');
        sortdir=1;
      }
      $(this).siblings().removeClass('asc');
      $(this).siblings().removeClass('desc');

      var rec=$('table').find('tbody >tr').get();

      rec.sort(function(a, b) {
        var val1 = $(a).children('td').eq(column).text().toUpperCase();
        var val2 = $(b).children('td').eq(column).text().toUpperCase();
        return (val1 < val2) ? -sortdir : (val1 > val2) ? sortdir : 0;
      });

      $.each(rec, function(index, row) {   
        $('tbody').append(row);   
      });   
    });
  });
});
