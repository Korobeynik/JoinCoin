
function wWidth() {
	if ($(window).width() < 992) {
   $('.menu').addClass('side-nav');
	}
	else {
	  $('.menu').removeClass('side-nav');
	}
};

//side-nav


$(function() {

	wWidth();

	$('select').material_select();

	$(".button-collapse").sideNav();

	$(".give .card__form__item").click( function() {
		$(".give .card__form__item").removeClass('active');
		$(this).addClass('active');
	});

	$(".get .card__form__item").click( function() {
		$(".get .card__form__item").removeClass('active');
		$(this).addClass('active');
	});

	$('i.material-icons.dp48').click( function() {
		$('.menu').slideToggle();
	});

	$('.modal').modal();
	$('.modal__close').modal('close');

});
