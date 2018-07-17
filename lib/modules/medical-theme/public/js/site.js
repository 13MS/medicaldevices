$(function() {


  
  var windowHeight = $(window).height();
  var documentHeight = $(document).height() - windowHeight;
  var DeviceCarouselWrapper = $('.deviceGroup > .apos-area > .apos-area-widgets').length ? $('.deviceGroup > .apos-area > .apos-area-widgets') : $('.deviceGroup > .apos-area')
  var oneinten = $('#oneinten');
  var storyPlayer = $('.storyPlayer');
  var ratio = 1;
  var tenElement = $('.ten');
  var oneElement = $('.one');
  var progressBar = $('#progressBar')
  var months = $('#months')

  var padding = $(window).innerHeight() / 2
  oneinten.css('padding', padding.toString() + 'px 0')
  
  //Top menu
  $('.hamburger').click(function(){
    $('#sideMenu').addClass('active');
  });
  $('#sideMenu header a').click(function(){
    $('#sideMenu').removeClass('active');
  });

  $(window).on('load', function() {
    if ($('video')){
      $('source').each(function (index, obj) {
        $(obj).attr('src', $(obj).attr('temp-src'));
      })
      $('video')[0].load();
      $('video')[0].play();
    }
  });

  //ScrollReveal
  window.sr = ScrollReveal();
  sr.reveal('.reveal');

  ///////////////////
  // Home
  ///////////////////

  if ($('.home').length){

    var scrollAnimation = function () {
      var scroll = $(window).scrollTop()
      var progress = scroll / documentHeight * 100;
      progressBar.width(progress.toString() + '%')

      //Header Color
      if (scroll > windowHeight) $('#mainheader').removeClass('dark');
      else $('#mainheader').addClass('dark');

      if (scroll > tenAppears && scroll <= tenStops) {
        ratio = (1 - (scroll - tenAppears) / (tenStops - tenAppears)) * windowHeight / 2;
        tenElement.css('transform', 'translateY( ' + ratio + 'px )')
        oneElement.css('transform', 'translateY( -' + ratio + 'px )')
      }
      else {
        tenElement.css('transform', 'translateY(0)')
        oneElement.css('transform', 'translateY(0)')
      }
    }

    var homeResize = function(){
      windowHeight = $(window).height();
      documentHeight = $(document).height() - windowHeight;
      tenAppears = oneinten.offset().top - windowHeight;
      tenStops = oneinten.offset().top;
      padding = $(window).innerHeight() / 2;
      oneinten.css('padding', padding.toString() + 'px 0')
      progressBar.css('top', $('#mainheader').innerHeight());

      //Check that the animation is at the right spoty
      scrollAnimation();
    }

    homeResize();

    $(window).resize(homeResize);


    //Months Animation
    var monthsWaypoint = months.waypoint(function(direction) {
      if (direction === 'down') $('.animation', months).addClass('launched')
      else $('.animation', months).removeClass('launched')
    }, {
      offset: '70%'
    })

    $('.counter').counterUp({
      time: 2000
    });

    //Examples
    //Slick
    $(document).ready(function(){
      DeviceCarouselWrapper.slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    });

    //Init
    DeviceCarouselWrapper.on('init', function(){
      homeResize();
      $('#examples').css('opacity', 1);
    });
    // Next
    $('.slickNav .next').click(function(){
      DeviceCarouselWrapper.slick('slickNext');
    });
    $('.slickNav .prev').click(function(){
      DeviceCarouselWrapper.slick('slickPrev');
    });

    //One in Ten Animation
    var tenAppears = oneinten.offset().top
    $(window).scroll(function(){
      scrollAnimation();
    });

    var waypoint1 = oneinten.waypoint(function(direction) {
      if (direction === 'down') oneinten.addClass('static') 
      else oneinten.removeClass('static')
    }, {
      offset: '0%'
    })
    var waypoint2 = oneinten.waypoint(function(direction) {
      if (direction === 'down') {
        $('.partOne').fadeOut(300, function(){$('.partTwo').fadeIn(300)});
      }
      else {
        $('.partTwo').fadeOut(300, function(){$('.partOne').fadeIn(300)});
      }
    }, {
      offset: '-100%'
    })

    //Story
    $('.launch').click(function(){
      storyPlayer.fadeIn();
    });
    $('.close').click(function(){
      storyPlayer.fadeOut();
    });


  }

  /////////////////
  // STEPS
  /////////////////
  if ($('.steps.numbered')){
    $('.steps.numbered').each(function(index, group){
      $('.step', group).each(function(index, obj){
        var number = index + 1;
        $('.number', obj).text(number);
      })
    });
  }





  //Smooth Scrolling
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
});
