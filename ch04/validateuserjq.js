$(document).ready(function() {   
  $('.error').hide();
  $('.submit').click(function(event){
    var data=$('.infobox').val();
    if(validate_userid(data))
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

function validate_userid(uid)
{
  var pattern= new RegExp(/^[a-zA-Z0-9_]+$/);
  return pattern.test(uid);
}
