$(function() {

	// ***Плавный скролл по якорям***
	$('a[href^="#"]').click(function() { 
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({scrollTop: destination}, 800);
		return false;
	});

	/***********Owl Carousel***********/
	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselServices();
		}, 100);
		
	});
	
	$(".carousel-services").owlCarousel({
		nav: true,
		smartSpeed:700,
		loop: true,
		autoplay: true,
		autoplayHoverPause: false,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		dots: false,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1,
				autoplay: false
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			},
			1700: {
				items: 4
			}
		}

	});

	function carouselServices() {
		$('.carousel-services-item').each(function(){
			var ths = $(this),
			thsh = ths.find('.carousel-services-item-content').outerHeight();
			if ($(window).width() > 480) {
				ths.find('.carousel-services-item_image').css('min-height', thsh);
			} else {
				ths.find('.carousel-services-item_image').css('min-height', thsh/2);
			}
			
		});
	}
	carouselServices();

	//*********Rewiews carousel*********
	$(".reviews-carousel").owlCarousel({
		items: 1,
		nav: false,
		smartSpeed:1000,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: true,
		responsiveClass:true,
		responsive: {
			0: {
				autoHeight: true
			},
			768: {
				autoHeight: false
			}
		}
		
	});


	//***********Specialists carousel***********
	$(".specialists-carousel").owlCarousel({
		items: 3,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		smartSpeed:700,
		loop: true,
		autoplay: true,
		margin: 15,
		dots: false,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			550: {
				items: 2
			},
			992: {
				items: 3,
				nav: false,
				autoplay: false			}
		}
	});


	// *********Magnific PopUp*********
	$('.ajax-popup-link').magnificPopup({
		type: 'ajax',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});


	//Появление кнопки прокрутки "наверх"
	$(window).scroll(function(){
		if ($(this).scrollTop() > $(this).height()) {
			$('.top-up').css('right','5%');
		} else {
			$('.top-up').css('right','-100px');
		}
	});

	// Прокрутка наверх при нажатии на кнопку "Наверх"
	$('.top-up').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 1000)
	});


	// **********selectize**********
	if ($(window).width() > 700) {
		$('select').selectize();
	}

	//E-mail Ajax Send
	$("form.callback-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.success').addClass('active').css('display', 'flex');
			setTimeout(function() {	
				$('.success').removeClass('active').css('display', 'none');
				th.trigger("reset");
			}, 4000);
		});
		return false;
	});


	// **********equalHeights**********
	$('.carousel-services-item-content_composition').equalHeights();
	$('.specialists-carousel-item-description>h4').equalHeights();
	$('.specialists-carousel-item-description>p').equalHeights();


	// // *** TEST notification ***
	// $('body').prepend('<div class="test" style="background-color:red;color:white;text-align:center;font-size:13px">Содержимое на данном сайте размещено в учебных целях или для тестовых работ и не является офертой! <b class="test-hide" style="margin-left:15px;cursor:pointer"> Скрыть&nbsp;&#10008;</b></div>');
	// $('.test-hide').on('click',function(){$('.test').slideUp()});


	// ******* Прелоадер *******
	$(window).on('load', function() {
		$('.preloader').delay(1000).fadeOut('slow');
	});

});

