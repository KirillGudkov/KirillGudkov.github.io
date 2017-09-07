$(document).ready(function(){
	$('#fullpage').fullpage({
		scrollingSpeed: 600,
		autoScrolling: true,
	});
});

$(window).on('load', function () {
    $preloader = $('.preloader'),
      $loader = $preloader.find('.indicator');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });