$(document).ready(function(){
  $('li.mainmenu').hover(
    function() { 
      $('ul', this).show(); 
    },
    function() { 
      $('ul', this).hide(); 
    }
  );
});
