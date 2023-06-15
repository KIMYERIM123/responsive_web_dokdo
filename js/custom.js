$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() - 300 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    })

    //const mainSlide = $('.main_slide').slick({});
    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        speed: 2000,
        parallax: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',

    });

    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });

    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });



    const noticeSlide = new Swiper('.notice_slide', {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,

    });

    $('.main_notice .arrows .left').on('click', function () {
        noticeSlide.slidePrev();
    });

    $('.main_notice .arrows .right').on('click', function () {
        noticeSlide.slideNext();
    });

})