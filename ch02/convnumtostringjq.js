$(document).ready(function() {
	var members = [67,51,125,39,84];
	$('p.origarr').html(members.join("<br/>"));
	var str = members.join("");
	$('p.arrstring').text(str);
	var substr = str.substr(0,3);
	$('p.partstring').text(substr);
});
