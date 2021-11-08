$(document).ready(function() {
/*
$('.test-popup-link').magnificPopup({
  type: 'image'
});
*/

/*
$('.parent-container').magnificPopup({
  delegate: 'a', // by clicking on it popup will open
  type: 'image'
});
*/

$('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});


/*
$('.image-link').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it
    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function
    opener: function(openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }

}); 
*/

});

