$(function () {
    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.header').addClass('on')

        } else {
            $('.header').removeClass('on')
            $('.header_tab').removeClass('on')
        }
    });

    $('.tab').on('click', function () {
        $('.header_tab').toggleClass('on');
        $(this).toggleClass('on');
    });

    $('.header_tab .tab_list ul').on('click', function () {
        $(this).toggleClass('on');
    });


    $('.tab_menu li .menu_txt').on('click', function (e) {
        e.preventDefault();
        const idx = ($(this).parent().index())
        console.log(idx);//0, 1, 2
        $(this).parent().addClass('on').siblings().removeClass('on');
        $('.tab_content li').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.slide_wrap').slick({
        dots: true,
        arrows: false,
        pauseOnHover: false,
        autoplay: true,
    });

    $('.tab_menu li a').on('click', function () {
        let H = $('.main_tab').offset().top;
        $('html,body').animate({ scrollTop: H - 50 }, 300)
    })
    // width 변경시 값 변경필요


});


