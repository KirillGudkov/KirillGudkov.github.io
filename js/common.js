$(document).ready(function(){
	$('#fullpage').fullpage({
		scrollingSpeed: 500,
		autoScrolling: true,
	});
});

$(window).on('load', function () {
    $preloader = $('.preloader'),
      $loader = $preloader.find('.indicator');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });

// when user click on "contact" block with contact form appear and layer under is blured
$("#contact").click(function(){
	$(".contact-container").fadeIn(300);
	$(".form").animate({'margin-left': '25%'}, 400);
	$("#fullpage").addClass('blured');
	$("#fullpage").removeClass('non-blured');
});

//button to close contact from and make layer under no blured
$(".close-button").click(function(){
	$(".contact-container").fadeOut(300);
	$(".form").animate({'margin-left': '45%'}, 400);
	$("#fullpage").removeClass('blured');
	$("#fullpage").addClass('non-blured');
});

$(".scroll-down").click(function(){
	$.fn.fullpage.moveSectionDown();
});

$("#works").click(function(){
	$.fn.fullpage.moveTo(4);
});