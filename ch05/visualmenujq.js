$(document).ready(function() {
  $('.books').hide();
  $('.movies').hide();
  $('.music').hide();

  $('a').hover(
    function(event){
      $(this).addClass('rightselectfig');
      $(this).parent().addClass('leftselectfig');
    }, 
    function(){
      $(this).removeClass('rightselectfig');
      $(this).parent().removeClass('leftselectfig');
    }
  );

  $('#booksbutton').click(function(event){
    event.preventDefault();
    $('.books').show('slow');
    $('.movies').hide();
    $('.music').hide();
  });

  $('#moviesbutton').click(function(event){
    event.preventDefault();
    $('.movies').show('slow');
    $('.books').hide();
    $('.music').hide();
  });

  $('#musicbutton').click(function(event){
    event.preventDefault();
    $('.music').show('slow');
    $('.books').hide();
    $('.movies').hide();
  });
});
