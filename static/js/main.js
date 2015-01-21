//= require jquery
//= require bootstrap-sprockets

window.onload = function() {

	$(".parent").hover(function () {
		$(".dropdown").toggleClass("visuallyhidden");
	});
	
};