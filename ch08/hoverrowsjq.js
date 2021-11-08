$(document).ready(function() {   
  $('tbody tr').hover(
    function(){   
      $(this).find('td').addClass('hover');   
    }, 
    function(){   
      $(this).find('td').removeClass('hover');   
    }
  );   
});
