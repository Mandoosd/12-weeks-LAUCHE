$(function () {
    $('.tab_menu li a').on('click', function (e) {
        e.preventDefault();
        const idx = ($(this).parent().index())
        console.log(idx);//0, 1, 2
        $('.tab_content li').removeClass('on');
        $('.tab_content li').eq(idx).addClass('on');
        $('.tab_content li').eq(idx).addClass('on').siblings().removeClass('on');
    });


    $('.slide_wrap').slick({
        dots: true,
        arrows: false,
        pauseOnHover: false,
        autoplay: true,
    });
});


// 탭메뉴 js