$(document).ready(function() {

    /*slider*/
    $('.home-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        dotsClass: "my-dots",
        arrows: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        cssEase: 'linear',
        fade: true,
        responsive: [
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    fade: false
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    fade: false
                }
            }
        ]

    });

    $('.objects-slider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.realty-slider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.workers-slider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.stock-slider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: true
    });

    $(".header-menu_mobile--menu").click(function(event) {
        event.preventDefault();
        $('.header-menu').toggleClass('is-visible');
    });

    $(".menu_mobile-back").click(function(event) {
        event.preventDefault();
        $('.header-menu').removeClass('is-visible');
        $('.footer-menu').removeClass('is-visible');
    });

    $(".footer-menu_mobile").click(function(event) {
        event.preventDefault();
        $('.footer-menu').toggleClass('is-visible');
    });

    $(".search_btn-filter").click(function(event) {
        event.preventDefault();
        $('.search-object').toggleClass('is-visible');
    });

    $(".search_btn-turn").click(function(event) {
        event.preventDefault();
        $('.search-object').toggleClass('is-visible');
    });

    /*popup заявка*/
    $(".popup_btn-request").click(function(event) {
        event.preventDefault();
        $('.popup_request').toggleClass('popup-show');
        $('.popup_bg').toggleClass('is-visible');
        $('body').toggleClass('body-popup');
    });

    /*popup call*/
    $(".popup_btn-call").click(function(event) {
        event.preventDefault();
        $('.popup_call').toggleClass('popup-show');
        $('.popup_bg').toggleClass('is-visible');
        $('body').toggleClass('body-popup');
    });
     $(".header-menu_mobile--phone").click(function(event) {
        event.preventDefault();
        $('.popup_call').toggleClass('popup-show');
        $('.popup_bg').toggleClass('is-visible');
        $('body').toggleClass('body-popup');
    });

    /*********************************/
    /*Ваша заявка отправлена*/
    $(".popup-sent_close").click(function(event) {
        event.preventDefault();
        $('.popup-sent').toggleClass('popup-show');
        $('.popup_bg').toggleClass('is-visible');
        $('body').toggleClass('body-popup');
    });

    /*********************************/
    /*popup mail*/
    $(".popup_btn-mail").click(function(event) {
        event.preventDefault();
        $('.popup_mail').toggleClass('popup-show');
        $('.popup_bg').toggleClass('is-visible');
        $('body').toggleClass('body-popup');
    });
    $(".header-menu_mobile--mail").click(function(event) {
        event.preventDefault();
        $('.popup_mail').toggleClass('popup-show');
        $('.popup_bg').toggleClass('is-visible');
        $('body').toggleClass('body-popup');
    });

    $(".popup_bg").click(function(event) {
        event.preventDefault();
        $('.popup').removeClass('popup-show');
        $(this).toggleClass('is-visible');
        $('body').removeClass('body-popup');
    });

    $(".popup_back").click(function(event) {
        event.preventDefault();
        $('.popup').removeClass('popup-show');
        $('.popup_bg').toggleClass('is-visible');
        $('body').removeClass('body-popup');
    });

    $('.c-tabs').basicTabs();
    $('.c-tabs').basicTabs({
        list_class: "c-tabs_more",
        starting_tab: 2
    });

    $('.phone-mask').mask('+7(000)000-00-00');
    $('.mail-mask').mask('+7(000)000-00-00');

    //кнопка вверх
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0
            }, scroll_top_duration
        );
    });

    /*
  $(window).scroll(function(){
      var bo = $("body").scrollTop();
      // $('#hid').text(bo);
      if ( bo > 20 ) {
        $(".l-header").css({
          "box-shadow": "0 7px 7px rgba(0, 0, 0, 0.08)",
          "position": "fixed"
        });
      } else {
        $(".l-header").css({
          "box-shadow": "none",
          "position": "absolute"
        });
      };
  })
*/

    $('.SlectBox').SumoSelect({
        placeholder: 'This is a placeholder',
        csvDispCount: 3
    });

    $('.testSelAll2').SumoSelect({
        selectAll:true
    });



    /*простые табы*/
    // $(document).on('click', '.c-tabs-menu a', function(event) {
    //     event.preventDefault();
    //     $(this).parent().addClass("current");
    //     $(this).parent().siblings().removeClass("current");
    //     var tab = $(this).attr("href");
    //     $(this).parents('.c-tabs-menu').siblings('.c-tabs-content').find(".c-tabs-content__item").not(tab, '.c-tabs-content .c-tabs-content' + tab).css("display", "none");
    //     $(tab).fadeIn();
    // });

    /*простые табы*/
    $(document).on('click', '.c-tabs-v2-menu a', function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(this).parents('.c-tabs-v2-menu').siblings('.c-tabs-v2-content').find(".c-tabs-v2-content__item").not(tab, '.c-tabs-content .c-tabs-content' + tab).css("display", "none");
        $(tab).fadeIn();
    });

    $('.building-card__body').slideUp(300);
    $('.building-card__header').on('click', function(){
        $(this).siblings('.building-card__body').slideToggle(300);
        $(this).toggleClass('active');
    });

    
    /*модальное окно в карте инфраструктура*/
    $('.infrastructure-object img').on('click', function(){
        $('.infrastructure-object').find('.object-popup').removeClass('is-show');
        $(this).parents('.infrastructure-object').find('.object-popup').addClass('is-show');
    });

    $('.object-popup__close').on('click', function(e){
        e.preventDefault();
        console.log('click');
        $(this).parents('.object-popup').removeClass('is-show');
    });

});

lightGallery(document.getElementById('anchor-tag'));
