$(document).ready(function() {   
  $('.error').hide();
  $('option:odd').addClass('meal');
  $('.submit').click(function(event){
    var selectedopts="";
    var count=$('select option:selected').val();
    if(count==0)
    {
      $('p.result').hide();
      $('.error').show();
    }
    else
    {
      $('select option:selected').each(function(){
        selectedopts+=$(this).text()+",";
      });
      $('.error').hide();
      $('p.result').show();
      $('p.result').text('You have selected '+ selectedopts);
    }
    event.preventDefault();
  });
});
