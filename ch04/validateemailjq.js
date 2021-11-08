$(document).ready(function() {   
  $('.error').hide();
  $('.submit').click(function(event){
    var data=$('.infobox').val();
    if(valid_email(data))
    {
      $('.error').hide();
    }
    else
    {
      $('.error').show();
    event.preventDefault();
    }
  });
});

function valid_email(email)
{
  var pattern= new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
  return pattern.test(email);
}
