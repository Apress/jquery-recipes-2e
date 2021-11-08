$(document).ready(function() {   
  $('.error').hide();
  $('.infobox').each(function(){
    $(this).blur(function(){
      var data=$(this).val();
      var len=data.length;
      if(len<1)
      {
        $(this).parent().find('.error').show();
      }
      else
      {
        $(this).parent().find('.error').hide();
      }
    });
  });
});	
