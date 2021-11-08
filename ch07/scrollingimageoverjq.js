$(document).ready(function() {
	var $pic = $('#scroller a img');
	var next;
	next=$pic.eq(3);
	scroll(next);
});

function scroll(im)
{
	im.animate({'left': -770}, 5000);
};
