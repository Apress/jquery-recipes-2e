$(document).ready(function() {   
  $('li.drink').addClass('plusimageapply');
  $('li.drink').children().addClass('noimage');
  $('li.drink').children().hide();
  $('li.drink').each(
    function(column) {   
      $(this).click(function(event){
        if (this == event.target) {
          if($(this).is('.plusimageapply')) {
            $(this).children().show();
            $(this).removeClass('plusimageapply');
            $(this).addClass('minusimageapply');
          }
          else
          {
            $(this).children().hide();
            $(this).removeClass('minusimageapply');
            $(this).addClass('plusimageapply');
          }
        }
      });
    }
  );
});
