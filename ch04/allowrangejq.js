$(document).ready(function() {   
  $('.error').hide();
  $('.submit').click(function(event){
    var data=$('.infobox').val();
    var len=data.length;
    var c=0;
    var age=0;
    var flag=0;
    for(var i=0;i<len;i++)
    {
      c=data.charAt(i).charCodeAt(0);
      if(c <48 || c >57)
      {
        $('.error').show();
        flag=1;
        event.preventDefault();
        break;
      }
      else
      {
        $('.error').hide();
      }
    }

    if(flag==0)
    {
      age=parseInt(data);
      if(age<5 || age>99)
      {
        $('.error').show();
        $('.error').text('Invalid Age. Please enter the age within the range 5 to 99');
        event.preventDefault();
      }
    }
  });
 });
