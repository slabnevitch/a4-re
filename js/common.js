$(function() {
		var isMobile = {
				Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
				BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
				iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
				Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
				any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
			};

			if ( !isMobile.any() ) {
		    // Код не для телефонов
				 var $headerVideo = $('#bgndVideo').YTPlayer({
					// quality: 'hd720',
					anchor: 'top, top'
					// mobileFallbackImage: '../img/header-bg.jpg'
				});

		  }

	$(document).scroll(function() {
		var $menuTop = $('.header-top'),
			menuTopHeight = $menuTop.height();

		if($(this).scrollTop() > menuTopHeight){
			$menuTop.addClass('header-top-fixed');
		}else{
			$menuTop.removeClass('header-top-fixed');
		}
	});

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".header nav").toggleClass('active');
        return false;
    });

   
	$('.to-top').click(function(e){
		$('html, body').animate({scrollTop: 0}, 800);
	});


	// tabs
		var $tabs = $('.tabs__link');

	$tabs.on('click', function(e) {
		e.preventDefault();
		var $th = $(this),
			$href = $th.attr('href'),
			$parent = $th.parent();
		$parent.addClass('tabs__item--active')
				.siblings()
				.removeClass('tabs__item--active');
						
		$($href).siblings()
				.fadeOut().stop(true, true);
		$($href).fadeIn();
				
	});
	// end tabs

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// Accordeon-----------------------------------
		$('.acordeon-link').click(function(e) {
			e.preventDefault();
			var $currentItem = $(this).closest('.acordeon-item'),
				$mark = $(this).find('.requirements-link__mark');

			$mark.toggleClass('active');
			if($mark.hasClass('active')){
				$mark.text('–');
			}else{
				$mark.text('+');
			}
			if($currentItem.hasClass('acordeon-item-with-sublist')){

				$mark.toggleClass('opened');
				$currentItem.find('.acordeon-sublist')
				.stop(true, true)
				.slideToggle();
				$currentItem.siblings()
				.find('.acordeon-sublist')
				.stop(true, true)
				.slideUp();

				$currentItem.siblings()
				.find('.requirements-link__mark')
				.text('+');


			}else{
				return;
			}
		});
// end Accordeon-----------------------------------
	$(document).ready(function(){

		if($('.tooltip').length > 0){
			
			var calcPopup = $('.tooltip').tooltipster({
				interactive: true,
				trigger: 'click',
				arrow: true,
				side: 'bottom',
				contentCloning: true,
				debag: true,
				distance: 12
			});

			// $('.tooltipstered').click(function() {
			// 	return false;
			// });
		}
		
		$('.steps .portfolio-item').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-img-mobile',
			image: {
				verticalFit: true
			}

		});


	});

	// $('section, footer').animated('slideInUp', 'fadeOut');
	$('.section-left').animated('slideInLeft', 'fadeOut');
	$('.section-right').animated('slideInRight', 'fadeOut');

	// portfolio blocks animation
		$('.portfolio .portfolio-item, .steps .portfolio-item').waypoint(function() {

			$('.portfolio .portfolio-item').each(function(index) {
				var $this = $(this);

				setTimeout(function() {
					$this.animated('fadeInUp');

				}, index*200);

			});

			$('.steps .portfolio-item').each(function(index) {
				var $this = $(this);

				setTimeout(function() {
					$this.animated('fadeInUp');

				}, index*200);

			});
		}, {offset: '50%'});
	// end portfolio blocks animation
});
 // google-map-footer
  	

  	function initMap() {
  		var image = {
      		url: 'img/icons/map-marker.png'
      	};
      	var marker = new google.maps.Marker({
      		position: {lat: 50.005531, lng: 36.233364},
			    // title: 'Вне зоны доступа', // "Хинт"
			    icon: image
			});

  		if($('#footer-map').length > 0){

	      map = new google.maps.Map(document.getElementById('footer-map'), {
	        center: {lat: 50.005531, lng:  36.233364},
	        zoom: 16,
	        disableDefaultUI: true, 
	        zoomControl: true,
	        mapTypeControl: true,
	        fullscreenControl: true
	        // styles: style

	      });
	      marker.setMap(map);
  		}
  		
  		if($('#contacts-map').length > 0){

	      contactsMap = new google.maps.Map(document.getElementById('contacts-map'), {
	        center: {lat: 50.005531, lng:  36.233364},
	        zoom: 16,
	        disableDefaultUI: true, //отмена всех дефолтных элементов управления
	       
	       // добавление необходимых элементов управления вручную
	        zoomControl: true,
	        mapTypeControl: true,
	        fullscreenControl: true
	        // styles: style
	        // gestureHandling: 'none' //запрет на прокручивание карты
	      });
	      marker.setMap(contactsMap);
  		}

    }
  // end of google-map-footer

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	// Owl
		$('#product-car').owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			navText: [],
			dotd: false,
			responsiveClass: true
			
		});
	// end of Owl
});
