console.log("script.js");



window.onload = function() {


	TweenMax.from( "#h1", 4, { 
		opacity: 0,
		ease: 		Back.easeIn,
		onComplete: function () {
			console.log("animation complete");

		} 
	});



	$('#task').waypoint(function() {

		TweenMax.to( "#task", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

	$('#memory').waypoint(function() {

		TweenMax.to( "#memory", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });



	$('#processor').waypoint(function() {

		TweenMax.to( "#processor", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

		$('#cpu').waypoint(function() {

		TweenMax.to( "#cpu", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });


		$('#memory-icon').waypoint(function() {

		TweenMax.to( "#memory-icon", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

				$('#graphics').waypoint(function() {

		TweenMax.to( "#graphics", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });




	$('#display').waypoint(function() {

		TweenMax.to( "#display", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

	$('#gpu').waypoint(function() {

		TweenMax.to( "#gpu", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

	$('#fourK').waypoint(function() {

		TweenMax.to( "#fourK", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

	$('#thunderbolt').waypoint(function() {

		TweenMax.to( "#thunderbolt", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

	$('#storage').waypoint(function() {

		TweenMax.to( "#storage", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

	$('#connections').waypoint(function() {

		TweenMax.to( "#connections", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

	$('#ethernet').waypoint(function() {

		TweenMax.to( "#ethernet", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

	$('#usb-port').waypoint(function() {

		TweenMax.to( "#usb-port", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

	$('#hdmi').waypoint(function() {

		TweenMax.to( "#hdmi", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });


	$('#wireless').waypoint(function() {

		TweenMax.to( "#wireless", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

	$('#ac').waypoint(function() {

		TweenMax.to( "#ac", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

	$('#bluetooth').waypoint(function() {

		TweenMax.to( "#bluetooth", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });

	$('#macpro-foot').waypoint(function() {

		TweenMax.to( "#macpro-foot", 1,  { 
			opacity: 1,
			ease: 		Linear.easeNone,
			onComplete: function () {
			} 
		});

	}, { offset: '70%' });


































}


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}); 
