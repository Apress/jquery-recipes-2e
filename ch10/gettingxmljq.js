$(document).ready(function() {
	$('#submit').on("mousedown", function(event) {
		$.ajax({
			type:"GET",
			url:"student.xml",
			dataType:"xml",
			success: function (sturec) {
				var stud="<ul>";
				$(sturec).find('student').each(function(){
					var name = $(this).find('first-name').text()
					stud+="<li>"+name+"</li>";
				});
				stud+="</ul>";
				$('#message').append(stud);
			}
		});
		return false;
	});
});
