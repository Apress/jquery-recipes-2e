$(document).ready(function() {   
  var rows=$('table').find('tbody tr').length;
  var no_rec_per_page=5;
  var no_pages= Math.ceil(rows/no_rec_per_page);
  var $pagenumbers=$('<div id="pages"></div>');
  for(i=0;i<no_pages;i++)
  {
    $('<span class="page">'+(i+1)+'</span>').appendTo($pagenumbers);
  }   
  $pagenumbers.insertBefore('table');

  $('.page').hover(
    function(){
      $(this).addClass('hover');
    }, 
    function(){
      $(this).removeClass('hover');
    }
  );

  $('table').find('tbody tr').hide();
  var tr=$('table tbody tr');

  $('span').click(function(event){
    $('table').find('tbody tr').hide();
    for(var i=($(this).text()-1)*no_rec_per_page;
        i<=$(this).text()*no_rec_per_page-1;
        i++)
    {
      $(tr[i]).show();
    }
  });
});
