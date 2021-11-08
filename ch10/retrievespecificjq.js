$(document).ready(function() {
	$('#submit').on("mousedown", function(event) {
		$.ajax({
			type:"GET",
			url:"student.xml",
			dataType:"xml",
			success: function (sturec) {
				var stud="<table border='1'>";
				$(sturec).find('student').each(function(){
					var roll = $(this).find('roll').text()
					var fname = $(this).find('first-name').text()
					var lname = $(this).find('last-name').text()
					var marks = $(this).find('marks').text()
					stud+="<tr><td>"+roll+"</td><td>"+fname+" "+lname+"</td><td>"+marks+"</td></tr>";
				});
				stud+="</table>";
				$('#message').append(stud);
			}
		});
		return false;
	});
});
