$(function () {

    //跳转到登录前浏览的页面，若直接登录，跳转到首页
    // var href1 = location.href;
    // console.log(href1)














    //检查登录状态
    function checklogin() {
        var arr = document.cookie.split('; ');
        var str = new Object();
        // var islogin = true;
        for (var i = 0; i < arr.length; i++) {
            str[arr[i].split('=')[0]] = arr[i].split('=')[1];
        }
        // console.log(str["id"] * 1)
        if (str["id"] * 1) {
            $('.login').html(` <dt class="top-menu-title"> <a target="_blank" href="/member/">${str["name"]} <sub
                        title="会员等级">暂无等级会员</sub></a><span class="arrow"></span></dt>
                <dd class="top-menu-con">
                <div class="user-box">
                    <div class="user-avatar"><img
                            src="https://statics.cnrmall.com/public/img/avatar.gif@160w_160h"></div>
                    <div class="user-info">
                        <p>上次登录：
                            <time>2019-02-12 21:31:11</time>
                        </p>
                        <a href="">退出</a>
                    </div>
    
                </div>
                </dd>`)
        } else {
            $('.login').html(`<dt class="top-menu-title normal"><a href="http://localhost:1811/liangjiayong/src/html/login.html" class="login-link">您好，请登录</a> <a
            href="http://localhost:1811/liangjiayong/src/html/register.html">免费注册</a></dt>`)


        }
    }
    checklogin();


    //退出登录
    $('.user-info').find('a').on('click', function () {

        document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    })






    //顶部二级导航
    $('.top-menu').on('mouseover', function () {
        // console.log(this)
        $(this).addClass("hover");
    });
    $('.top-menu').on('mouseout', function () {
        $(this).removeClass("hover");
    });

    $('#keyword').on('focus', function () {
        $('#search-tip').css('display', 'block')
    })
    $('#keyword').on('blur', function () {
        $('#search-tip').css('display', 'none')
    })





    //orange
    var css = {
        width: '160',
        height: '160',
        left: '-70',
        top: ''
    };

    function show() {
        $('#special_img').animate(css, 1000, function () {
            css.top = -101;
        }).animate(css, 1000, function () {
            css.left = 0;
        }).animate(css, 1000, function () {
            css.top = 0;
        }).animate(css, 1000, function () {
            css.width = 90;
            css.height = 59;
        }).animate(css, 1000, function () {
            css.width = 160;
            css.height = 160;
            css.left = -70;
            show();
        })
    }
    show();
    //倒计时
    function getLeftTime() {
        var newT = new Date('2019-03-01');
        var oldT = new Date();
        var cutTime = parseInt((newT - oldT) / 1000);
        $('.h').html(setTime(cutTime).hours);
        $('.m').html(setTime(cutTime).mins);
        $('.s').html(setTime(cutTime).secs);
    }

    getLeftTime();
    setInterval(getLeftTime, 1000);

    //轮播图
    // console.log($('#homeSeckill li'))
    // ul的宽度：图片的宽度*图片个数
    var wNum = $('#homeSeckill li').size() * $('#homeSeckill li').eq(0).outerWidth();
    $('#homeSeckill').css('width', wNum);
    var iW = $('#homeSeckill li').eq(0).outerWidth() * 6;//运动距离
    var isok = true;

    function next() {
        isok = false;
        $('#homeSeckill').stop().animate({ 'left': -iW }, 1000, function () {
            //出去的图片，剪切放到末尾
            $('#homeSeckill li:lt(6)').insertAfter($('#homeSeckill li:last'));
            //ul归位
            isok = true;
            $('#homeSeckill').css('left', 0);
        });
    }

    function prev() {
        //先剪切最后的6个图插入到ul首位
        // for (var i = 0; i < 6; i++) {
        //     $('#ul li:last').insertBefore($('#ul li:first'));
        // }
        $('#homeSeckill li:gt(11)').insertBefore($('#homeSeckill li:first'));
        //预留6个图位置
        $('#homeSeckill').css('left', -iW);
        //挪到可视区
        isok = false;
        $('#homeSeckill').stop().animate({ 'left': 0 }, 1000, function () {
            isok = true;
        });
    }
    //点击切换下一页：6张图
    //防止连续点击

    $('.bx-next').click(function (e) {
        e.preventDefault();
        if (isok) {
            next();
        };
    });
    var old = new Date();
    $('.bx-prev').click(function () {
        if (isok) {
            prev();
        }
        // if (new Date() - old > 300) {
        //     prev();
        // }
        // old = new Date();
    });
    $('.seckill-content').mouseenter(function () {
        $('.bx-prev').css('display', 'block');
        $('.bx-next').css('display', 'block');
    });
    $('.seckill-content').mouseleave(function () {
        // console.log(111)
        $('.bx-prev').css('display', 'none');
        $('.bx-next').css('display', 'none');
    });


    //鼠标滑过，图片横移

    // $('.bz-more-img').on('mouseover', function () {
    //     $(this).animate({ 'transform': 'translateX(-10px)' }, 1000)
    // })

    //悬浮弹出

    var oldNum = null;

    $('.nc-toolbar-tabs').on('click', '.nc-toolbar-tab', function () {
        //只要悬浮窗缩在右侧，点击必定弹出
        if ($('.nc-toolbar').css('right') == '0px') {
            $('.nc-toolbar').css('right', 270);
        } else if ($('.nc-toolbar').css('right') == '270px') {
            //如果已弹出，则视下一次按键决定是否缩回
            if (oldNum != $(this).index()) {
                $('.nc-toolbar').css('right', 270);
            } else if (oldNum == $(this).index()) {
                $('.nc-toolbar').css('right', 0);
            }
        }

        $('.nc-toolbar-panel').css({ 'visibility': 'hidden', 'z-index': 1 });
        $('.nc-toolbar-panel').eq($(this).index()).css({ 'visibility': 'visible', 'z-index': 2 });

        oldNum = $(this).index();
    });

    //悬浮窗缩回
    $('.close-panel').on('click', function () {
        $('.nc-toolbar').css('right', 0);
    })


    //回到顶部
    $('.nc-tbar-tab-top').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
        return false;
    });

    $('.nc-toolbar-tab').on('mouseover', function () {
        // console.log($(this).find('.tab-text'))
        $(this).find('.tab-text').css({
            left: '-60px',
            backgroundColor: '#c81623'
        })
        $(this).find('.tab-ico').css('backgroundColor', '#c81623');
        $(this).find('.tab-sub').css({
            color: '#c81623',
            backgroundColor: '#fff'
        })

    })
    $('.nc-toolbar-tab').on('mouseout', function () {
        // console.log($(this).find('.tab-text'))
        $(this).find('.tab-text').css({
            left: '0',
            backgroundColor: ''
        });
        $(this).find('.tab-ico').css('backgroundColor', '');
        $(this).find('.tab-sub').css({
            color: '#fff',
            backgroundColor: '#c81623'
        })
    })

















})
