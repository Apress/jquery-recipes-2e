$(document).ready(function() {
	var $pic = $('#scroller a img');
	var imgs = $pic.length;
	var next;
	for (var i=0;i<imgs;i++){
		next=$pic.eq(i);
		scroll(next);
	};
});

function scroll(im)
{
	im.animate({'left': -770}, 5000);
};
