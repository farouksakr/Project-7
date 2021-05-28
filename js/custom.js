$(document).ready(function () {

    // loading page 

    $(window).on('load', function() {

        $('.loading').fadeOut(2000)

    });

    // nice scroll

    $('body').niceScroll({

        cursorcolor : '#ff275e',
        cursorwidth : '8px',
        cursorborder : '0',
        zindex : '99999'
    });

    // header height

    $('.header').height($(window).height());

    $(window).resize(function () {

        $('.header').height($(window).height());

    });

    // navbar color

    $(window).scroll(function () {

        if ($(window).scrollTop() >= 150) {

            $('nav').css({
                'backgroundColor': '#020711',
                'padding': '12px 0',
                'box-shadow': '8px 0 5px #000'
            })

        } else {

            $('nav').css({
                'backgroundColor': 'transparent',
                'padding': '20px',
                'box-shadow': 'none'
            })

        }

    });

    if ($(window).scrollTop() >= 150) {

        $('nav').css({
            'backgroundColor': '#020711',
            'padding': '12px 0',
            'box-shadow': '8px 0 5px #000'
        })

    } else {

        $('nav').css({
            'backgroundColor': 'transparent',
            'padding': '20px',
            'box-shadow': 'none'
        })

    };

    // create smoth scroll

    $('nav li a').on('click', function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top - 80

        }, 1000)

    // add active class to links

        $(this).addClass('active').parent().siblings().find('a').removeClass('active');

    });

    $(window).scroll(function () {

        $('section').each(function () {

            if ($(window).scrollTop() + 100 >= $(this).offset().top) {

                var secID = $(this).attr('id');

                $('nav li a').removeClass('active');

                $('nav li a[data-scroll="' + secID + '"]').addClass('active');

            }

        });

        // hide and show button up

        if ( $(window).scrollTop() >= 1000 ) {

            $('.up').fadeIn(800)

        } else {

            $('.up').fadeOut(800)

        }

    });

    // click on button to scroll up

    $('.up').on('click', function() {

        $('html, body').animate({

            scrollTop : 0

        }, 1000)

    });

    // swiper

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
  
});