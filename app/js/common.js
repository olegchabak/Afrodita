$(function() {

	var $menu = $("#my-menu").mmenu({
		extensions: ['theme-black', 'fx-listitems-slide', 'border-none', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo1.png">'
		}
	});

	var $icon = $("#my-icon");
	var API = $menu.data( "mmenu" );

	$icon.on( "click", function() {
		API.open();
	});

	API.bind( "open:finish", function() {
		setTimeout(function() {
			$icon.addClass( "is-active" );
		});
	});
	API.bind( "close:finish", function() {
		setTimeout(function() {
			$icon.removeClass( "is-active" );
		});
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
				items: 1
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
			ths.find('.carousel-services-item_image').css('min-height', thsh);
		});
	}
	carouselServices();


	$(".reviews-carousel").owlCarousel({
		items: 1,
		nav: false,
		smartSpeed:700,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		dots: true
	});


	// **********equalHeights**********
	$('.carousel-services-item-content_composition').equalHeights();

	// **********selectize**********
	$('select').selectize();

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

	// Плавный скролл по якорям
	$('a[href^="#"]').click(function() { 
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({scrollTop: destination}, 800);
		return false;
	});

});

