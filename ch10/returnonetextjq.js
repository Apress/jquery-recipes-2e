$(document).ready(function(){
	$("button").click(function(){
    		$.ajax({
			url: "/returnname.txt", 
			success: function(result){
      				$("#askname").html(result);
    		}});
  	});
});
