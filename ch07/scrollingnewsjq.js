$(document).ready(function() {  
	$('.scroller').append($('.scroll').clone());

	var scroll = function(content) {
  		$('.scroll').animate({
    			top: -400
  			}, 4000, function() {
    				$('.scroll').css({
      				top: 0
    				});
    		scroll($(this));
  	});

   	$('.scroll').hover(function() { 
        		$('.scroll').stop(true, false);
    	});

    	$(".scroll").mouseleave(function(){
        		scroll();
    	});
}

scroll();

});
