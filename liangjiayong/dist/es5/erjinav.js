'use strict';

$(function () {
    // 使二级导航一直吸顶
    // console.log(111)
    var oldTop = $('.public-nav-layout').offset().top + $('.public-nav-layout').innerHeight();
    // console.log($('.public-nav-layout').offset().top + $('.public-nav-layout').innerHeight())
    $('.menu li').on('mouseover', function () {
        // console.log($(window).scrollTop(), oldTop)
        $(this).find('.cate-part').css('display', 'block');
        if ($(window).scrollTop() >= oldTop) {
            $('.cate-part').css('top', $(window).scrollTop() - oldTop);
        } else if ($(window).scrollTop() < oldTop) {
            $('.cate-part').css('top', 0);
        }
    });
    $('.menu li').on('mouseout', function () {
        // console.log($(this).find('.cate-part'))
        $(this).find('.cate-part').css('display', 'none');
    });
});