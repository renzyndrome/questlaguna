(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict






$(document).ready(function() {
  $('.countdown').final_countdown({
  start: '1362139200',
  end: '1388461320',
  now: '1387461319',
  selectors: {
      value_seconds: '.clock-seconds .val',
      canvas_seconds: 'canvas_seconds',
      value_minutes: '.clock-minutes .val',
      canvas_minutes: 'canvas_minutes',
      value_hours: '.clock-hours .val',
      canvas_hours: 'canvas_hours',
      value_days: '.clock-days .val',
      canvas_days: 'canvas_days'
  },
  seconds: {
      borderColor: '#7995D5',
      borderWidth: '6'
  },
  minutes: {
      borderColor: '#ACC742',
      borderWidth: '6'
  },
  hours: {
      borderColor: '#ECEFCB',
      borderWidth: '6'
  },
  days: {
      borderColor: '#FF9900',
      borderWidth: '6'
  }}, function() {
  // Finish callback
  });
  });