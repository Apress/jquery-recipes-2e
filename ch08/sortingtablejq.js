$(document).ready(function() {   
  $('th').each(function() {   
    $(this).hover(
      function(){
        $(this).addClass('hover');
      }, 
      function(){
        $(this).removeClass('hover');
      }
    );

    $(this).click(function(){
      alert($(this).text()+' column is selected');
    });
  });
});
