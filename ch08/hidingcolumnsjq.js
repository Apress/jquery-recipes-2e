$(document).ready(function() {   
  $('th').hover(
    function(){   
      var colindex=$(this).parent().children().index(this);
      $(this).addClass('hover');
      $('table td:nth-child('+(colindex+1)+')').addClass('hover');
    }, 
    function(){   
      $('table tr').children().removeClass('hover');
    }
  );   

  $('th').click(function(){   
    $(this).hide();
    colindex=$(this).parent().children().index(this);
    $('table td:nth-child('+(colindex+1)+')').hide();
  });
});
