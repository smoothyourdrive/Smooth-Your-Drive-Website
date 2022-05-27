// Navbar
$('.nav-link').click(function(){
    $('.navbar-collapse').collapse('hide');
});
$("#nav-faq").click(function(){
    $(".collapse").collapse('hide');
});

//Owl Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    startPosition: 0,
    autoplay:true,	
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

lightbox.option({
    'resizeDuration': 300,
    'fitImagesInViewport':true,
    'imageFadeDuration':100
  })
  

/*Count Animation - Happy CUstomers & No. of cars serviced */
var a = 0;
$(window).scroll(function() {

  var oTop = $('.cars-serviced-and-happy-customers').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {

    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
	    const updateCount = () => {
		    const target = +counter.getAttribute('data-target');
		    const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		    const inc = target / speed;

		// Check if target is reached
		    if (count < target) {
			// Add inc to count and output in counter
			    counter.innerText = count + inc;
			// Call function every ms
			    setTimeout(updateCount, 1);
		    } else {
			    counter.innerText = target + '+';
		    }
	    };
	    updateCount();
    });
    a = 1;
  }

});