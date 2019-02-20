$(function () {
    var pag = 1;
    var how = 0;
    showgoodslist(1, how);


    $('#topCategoryMenu').css('display', 'none');

    $('.all-category').on('mouseover', function () {
        $('#topCategoryMenu').css('display', 'block');
    })
    $('.all-category').on('mouseout', function () {
        $('#topCategoryMenu').css('display', 'none');
    })

    // 使二级导航一直吸顶
    // var oldTop = $('.public-nav-layout').offset().top + $('.public-nav-layout').innerHeight();
    // // console.log($('.public-nav-layout').offset().top + $('.public-nav-layout').innerHeight())
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

    //點擊提勾
    var okma = true;

    $('.gifts').on('click', function () {
        if (okma) {
            $(this).parent().addClass("bg-gift");
        } else if (!okma) {
            $(this).parent().removeClass("bg-gift");
        }
        okma = !okma;

    })

    //聚焦移出確定鍵
    $('.input-text').on('focus', function () {
        $(this).parent().parent().removeClass("fold");
        $(this).parent().parent().addClass('unfold');
    })




    //
    $('.screen').children().on('click', function () {
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
    })

    //吸頂
    // console.log($('#main-nav').offset().top)
    var navTop = $('#main-nav').offset().top;
    $(window).on('scroll', function () {
        // console.log($(window).scrollTop(), navTop)
        if ($(window).scrollTop() >= navTop) {
            $('#main-nav').addClass('nav-pin');
        } else if ($(window).scrollTop() < navTop) {
            $('#main-nav').removeClass('nav-pin');
        }
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
    //改变页数

    $('.pagination').find('li').on('click', function () {


        if ($(this).index() == 0) {
            pag = 1;
        } else if ($(this).index() == 8) {
            pag = 5;
        } else if ($(this).index() == 1) {
            pag--;
        } else if ($(this).index() == 7) {
            pag++;
        } else {
            pag = $(this).index() - 1;
        }

        if (pag <= 1) {
            pag = 1
        } else if (pag >= 5) {
            pag = 5
        }
        console.log(pag, how)
        showgoodslist(pag, how);
        // console.log($('.pageqty').find('span')[pag + 1]);

        $('.pageqty').find('span').removeClass('currentpage');
        $('.pageqty').find('span')[pag + 1].setAttribute('class', 'currentpage');



    })


    //改变how改变商品排列依据
    $('.screen li').on('click', function () {
        // console.log($(this).index());
        how = $(this).index();
        console.log(pag, how);
        showgoodslist(pag, how);
    })

    //按照pg页数，渲染数据

    function showgoodslist(pg, how) {
        $.ajax({
            type: "post", //请求方式
            url: "../api/pageqty.php", //路径
            async: true, //异步
            data: {
                page: pg,
                qty: 30,
                how: how
            }, //传输给后台的数据
            success: function (str) {
                var arr = JSON.parse(str);
                // console.log(arr["list"])
                var reg = '';

                for (var i = 0; i < arr["list"].length; i++) {
                    reg += `<li class="item" data-id="${arr["list"][i]["gid"]}">
                    <div class="goods-content" goods-item="">
                        <!--商品大图-->
                        <div class="goods-pic"> <a href="http://localhost:1811/liangjiayong/src/html/goods.html?goods=${arr["list"][i]["gid"]}" target="_blank" title="${arr["list"][i]["goods_name1"]}"> <img
                                    src="../${arr["list"][i]["list_pic"]}"
                                    nc-goods-pic="" title="${arr["list"][i]["goods_name1"]}" alt="${arr["list"][i]["goods_name1"]}"> </a> </div>

                        <!--商品详细信息-->
                        <div class="goods-info">
                            <div class="goods-price-deal offer-1">
                                <!--该商品如果是批发模式-->
                                <div class="goods-price-offer retail_goods_price"><span
                                        class="number number-20 number-thin sale-price" title=""><span
                                            class="yuan">￥</span><span class="integer">${arr["list"][i]["goods_price"]}</span></div>
                            </div>
                            <div class="p-name"><a href="http://localhost:1811/liangjiayong/src/html/goods.html?goods=${arr["list"][i]["gid"]}" target="_blank" title="">
                                    <em>
                                        <!-- 商品类型_Star -->
                                        <!--零售-->
                                        <!-- 商品类型_End -->
                                        ${arr["list"][i]["goods_name1"]}
                                        <i>${arr["list"][i]["goods_name2"]}</i>
                                    </em>
                                </a></div>
                            <div class="p-commit"><strong class="m-r-20"><a href="javascript:;" class="num"
                                        target="_blank" title="成交量">${arr["list"][i]["sales"]}</a> 笔成交</strong><strong class="m-r-10"><a
                                        href="javascript:;" class="num" style="color: #999" target="_blank"
                                        title="评论数">${arr["list"][i]["contents"]}</a> 条评论</strong></div>
                            <div class="p-shop"><span><a href="javascript:;" title="${arr["list"][i]["shop"]}" class="name">${arr["list"][i]["shop"]}</a></span></div>
                            <div class="p-icons"><i class="goods-icons">自营</i></div>
                            <!-- S 添加到购物车区域-->
                            <div class="p-operate" nc-shopping-box="">
                                <div class="p-o-btn focus" id="favoriteBtn5049"> <a href="javascript:;"
                                        nc_type="goodsFavoritesBtn" data-param="{'commonId':'5049'}"><i
                                            class="shop_common"></i>收藏</a> <a nc_type="favorited"
                                        style="display: none;"><span class="fa fa-star"
                                            style="font-size:16px; margin-right:4px; vertical-align:middle"></span>已收藏</a>
                                </div>
                                <!-- S 加入购物车等按钮区域-->
                                <div class="p-o-btn addcart">
                                    <a class="" href="javascript:;" nc-add-cart="" data-common-id="${arr["list"][i]["gid"]}"><i
                                            class="shopping-cart"></i>加入购物车</a>
                                </div>
                                <!-- E 加入购物车等按钮区域-->
                            </div>
                            <!-- S 添加到购物车区域-->

                        </div>
                    </div>
                    <div class="clear"></div>
                </li>`;
                }

                $('.list_pic').html(reg);

                listapp();
            }
        })
    }


    // $('.sortbydeal').on('click', function () {


    //     showgoodslist(1, 2);
    // })
    // $('.sortbyprice').on('click', function () {

    //     showgoodslist(1, 1);
    // })
    // $('.sortbycontents').on('click', function () {

    //     showgoodslist(1, 3);
    // })


    //小购物车显示数量
    listcartnum();
    function listcartnum() {
        checkloginid();
        if (checkloginid() > 0) {
            $('#tbarCartNum').css('display', 'block');
            $('.my-cart-count').css('display', 'block');
            $.ajax({
                type: "post", //请求方式
                url: "../api/getfromcart.php", //路径
                async: true, //异步
                data: {

                    what: 1
                }, //传输给后台的数据
                success: function (str) {
                    var arr = JSON.parse(str);

                    // console.log(arr.length)
                    $('#tbarCartNum').html(arr.length);
                    $('.my-cart-count').html(arr.length);
                }
            })
        } else {
            $('#tbarCartNum').css('display', 'none');
            $('.my-cart-count').css('display', 'none');
        }


    }





    function listapp() {
        $('.addcart').on('click', function () {
            // console.log($(this).find('a').attr('data-common-id'));
            checkloginid();
            if (checkloginid() > 0) {
                $.ajax({
                    type: "post", //请求方式
                    url: "../api/checkcart.php", //路径
                    async: true, //异步
                    data: {
                        gid: $(this).find('a').attr('data-common-id'),
                        num: 1
                    }, //传输给后台的数据
                    success: function (str) {
                        var arr = JSON.parse(str);
                        listcartnum();
                        alert(arr.message);

                    }
                })

            } else {
                location.href = 'http://localhost:1811/liangjiayong/src/html/login.html';

            }


        })





    }
    // console.log($('.pagination li')[2])


    // $('.item').on('click', function () {
    //     console.log($(this).attr('data-id'))
    // })

    function checkloginid() {
        var arr = document.cookie.split('; ');
        var str = new Object();
        // var islogin = true;
        for (var i = 0; i < arr.length; i++) {
            str[arr[i].split('=')[0]] = arr[i].split('=')[1];
        }
        // console.log(parseInt(str['id']));
        return parseInt(str['id']);
    }
    $('#topMyCart').on('click', function () {
        checkloginid();
        if (checkloginid() > 0) {
            location.href = 'http://localhost:1811/liangjiayong/src/html/cart.html';
        } else {
            location.href = 'http://localhost:1811/liangjiayong/src/html/login.html';

        }
    })





})