
$(function () {

    //退出登录
    // $('.user-info').on('click', function () {
    //     document.cookie = 'id=' + ';path=/';
    //     document.cookie = 'name=' + ';path=/';
    // })

    function checkcart() {
        $.ajax({
            type: "post", //请求方式
            url: "../api/getfromcart.php", //路径
            async: true, //异步
            data: {
                what: 1
            }, //传输给后台的数据
            success: function (str) {
                var arr = JSON.parse(str);
                console.log(arr.length)
                if (arr.length == 0) {
                    // console.log($('.ncc-null-shopping').html() != '')
                    if ($('.ncc-null-shopping').length > 0) {
                        reg = ``;


                    } else {

                        $('.ncc-main').html('');
                        var reg = `<div class="ncc-null-shopping"><i class="ico"></i>
                    <h4>您的购物车还没有商品</h4>
                    <p><a class="btn btn-sm btn-success m-r-10" href="http://localhost:1811/liangjiayong/src/ind.html"><i class="fa fa-reply-all"></i>马上去购物</a> <a class="btn btn-sm btn-default" href="/member/orders/list"><i class="fa fa-file-text"></i>查看自己的订单</a></p>
                    <span style="color:#ffffff;position: absolute;">www.cnrmall.com</span></div>`;
                    }
                    $('.ncc-head-wrap ').after(reg);




                } else {
                    if ($('.ncc-main').html() != '') {
                        reg2 = ``;
                    }
                    else {
                        var reg2 = `<div class="ncc-main">
                        <div class="ncc-title ncc-wrapper">
                            <h3>我的购物车</h3>
                            <h5>查看购物车中所添加的商品；增加减少数量、并勾选确认想要购买的商品进入下一步操作。</h5>
                        </div>
                        <div class="ncc-cart-status">购物车状态：<span class="bar"><span class="sub" id="buyMaxTopPanel" data-max="50"
                                    style="width: 4px;"></span></span><span class="sum" id="buyTopSumPanel">2/50（线上：2，门店：0）</span></div>
                        <form action="/buy" method="POST" id="form_buy" name="form_buy">
                            <input type="hidden" value="1" name="isCart">
                            <input type="hidden" name="buyData" id="buyDataInput" value="">
                            <input type="hidden" name="isExistBundling" id="isExistBundlingInput" value="0">
                            <div class="ncc-wrapper">
                                <div id="normalGoodsList">
                                    <div class="ncc-mod-thead">
                                        <ul class="columns">
                                            <li class="col-opt"><span class="checkbox-layout">
                                                    <label><input type="checkbox" class="checkbox" id="checkedAllBtn"
                                                            autocomplete="off">全选</label>
                                                </span></li>
                                            <li class="col-goods">商品</li>
                                            <li class="col-quantity">数量</li>
                                            <li class="col-unitprice">单价</li>
                                            <li class="col-rebate">优惠</li>
                                            <li class="col-amount">金额</li>
                                        </ul>
                                    </div>

                                    <div class="ncc-mod-tbody" id="modTbody_1">
                                        <div class="store-bar">
                                            <div class="fl"> <span class="checkbox-layout">
                                                    <input type="checkbox" class="checkbox J-store-all-check" data-store-all-check="1"
                                                        autocomplete="off" id="storeAllCheck_1">
                                                    <label></label>
                                                </span><a class="store-name" href="/store/1">官方店铺</a>
                                            </div>
                                            <div class="fr"> </div>
                                        </div>

                                    </div>
                                    <div class="ncc-mod-tbody" id="modTbody_28">
                                        <div class="store-bar">
                                            <div class="fl"> <span class="checkbox-layout">
                                                    <input type="checkbox" class="checkbox J-store-all-check" data-store-all-check="28"
                                                        autocomplete="off" id="storeAllCheck_28">
                                                    <label></label>
                                                </span><a class="store-name" href="/store/28">中国农垦官方旗舰店</a>
                                            </div>
                                            <div class="fr"> </div>
                                        </div>

                                    </div>

                                    <div id="modTfootPanelShow">
                                        <div class="ncc-mod-tfoot " id="modTfootPanel">
                                            <div id="disableBuyTips" class="group-wrapper group-popup hidden">
                                                <div id="J_SelectedItemsList" class="group-content">
                                                    <div class="group-top-title">
                                                        <p>请分开结算以下商品</p>
                                                        <span id="J_group_close_btn" class="group-close-btn"></span>
                                                    </div>
                                                    <div class="groups-list" id="disableBuyTipsGoodsList"></div>
                                                </div><span class="arrow"></span>
                                            </div>
                                            <div class="actions"><span class="checkbox-layout">

                                                    <label for="checkedAllBottomBtn"><input type="checkbox" class="checkbox"
                                                            id="checkedAllBottomBtn" autocomplete="off">全选</label>
                                                </span> <a href="javascript:;" class="delete-checked" id="mDelSkuBtn">删除</a> </div>
                                            <div class="summary">
                                                <dl>
                                                    <dt>选购商品种类：</dt>
                                                    <dd class="kinds-total"><span class="value" id="kindsTotal">0</span>种</dd>
                                                    <dt>选购数量总计：</dt>
                                                    <dd class="quantity-total"><span class="value" id="quantityTotal">0</span>件</dd>
                                                    <dt>商品金额总计：</dt>
                                                    <dd class="amount-total"><strong class="value" id="amountTotal">
                                                            <span class="yuan">￥</span><span class="integer">0</span><span
                                                                class="pointer">.</span><span class="decimal">00</span>
                                                        </strong></dd>
                                                </dl>
                                            </div>
                                            <div class="form">
                                                <button id="cartSubmit" class="checkout checkout-disabled">结算</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>`;
                        $('.ncc-head-wrap ').after(reg2);
                    }


                }

                showgoods(str);
                plusorminus();

            }
        });




    }
    function showgoods(str) {
        var arr = JSON.parse(str);
        // console.log(arr[3])
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]['shop'] == '官方店铺') {
                var arr1 = arr[i];
                var totalprice = arr1['counts'] * arr1['goods_price'];
                // console.log(totalprice)

                var reg1 = `<div class="goods-zone"  data-id="${arr1['gid']}">
                <div class="mask-layer"><span class="top"></span><span class="right"></span><span
                        class="bottom"></span><span class="left"></span></div>
                <div class="fl m-r-5"><span class="checkbox-layout fcheckbox">
                        <input type="checkbox" class="checkbox J-spu-checkbox" 
                            data-spu-checkbox="${arr1['gid']}" data-goods-modal="1" data-spu-store-id="1"
                            autocomplete="off" data-is-chain="0" data-is-virtual="0" data-is-foreign="0"
                            data-img="../images/cart1.jpg" data-goods-name="汾酒100年汾藏1989珍藏组 货号123478"
                            data-real-common-id="0" data-goods-type="0">
                        <label></label>
                    </span> </div>
                <div class="goods-img">
                    <div class="img-vertical"><a target="_blank" href="/goods/5812"><img
                                src="../${arr1['list_pic']}" alt=""
                                style="max-width:100%; max-height:100%"></a></div>
                </div>
                <div class="goods-main">
                    <div class="spu-name"><span class="tag tag1"></span><a href="/goods/5812"
                            target="_blank">${arr1['goods_name1']}</a>
                        <div class="attributes"> </div>
                    </div>

                    <div class="panel-remove"> <a
                            class="icon-delete" href="javascript:;" title="删除该商品" data-delete="${arr1['gid']}"><i class="fa fa-trash-o"
                                aria-hidden="true"></i></a></div>
                    <div class="panel-modify"><a href="javascript:;" data-mod-id="5812"><i
                                class="fa fa-pencil" aria-hidden="true"></i><span
                                data-spu-mod="">修改</span></a></div>
                    <table class="spu-singles">
                        <tbody>
                            <tr class="goods-sku" id="goodsSkuPanel_9451" data-goods-spu="5812"
                                data-sku-id="9451" data-cart-id="722" data-goods-modal="1"
                                data-goods-type="normal" data-goods-web-usable="0" data-web-price0="698.00"
                                data-web-price1="0.00" data-web-price2="0.00" data-goods-price0="698"
                                data-goods-price1="0" data-goods-price2="0" data-is-spec="0"
                                data-goods-storage="13" data-buy-limit="10" data-unit-name="组"
                                data-chain-id="0" data-is-chain="0">
                                <td>&nbsp;</td>
                                <td class="sku-opt"> </td>
                                <td class="sku-primary"></td>
                                <td class="sku-quantity">
                                    <div class="sku-quantity-block clearfix"><a href="javascript:;"
                                            class="minus " title="减少" data-id="${arr1['gid']}"><i class="fa fa-minus"
                                                aria-hidden="true">-</i></a>
                                        <input type="text" class="input-text" value="${arr1['counts']}"
                                            id="buynum_${arr1['gid']}" autocomplete="off">
                                        <a href="javascript:;" class="plus " title="增加" data-id="${arr1['gid']}" data-limit="${arr1['buy_limit']}"><i
                                                class="fa fa-plus" aria-hidden="true">+</i></a> <span
                                            class="text-warning"></span></div>
                                </td>
                                <td class="sku-delete"><a href="javascript:;" title="删除"
                                        data-goods-spec-del="722"><i class="fa fa-trash-o"
                                            aria-hidden="true"></i></a></td>
                                <td class="sku-unitprice">
                                    <span class="number number-thin" id="singleprice_${arr1['gid']}">
                                        <span class="yuan">￥</span><span class="integer">${arr1['goods_price']}</span>
                                    </span>
                                </td>
                                <td class="sku-rebate"> </td>
                                <td class="sku-amount">
                                    <div class="sku-amount-block"><em id="totalprice_${arr1['gid']}"
                                            class="number number-14">
                                            <span class="yuan">￥</span><span
                                                class="integer">${totalprice}</span><span
                                                class="pointer">.</span><span class="decimal">00</span>
                                        </em></div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>`;

                $('#modTbody_1').append(reg1);
            }
            else if (arr[i]['shop'] == "中国农垦官方旗舰店") {
                var arr2 = arr[i];
                var totalprice2 = arr2['counts'] * arr2['goods_price'];

                var reg2 = `<div class="goods-zone" data-id="${arr2['gid']}" >
                <div class="mask-layer"><span class="top"></span><span class="right"></span><span
                        class="bottom"></span><span class="left"></span></div>
                <div class="fl m-r-5"><span class="checkbox-layout scheckbox">
                        <input type="checkbox" class="checkbox J-spu-checkbox" 
                            data-spu-checkbox="12366" data-goods-modal="1" data-spu-store-id="28"
                            autocomplete="off" data-is-chain="0" data-is-virtual="0" data-is-foreign="0"
                            data-img="https://pic5.cnrmall.com/image/80/76/8076686a49f04adba415a06f6def9223.jpg@160w_160h"
                            data-goods-name="方家铺子 黑枸杞  青海黑枸杞 50g*5瓶" data-real-common-id="0"
                            data-goods-type="0">
                        <label></label>
                    </span> </div>
                <div class="goods-img">
                    <div class="img-vertical"><a target="_blank" href="/goods/12366"><img
                                src="../${arr2['list_pic']}"
                                alt="" style="max-width:100%; max-height:100%"></a></div>
                </div>
                <div class="goods-main">
                    <div class="spu-name"><span class="tag tag1"></span><a href="/goods/12366"
                            target="_blank">${arr2['goods_name1']}</a>
                        <div class="attributes"> </div>
                    </div>

                    <div class="panel-remove"> <a
                            class="icon-delete" href="javascript:;" title="删除该商品" ${arr2['gid']}><i class="fa fa-trash-o"
                                aria-hidden="true"></i></a></div>
                    <div class="panel-modify"><a href="javascript:;" data-mod-id="12366"><i
                                class="fa fa-pencil" aria-hidden="true"></i><span
                                data-spu-mod="">修改</span></a></div>
                    <table class="spu-singles">
                        <tbody>
                            <tr class="goods-sku" id="goodsSkuPanel_12821" data-goods-spu="12366"
                                data-sku-id="12821" data-cart-id="726" data-goods-modal="1"
                                data-goods-type="normal" data-goods-web-usable="0" data-web-price0="139.00"
                                data-web-price1="0.00" data-web-price2="0.00" data-goods-price0="139"
                                data-goods-price1="0" data-goods-price2="0" data-is-spec="1"
                                data-goods-storage="200" data-buy-limit="0" data-unit-name=""
                                data-chain-id="0" data-is-chain="0">
                                <td>&nbsp;</td>
                                <td class="sku-opt"> <span class="checkbox-layout">
                                        <input class="J-sku-checkbox" autocomplete="off" type="checkbox"
                                            data-sku-checkbox="12821" data-sku-amount="0" data-sku-num="0"
                                            data-target="spuCheckBox_12366" data-is-chain="0"
                                            data-is-virtual="0" data-is-foreign="0" data-goods-type="0">
                                        <label></label>
                                    </span> </td>
                                <td class="sku-primary">颜色：共同 </td>
                                <td class="sku-quantity">
                                    <div class="sku-quantity-block clearfix"><a href="javascript:;"
                                            class="minus " title="减少" data-id="${arr2['gid']}"><i class="fa fa-minus"
                                                aria-hidden="true">-</i></a>
                                        <input type="text" class="input-text" value="${arr2['counts']}"
                                            id="buynum_${arr2['gid']}" autocomplete="off">
                                        <a href="javascript:;" class="plus " title="增加" data-id="${arr2['gid']}" data-limit="${arr2['buy_limit']}"><i
                                                class="fa fa-plus" aria-hidden="true">+</i></a> <span
                                            class="text-warning"></span></div>
                                </td>
                                <td class="sku-delete"><a href="javascript:;" title="删除"
                                        data-goods-spec-del="726"><i class="fa fa-trash-o"
                                            aria-hidden="true"></i></a></td>
                                <td class="sku-unitprice">
                                    <span class="number number-thin" id="singleprice_${arr2['gid']}">
                                        <span class="yuan">￥</span><span class="integer">${arr2['goods_price']}</span>
                                    </span>
                                </td>
                                <td class="sku-rebate"> </td>
                                <td class="sku-amount">
                                    <div class="sku-amount-block"><em id="totalprice_${arr2['gid']}"
                                            class="number number-14">
                                            <span class="yuan">￥</span><span class="integer">${totalprice2}</span><span
                                                class="pointer">.</span><span class="decimal">00</span>
                                        </em></div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>`;

                $('#modTbody_28').append(reg2);
            }
        };
    }
    checkcart();

    function plusorminus() {

        //增加商品数量
        $('.plus ').on('click', function () {
            // console.log($(this).attr('data-id'))

            var thisY = $(this);
            $.ajax({
                type: "post", //请求方式
                url: "../api/changecount.php", //路径
                async: true, //异步
                data: {
                    gid: $(this).attr('data-id'),
                    dowhat: 1
                }, //传输给后台的数据
                success: function () {
                    // var arr = JSON.parse(str);

                    var tNUM = `#buynum_${thisY.attr('data-id')}`;

                    var lNUM = `${thisY.attr('data-limit')}`;


                    var newN = $(tNUM).val() * 1 + 1;
                    if (newN >= (lNUM * 1)) {
                        newN = lNUM * 1;
                    }
                    $(tNUM).attr('value', newN);

                    // totalprice_${arr1['gid']}
                    var tPRICE = `#totalprice_${thisY.attr('data-id')} span.integer`;
                    var tsingle = `#singleprice_${thisY.attr('data-id')} span.integer`;
                    var newP = newN * ($(tsingle).html() * 1);
                    $(tPRICE).html(newP);

                    checkall();
                }
            })
        });
        //减少商品数量  
        $('.minus ').on('click', function () {
            // console.log($(this).attr('data-id'))
            var thisY = $(this);
            $.ajax({
                type: "post", //请求方式
                url: "../api/changecount.php", //路径
                async: true, //异步
                data: {
                    gid: $(this).attr('data-id'),
                    dowhat: 0
                }, //传输给后台的数据
                success: function () {
                    // var arr = JSON.parse(str);
                    var tNUM = `#buynum_${thisY.attr('data-id')}`;

                    var newN = $(tNUM).val() * 1 - 1;
                    if (newN < 1) {
                        newN = 1;
                    }
                    $(tNUM).attr('value', newN);

                    // totalprice_${arr1['gid']}
                    var tPRICE = `#totalprice_${thisY.attr('data-id')} span.integer`;
                    var tsingle = `#singleprice_${thisY.attr('data-id')} span.integer`;
                    var newP = newN * ($(tsingle).html() * 1);
                    $(tPRICE).html(newP);
                    checkall();
                }
            })
        });


        //单个商品删除
        $('.icon-delete').on('click', function () {
            $(this).parent().parent().parent().remove();
            $(this).attr('data-delete');
            var thisY = $(this);
            $.ajax({
                type: "post", //请求方式
                url: "../api/deletecart.php", //路径
                async: true, //异步
                data: {
                    gid: thisY.attr('data-delete'),

                }, //传输给后台的数据
                success: function () {
                    checkall();
                }
            })

        });

        //删除勾选的商品
        $('#mDelSkuBtn').on('click', function () {
            var okma = confirm('确定删除？');

            if (okma) {
                var gidarr = checkchecked();
                console.log(gidarr);
                for (var i = 0; i < gidarr.length; i++) {
                    $.ajax({
                        type: "post", //请求方式
                        url: "../api/deletecart.php", //路径
                        async: true, //异步
                        data: {
                            gid: gidarr[i],

                        }, //传输给后台的数据
                        success: function () {
                            checkcart();
                            // checkall();
                            for (var i = $('.goods-zone .checkbox').length - 1; i >= 0; i--) {

                                if ($($('.goods-zone .checkbox')[i]).prop('checked')) {
                                    // console.log($($('.goods-zone .checkbox')[i]).parents('.goods-zone'))
                                    $($('.goods-zone .checkbox')[i]).parents('.goods-zone').remove();
                                }
                            }
                            checkall();
                            location.reload();
                        }
                    })
                };

            }






        })

        //全选、不选
        //attr绑定属性     表单某些属性是有行为的：这种属性需要用prop去绑定

        //根据店铺，勾选所有复选框
        $('#storeAllCheck_1').on('click', function () {

            if ($(this).prop('checked')) {
                //给所有的复选框都勾上
                $('.fcheckbox input').prop('checked', 'checked');
            } else {
                $('.fcheckbox input').removeAttr('checked');
            }

        });

        //根据店铺，勾选所有复选框
        $('#storeAllCheck_28').on('click', function () {
            if ($(this).prop('checked')) {
                //给所有的复选框都勾上
                $('.scheckbox input').prop('checked', 'checked');
            } else {
                $('.scheckbox input').removeAttr('checked');
            }

        });

        //给所有的复选框都勾上(上面)
        $('#checkedAllBtn').on('click', function () {
            if ($(this).prop('checked')) {
                //给所有的复选框都勾上
                $('.checkbox').prop('checked', 'checked');
            } else {
                $('.checkbox').removeAttr('checked');
            }

        });


        //给所有的复选框都勾上(底部)
        $('#checkedAllBottomBtn').on('click', function () {
            if ($(this).prop('checked')) {
                //给所有的复选框都勾上
                $('.checkbox').prop('checked', 'checked');
            } else {
                $('.checkbox').removeAttr('checked');
            };

        });

        //渲染购物小结的数据
        function checkall() {
            var gidarr = [];
            for (var i = 0; i < $('.goods-zone .checkbox').length; i++) {

                if ($($('.goods-zone .checkbox')[i]).prop('checked')) {
                    // console.log($($('.goods-zone .checkbox')[i]).parents('.goods-zone').attr('data-id'))
                    gidarr.push($($('.goods-zone .checkbox')[i]).parents('.goods-zone'))
                }
            }
            var tmoney = 0;
            var tamount = 0;
            for (var j = 0; j < gidarr.length; j++) {
                // console.log(gidarr[j].find('.number-14 .integer').html());
                tamount += gidarr[j].find('.input-text').val() * 1;
                tmoney += gidarr[j].find('.number-14 .integer').html() * 1;
            }

            var kind = gidarr.length;


            // console.log(tamount, kind, tmoney)
            $('#kindsTotal').html(kind);
            $('#quantityTotal').html(tamount);
            $('#amountTotal .integer').html(tmoney);
        }

        //点击选取框，渲染购物小结的数据
        $('.checkbox').on('click', checkall);

        //输出选中商品的gid数据
        function checkchecked() {
            var gidarr = [];
            for (var i = 0; i < $('.goods-zone .checkbox').length; i++) {

                if ($($('.goods-zone .checkbox')[i]).prop('checked')) {
                    // console.log($($('.goods-zone .checkbox')[i]).parents('.goods-zone').attr('data-id'))
                    gidarr.push($($('.goods-zone .checkbox')[i]).parents('.goods-zone').attr('data-id'))
                }
            }
            return gidarr;
        }



        $('.login').on('mouseover', function () {
            $(this).addClass('hover');
        });
        $('.login').on('mouseout', function () {
            $(this).removeClass('hover');
        });


        //结算
        var oldT = $('#modTfootPanelShow').offset().top;

        $(window).on('scroll', function () {

            // console.log($(window).scrollTop(), $('#modTfootPanelShow').height(), oldT)


            if ($(window).scrollTop() + $(window).height() < $('#modTfootPanelShow').height() + oldT) {
                $('#modTfootPanel').addClass('tfoot-fix-bottom');
            } else {
                $('#modTfootPanel').removeClass('tfoot-fix-bottom');
            }

            // if ($(window).scrollTop() + $(window).height() < 800) {
            //     $('#modTfootPanel').removeClass('tfoot-fix-bottom');
            // }
            // console.log($(window).scrollTop() + $(window).height(), oldT + $('#modTfootPanelShow').height())
        });

    }



















})