$(document).ready(function() {   
  $('a').hover(
    function(event){
      $(this).addClass('hover');
    }, 
    function(){
      $(this).removeClass('hover');
    }
  );
});
