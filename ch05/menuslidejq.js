$(document).ready(function() {
  $('.books').hide();
  $('.movies').hide();
  $('.music').hide();

  $('#booksbutton').mouseover(function(){
    $('.books').slideDown('slow');
    $('.movies').slideUp('slow');
    $('.music').slideUp('slow');
  });

  $('#moviesbutton').mouseover(function(){
    $('.movies').slideDown('slow');
    $('.books').slideUp('slow');
    $('.music').slideUp('slow');
  });

  $('#musicbutton').mouseover(function(){
    $('.music').slideDown('slow');
    $('.books').slideUp('slow');
    $('.movies').slideUp('slow');
  });
});
