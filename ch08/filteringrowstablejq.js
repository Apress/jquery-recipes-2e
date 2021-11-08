$(document).ready(function() {   
  var rows;
  var coldata;

  $('.submit').click(function(event){
    $('table').find('tbody tr').hide();
    var data=$('.infobox').val();
    var len=data.length;
    if(len>0)
    {
      $('table tbody tr').each(function(){
        coldata=$(this).children().eq(1);
        if(coldata.text().charAt(0).toUpperCase()==data.charAt(0).toUpperCase())
        {
          $(this).show();
        }
      });
    }
    event.preventDefault();
  });
});
