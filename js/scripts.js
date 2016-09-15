$(document).ready(function(){

	svg4everybody();

	$('html').addClass('js');

	// Tool menu
	$('.tool-menu-button').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('active-tool-nav');
	});

	// Tool template header
	$('.tool-header-trigger').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('active-tool-header');
	});

	// Header headroom.js
	if ( $(window).width() >= 992 ) {
		$("#header").headroom({
			tolerance : {
				up : 0,
				down : 5
			}
		});
	}

	// Mobile menu
	$('.menu-button').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('active-nav');
	});

	// Mobile dropdown toggle
	if ( $(window).width() <= 992 ) {
		$('.sub-menu').each(function(){
			$(this).css('height', 0);
		});
		$('.main-menu a').each(function(){
			$(this).addClass('closed');
		});
		$(".main-menu a").click(function(){
		
			var $this = $(this),
			$content = $this.next('.sub-menu');

			if(!$this.hasClass("closed")){
				TweenLite.to($content, 0.2, {height:0});
				$this.addClass("closed");
			} else {
				//to open
				// - temporarilty set height:auto
				// - tween from height:0
				TweenLite.set($content, {height:"auto"});
				TweenLite.from($content, 0.2, {height:0});
				$this.removeClass("closed");
			}
		});
	}
	
	// Remove loading
	$('body').removeClass('loading');

	// Hides alerts
	if ( $('.alert').length ) {
		$('.alert .close-button').on('click', function(e){
			e.preventDefault();
			$(this).closest('p').slideUp();
		});
	};

	// Appends Google Maps API
	if ( $('.map-card').length ) {
		$('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgCzwn7i1OWIvUL9I-Dtv-AEKfWNMBbjc&callback=initMap" async defer></script>');
	}

	// Table toggles
	if ( $('.table-wrapper').length ) {
		if ( $(window).width() <= 760 ) {
			$('tr').on('click', function() {
				$(this).toggleClass('active');
			})
		}
	}


	// Card feature carousels
	$('.card.carousel').each(function(){
		$this = $(this);

		// Image carousel inside of this card carousel
		$('.img-wrap-carousel',$this).slick({
			asNavFor: $('.copy-wrap-carousel',$this),
			appendArrows: $('.arw-nav',$this),
			dots: false,
			prevArrow: '<i class="icon icon-arrow"><svg><use xlink:href="img/spritemap.svg#icon-arrow-left"></use><svg></i>',
			nextArrow: '<i class="icon icon-arrow"><svg><use xlink:href="img/spritemap.svg#icon-arrow-right"></use><svg></i>',
			fade: true
		});

		// Copy carousel inside of this card carousel
		$('.copy-wrap-carousel',$this).slick({
			arrows: false,
			appendDots: $('.dot-nav',$this),
			asNavFor: $('.img-wrap-carousel',$this),
		  	dots: true,
		});
	});

	// Accordion
	$('.button-accordion').on('click',function(e){
		e.preventDefault();
		var $this = $(this),
				$accordion = $this.closest('.accordion-wrap').find('.accordion-content'),
				$buttonText = $this.find('.text');

		if($this.hasClass('open')){
		  TweenLite.to($accordion, 0.2, {height:0})
		  $this.removeClass('open');

		  TweenLite.to($this.find('.icon-arrow'),0.2,{
		  	ease: Power2.easeOut,
		  	rotation: 0,
		  	transformOrigin: 'center center'
		  });

		  // Set text back to expand
		  $buttonText.text('click to expand');
		}else{
		  TweenLite.set($accordion, {height:"auto"});
		  TweenLite.from($accordion, 0.2, {height:0});
		  $this.addClass('open');

		  TweenLite.to($this.find('.icon-arrow'),0.2,{
		  	ease: Power2.easeOut,
		  	rotation: 45,
		  	transformOrigin: 'center center'
		  });

		  // Set text to close
		  $buttonText.text('click to close');
		}
	});
	
});
//# sourceMappingURL=maps/scripts.js.map
