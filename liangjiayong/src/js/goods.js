$(function () {

















    $('#topCategoryMenu').css('display', 'none');

    $('.all-category').on('mouseover', function () {
        $('#topCategoryMenu').css('display', 'block');
    })
    $('.all-category').on('mouseout', function () {
        $('#topCategoryMenu').css('display', 'none');
    })



    //足迹前后键
    $('#goodsBrowseContent').on('mouseover', function () {
        $('.bx-prev').css('display', 'inline');
        $('.bx-next').css('display', 'inline');
    })
    $('#goodsBrowseContent').on('mouseout', function () {
        $('.bx-prev').css('display', 'none');
        $('.bx-next').css('display', 'none');
    })

    //  nav
    //使二级导航一直吸顶
    // var oldTop = $('#topCategoryMenu').offset().top;
    // console.log(oldTop)
    // $('.menu li').on('mouseover', function () {
    //     // console.log($(window).scrollTop(), oldTop)
    //     $(this).find('.cate-part').css('display', 'block');
    //     if ($(window).scrollTop() >= oldTop) {
    //         $('.cate-part').css('top', $(window).scrollTop() - oldTop)
    //     } else if ($(window).scrollTop() < oldTop) {
    //         $('.cate-part').css('top', 0)
    //     }
    // })
    // $('.menu li').on('mouseout', function () {
    //     // console.log($(this).find('.cate-part'))
    //     $(this).find('.cate-part').css('display', 'none');
    // })


    //  nav
    // 使二级导航一直吸顶
    var oldTop = $('.public-nav-layout').offset().top + $('.public-nav-layout').innerHeight();
    // console.log($('.public-nav-layout').offset().top + $('.public-nav-layout').innerHeight())
    $('.menu li').on('mouseover', function () {
        // console.log($(window).scrollTop(), oldTop)
        $(this).find('.cate-part').css('display', 'block');
        if ($(window).scrollTop() >= oldTop) {
            $('.cate-part').css('top', $(window).scrollTop() - oldTop)
        } else if ($(window).scrollTop() < oldTop) {
            $('.cate-part').css('top', 0)
        }
    })
    $('.menu li').on('mouseout', function () {
        // console.log($(this).find('.cate-part'))
        $(this).find('.cate-part').css('display', 'none');
    })




    //
    $('#categoryMenu').children().on('click', function () {
        $(this).siblings().removeClass('current')
        $(this).addClass('current');
    })

    //吸顶
    var SW = $('#main-nav-holder').offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= SW) {
            $('#main-nav').addClass('nav-goods-pin');
        } else if ($(window).scrollTop() < SW) {
            $('#main-nav').removeClass('nav-goods-pin');
        }
    })

    //
    $('#comment_tab').children().on('click', function () {
        $(this).siblings().removeClass('current')
        $(this).addClass('current');
    })

    //放大镜
    // console.log($('#ncsGoodsPicList').children().children())
    // console.log($('#ncsGoodsPicList').find('a'))
    $('#ncsGoodsPicList').find('a').on('mouseover', function () {

        //小图片加框
        $('#ncsGoodsPicList').find('a').removeClass('current')
        $(this).addClass('current');

        //小图片找大图片
        var newNum = $(this).parent().index() + 1;
        $('#Zoomer').find('img').attr('src', '../images/fangda_middle' + newNum + '.jpg')
        $('#fangda_big').find('img').attr('src', '../images/fangda_big.jpg')
    })



    $('#Zoomer').on('mouseover', function () {

        $('.MagicZoomBigImageCont').css('top', '0');
        $('.MagicZoomPup').css({
            display: 'block',
            visibility: 'visible'
        });
    })
    $('#Zoomer').on('mouseout', function () {
        $('.MagicZoomBigImageCont').css('top', '-10000px');
        $('.MagicZoomPup').css({
            display: 'none',
            visibility: 'hidden'
        });
    })

    var span = $('.MagicZoomPup').get(0);
    var img1 = $('#Zoomer').find('img').eq(0).get(0);
    var img2 = $('.MagicZoomBigImageCont img').get(0);
    var box = $('#Zoomer').get(0);
    var box2 = $('.MagicZoomBigImageCont').get(0);


    function fangda() {
        var sL = span.offsetLeft;
        var sT = span.offsetTop;

        var iW2 = img2.offsetWidth;
        var iH2 = img2.offsetHeight;

        var percentX = (img1.offsetWidth - span.offsetWidth) / (iW2 - box2.offsetWidth);
        var percentY = (img1.offsetHeight - span.offsetHeight) / (iH2 - box2.offsetHeight);

        // img2.css('left', - sL / percentX + 'px');
        // img2.css('top', -sT / percentY + 'px');
        img2.style.left = - sL / percentX + 'px';
        img2.style.top = -sT / percentY + 'px';
    }
    fangda();
    box.onmouseover = function (ev) {
        // span.style.display = 'block';
        // box2.style.display = 'block'
        // var disX = ev.clientX - span.offsetLeft;
        // var disY = ev.clientY - span.offsetTop;

        box.onmousemove = function (ev) {
            var ev = ev || window.event;
            //重新计算left和top

            var left = ev.clientX - span.offsetWidth / 2 - box.offsetLeft;
            var top = ev.pageY - box.offsetHeight;
            // span.style.left = ev.clientX - 20 + 'px';
            // span.style.top = ev.clientY - 50 - 20 + 'px';


            //限制span的运动区域
            if (left <= 0) {
                left = 0
            } else if (left >= img1.offsetWidth - span.offsetWidth) {
                left = img1.offsetWidth - span.offsetWidth;
            }
            if (top <= 0) {
                top = 0
            } else if (top >= img1.offsetHeight - span.offsetHeight) {
                top = img1.offsetHeight - span.offsetHeight;
            }
            // span.css('left', left + 'px');
            // span.css('top', top + 'px');

            span.style.left = left + 'px';
            span.style.top = top + 'px';
            fangda();
        }

    }
    box.onmouseout = function () {
        // span.style.display = 'none';
        // box2.style.display = 'none';
    }























})