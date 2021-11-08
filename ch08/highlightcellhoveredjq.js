$(document).ready(function() {   
  $('td').hover(
    function(){   
      $(this).addClass('hover');
    }, 
    function(){   
      $('table tr').children().removeClass('hover');
    }
  );   
});
