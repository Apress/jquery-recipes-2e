$(document).ready(function() {  
 		$("#image_hover").children("li").find("img").on("mouseenter", function() {
			$(this).css( {"width" : "350px" });
			$(this).css( {"height" : "250px" });
			}).on("mouseleave", function() {
			$(this).css( {"width" : "100px" });
			$(this).css( {"height" : "75px" });
	});			
});



