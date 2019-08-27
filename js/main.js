$(document).ready(() => {
	$('.welcome').addClass('animate');
	setTimeout(function() {
		$('.shapeCartoon').addClass('animate');
		$('.socialButtons').addClass('animate');
		$('.textNavbar').addClass('animate');
		$('.briefInfo').addClass('animate');
		$('.seemore').addClass('animate');
	}, 800);
	$('#seeMoreClick').on('click', function(){
		console.log("hola");
		var scrollPos =  $("#aboutme").offset().top;
 		$(window).scrollTop(scrollPos);
	});
});