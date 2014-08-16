
$(document).ready(function() {
	$('.sidebar-btn').click(function() {
		$('body').toggleClass('sidebar-reveal');
	});
});

$(document).ready(function() {
	$('.about-me-btn, .modal-close').click(function() {
		$('html').toggleClass('perspective');
	});
});



