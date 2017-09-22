$(document).ready(function(){
	$('#fullpage').fullpage({
		scrollingSpeed: 500,
		autoScrolling: true,
	});

	// 	//E-mail Ajax Send
	// $("form").submit(function() {
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Thank you!");
	// 		setTimeout(function() {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });
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
});

//button to close contact from and make layer under no blured
$(".close-button").click(function(){
	$(".contact-container").fadeOut(300);
	$(".form").animate({'margin-left': '45%'}, 400);
});

$(".scroll-down").click(function(){
	$.fn.fullpage.moveSectionDown();
});

$("#works").click(function(){
	$.fn.fullpage.moveTo(4);
});

$("#aboutme").click(function(){
	$.fn.fullpage.moveTo(2);
});

$("#services").click(function(){
	$.fn.fullpage.moveTo(5);
});