$(document).ready(function() {   
  $('.error').hide();
  $('.fooderror').addClass('error');
  $('.fooderror').hide();
  $('.payerror').addClass('error');
  $('.payerror').hide();
  $('.submit').click(function(event){
    var data=$('.userid').val();
    if(validate_userid(data))
    {
      $('.userid').next().hide();
    }
    else
    {
      $('.userid').next().show();
    }
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
    data=$('.emailadd').val();
    if(valid_email(data))
    {
      $('.emailadd').next().hide();
    }
    else
    {
      $('.emailadd').next().show();
    }
    var count=0;
    $('div').find(':checkbox').each(function(){
      if($(this).is(':checked'))
      {
        count++;
      }
    });
    if(count==0)
    {
      $('.fooderror').css({'margin-left':250}).show();
    }
    else
    {
      $('.fooderror').hide();
    }
    count=0;
    $('div').find(':radio').each(function(){
      if($(this).is(':checked'))
      {
        count++;
      }
    });
    if(count==0)
    {
      $('.payerror').css({'margin-left':250}).show();
    }
    else
    {
      $('.payerror').hide();
    }
    count=$('select option:selected').val();
    if(count==0)
    {
      $('.infobox').next().show();
    }
    else
    {
      $('.infobox').next().hide();
    }
    event.preventDefault();
  });
});

function valid_email(email)
{
  var pattern= new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
  return pattern.test(email);
}

function validate_userid(uid)
{
  var pattern= new RegExp(/^[a-z0-9_]+$/);
  return pattern.test(uid);
}
