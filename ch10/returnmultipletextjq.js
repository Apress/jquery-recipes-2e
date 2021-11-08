$(document).ready(function(){
	$("button").click(function(){
    		$.ajax({
			url: "/returndata.txt", 
			success: function(result){
				var lines=result.split("<br/>");
				$("#name").html(lines[0]);
				$("#work").html(lines[1]);
	    		}});
  	});
});
