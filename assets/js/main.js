(function ($) {
    "use strict";

    var windowOn = $(window);

    // Preloader
    windowOn.on('load',function() {
        $("#loading").fadeOut(500);
    });

   // Sticky Menu js
   windowOn.on('scroll', function() {
      var scroll = windowOn.scrollTop();
      if (scroll < 100) {
         $("#tp-header-sticky").removeClass("header-sticky");
      } else {
         $("#tp-header-sticky").addClass("header-sticky");
      }
   });

    // Back to Top Button
    var $backToTop = $(".tp-back-to-top");
    $backToTop.hide();

    windowOn.on('scroll',function() {
        if ($(this).scrollTop() > 100) {
            $backToTop.fadeIn();
            $backToTop.addClass('tp-back-to-top-open');
        } else {
            $backToTop.fadeOut();
            $backToTop.removeClass('tp-back-to-top-open');
        }
    });

    $backToTop.on('click', function(e) {
        $("html, body").animate({scrollTop: 0}, 500);
    });

    // mobile Menu custom
    let tpMenuHTML = $('.tp-mobile-menu-active > ul').clone();
    let tpOffcanvasMenu = $('.tp-offcanvas-menu > nav');

    tpOffcanvasMenu.append(tpMenuHTML);

    if($(tpOffcanvasMenu).find('.sub-menu').length != 0){
        $(tpOffcanvasMenu).find('.sub-menu').parent().append('<button class="tp-sidemenu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    let tpSideMenuToggle = $('button.tp-sidemenu-close');

    $(tpSideMenuToggle).on('click',function(){
        $(this).siblings('.sub-menu').slideToggle();
        $(this).parent().toggleClass('active');
    });

    // FAQ
    $(".tp-faq-button").on('click',function(){
        $('.tp-faq-item').removeClass('active');
        $(this).closest('.tp-faq-item').addClass('active');
    });

    // offcanvas
    $(".tp-header-toogle").on('click',function(){
        $(".tp-offcanvas").addClass("tp-offcanvas-open");
        $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
    });

    $(".tp-offcanvas-close-button,.tp-offcanvas-overlay").on('click',function(){
        $(".tp-offcanvas").removeClass("tp-offcanvas-open");
        $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
    });

    // language-toggle
    $(".tp-lang-toggle").on('click',function(){
        $(".tp-lang-submenu").slideToggle();
    });

    // data bg img 
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")")
    })

    // data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // data color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    // data border color
    $("[data-border-color]").each(function () {
        $(this).css("border-color", $(this).attr("data-border-color"))
    })

    // data circle bar
    $("[data-circle-bar]").each(function () {
        $(this).css("background", $(this).attr("data-circle-bar"))
    })

    // Popup Image
    $('.popup-image').magnificPopup({
        type: 'image'
        // other options
    });
    
    // Popup Video
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

    // Hero Slider
    var swiper = new Swiper(".tp-slider-active", {
        slidesPerView: 1,
        effect: "fade",
        navigation: {
            prevEl: ".tp-slider-arrow-prev",
            nextEl: ".tp-slider-arrow-next",
        },
    });

    // Causes Slider
    var swiper = new Swiper(".tpcauses-slider-active", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            prevEl: ".tp-arrow-prev",
            nextEl: ".tp-arrow-next",
        },
        breakpoints: {
            300: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
        },
    });

    // Gallery Slider
    var swiper = new Swiper(".tpgallery-slider-active", {
        slidesPerView: 5,
        spaceBetween: 12,
        breakpoints: {
            300: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 5,
            },
        },
    });

    // Charity Slider
    var swiper = new Swiper(".tpcharity-slider-active", {
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
            prevEl: ".tp-arrow-prev",
            nextEl: ".tp-arrow-next",
        },
        breakpoints: {
            300: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
        },
    });

    // Testimonial Slider
    var swiper = new Swiper(".tptestimonial-slider-active", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            prevEl: ".tp-testimonial-arrow-prev",
            nextEl: ".tp-testimonial-arrow-next",
        },
    });

    // Brand Slider
    var swiper = new Swiper(".tpbrand-slider-active", {
        slidesPerView: 6,
        spaceBetween: 24,
        breakpoints: {
            300: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
        },
    });

    // tplpblog Slider
    var swiper = new Swiper(".tplpblog-slider-active", {
        slidesPerView: 3,
        spaceBetween: 24,
        breakpoints: {
            300: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
        },
    });

    // Text Slider
    var swiper_text = new Swiper(".tp-text-slider-active", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    $('.tp-text-slider-active').on('hover',function(){
        swiper_text.autoplay.stop();
    }, function(){
        swiper_text.autoplay.start();
    });

    // tplpblog Slider
    var swiper = new Swiper(".tplpblog-gallery-active", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            prevEl: ".tp-gallery-arrow-prev",
            nextEl: ".tp-gallery-arrow-next",
        },
    });

    // Wow js (style-01 main-class)
    if($('.wow').length) {
        function wowAnimation() {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true
            });
            wow.init();
        }

        windowOn.on('load', function () {
            wowAnimation();
        });
    };

    // // Wow js (style-02)
    // if($('.wow').length) {
    //     new WOW().init();
    // };

    // // Wow js (style-03)
    // new WOW().init();

    // isotope plugin & image loaded plugin active
    if($('.portfolio-grid').length) {
        var $grid = $('.portfolio-grid').imagesLoaded( function() {
            // - isotope
            $('.portfolio-grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: 1
                }
            })

            // filter items on button click - isotope
            $('.tp-portfolio-button').on( 'click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            $(".tp-portfolio-button button").on("click", function () {
                $(".tp-portfolio-button button").removeClass("active");
                $(this).addClass("active");
            });
        });
    };

    // elevate image zoom plugin active
    if($('#tp-zoom').length) {
        $("#tp-zoom").ezPlus();
    };

    // price range slider plugin active
    if($('#slider-range').length) {
        $( function() {
            $( "#slider-range" ).slider({
                range: true,
                min: 0,
                max: 500,
                values: [ 75, 300 ],
                slide: function( event, ui ) {
                    $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                }
            });
            $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
                " - $" + $( "#slider-range" ).slider( "values", 1 ) );
        } );
    };

    // CounterUp jQuary plugin
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

}) (jQuery);