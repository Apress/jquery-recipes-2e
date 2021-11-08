$(document).ready(function() {   
  $('.error').hide();
  $('.submit').click(function(event){
    data=$('.password').val();
    var len=data.length;
    if(len<1)
    {
      $('.password').next().show();
    }
    else
    {
      $('.password').next().hide();
    }
    if($('.password').val() !=$('.confpass').val())
    {
      $('.confpass').next().show();
    }
    else
    {
      $('.confpass').next().hide();
    }
    event.preventDefault();
  });
});
