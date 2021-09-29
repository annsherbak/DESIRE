$(function(){
    // десктопное выезжающее меню
    $('.header__button').on('click', function(){
        $('.rigthside-menu').removeClass('rigthside-menu--close')
    });
    $('.rigthside-menu__close').on('click', function(){
        $('.rigthside-menu').addClass('rigthside-menu--close')
    });

     // бургер меню 
    $('.header__button-menu').on('click', function(){
        $('.menu').toggleClass('menu--open')
    });


    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
    });
//слайдер на странице contact
    $('.prewiew-slider').slick({
        slidesToShow: 10,
        slidesToScroll:  10,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 8,
                slidesToScroll:  8,
              }
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 6,
                slidesToScroll:  6,
              }
              },
              {
                breakpoint: 1064,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll:  5,
                }
            },
            {
                breakpoint: 870,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll:  4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll:  3,
                }
            },
            {
                breakpoint: 540,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll:2,
                  dots:false,
                }
            },
          ]
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowLeft"> <img class="" src="images/back.svg" alt="back"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowRigth"> <img class="" src="images/next.svg" alt="back"></button>'
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });
    // условие для адаптива section 'works-path'
    if($(window).width() < 651) {
        $('.works-path__item--measurements').appendTo($('.works-path__items-box'));
    }
    })