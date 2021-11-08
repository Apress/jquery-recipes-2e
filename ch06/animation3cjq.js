$(document).ready(function() {  

	$.leftrotate = function(){
 		$("#image_slider").children("ul").animate({
 			"margin-left" : "-=210px"
 			}, 2000, 
			function(){
				if($("ul").css("marginLeft") == "-1050px"){
					$("ul").css( {"marginLeft" : "0px" });
				} 
			});
		$.leftrotate();
	}
	$.leftrotate();
});




