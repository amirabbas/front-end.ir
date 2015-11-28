
$(document).ready(function() {
	$('.sidebar-btn, .sidebar-close').click(function() {
		$('body').toggleClass('sidebar-reveal');
	});
});

$(document).ready(function() {
	$('.about-me-btn, .modal-close').click(function() {
		$('html').toggleClass('perspective');
	});
});


$(document).ready(function() {
	$('.personal-content .inner').masonry({
		transitionDuration: 0,
		itemSelector: '.post',
		isOriginLeft: false,
	});
});




