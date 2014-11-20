window.onload = function() {

	$(window).on('scroll', function () {
		var scrollPos = $(document).scrollTop();
		$('#can_sidebar').css({
			top: scrollPos
		});
	}).scroll();
	
};