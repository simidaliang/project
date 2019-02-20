"use strict";

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
            success: function success(str) {
                var arr = JSON.parse(str);
                console.log(arr.length);
                if (arr.length == 0) {
                    // console.log($('.ncc-null-shopping').html() != '')
                    if ($('.ncc-null-shopping').length > 0) {
                        reg = "";
                    } else {

                        $('.ncc-main').html('');
                        var reg = "<div class=\"ncc-null-shopping\"><i class=\"ico\"></i>\n                    <h4>\u60A8\u7684\u8D2D\u7269\u8F66\u8FD8\u6CA1\u6709\u5546\u54C1</h4>\n                    <p><a class=\"btn btn-sm btn-success m-r-10\" href=\"http://localhost:1811/liangjiayong/src/ind.html\"><i class=\"fa fa-reply-all\"></i>\u9A6C\u4E0A\u53BB\u8D2D\u7269</a> <a class=\"btn btn-sm btn-default\" href=\"/member/orders/list\"><i class=\"fa fa-file-text\"></i>\u67E5\u770B\u81EA\u5DF1\u7684\u8BA2\u5355</a></p>\n                    <span style=\"color:#ffffff;position: absolute;\">www.cnrmall.com</span></div>";
                    }
                    $('.ncc-head-wrap ').after(reg);
                } else {
                    if ($('.ncc-main').html() != '') {
                        reg2 = "";
                    } else {
                        var reg2 = "<div class=\"ncc-main\">\n                        <div class=\"ncc-title ncc-wrapper\">\n                            <h3>\u6211\u7684\u8D2D\u7269\u8F66</h3>\n                            <h5>\u67E5\u770B\u8D2D\u7269\u8F66\u4E2D\u6240\u6DFB\u52A0\u7684\u5546\u54C1\uFF1B\u589E\u52A0\u51CF\u5C11\u6570\u91CF\u3001\u5E76\u52FE\u9009\u786E\u8BA4\u60F3\u8981\u8D2D\u4E70\u7684\u5546\u54C1\u8FDB\u5165\u4E0B\u4E00\u6B65\u64CD\u4F5C\u3002</h5>\n                        </div>\n                        <div class=\"ncc-cart-status\">\u8D2D\u7269\u8F66\u72B6\u6001\uFF1A<span class=\"bar\"><span class=\"sub\" id=\"buyMaxTopPanel\" data-max=\"50\"\n                                    style=\"width: 4px;\"></span></span><span class=\"sum\" id=\"buyTopSumPanel\">2/50\uFF08\u7EBF\u4E0A\uFF1A2\uFF0C\u95E8\u5E97\uFF1A0\uFF09</span></div>\n                        <form action=\"/buy\" method=\"POST\" id=\"form_buy\" name=\"form_buy\">\n                            <input type=\"hidden\" value=\"1\" name=\"isCart\">\n                            <input type=\"hidden\" name=\"buyData\" id=\"buyDataInput\" value=\"\">\n                            <input type=\"hidden\" name=\"isExistBundling\" id=\"isExistBundlingInput\" value=\"0\">\n                            <div class=\"ncc-wrapper\">\n                                <div id=\"normalGoodsList\">\n                                    <div class=\"ncc-mod-thead\">\n                                        <ul class=\"columns\">\n                                            <li class=\"col-opt\"><span class=\"checkbox-layout\">\n                                                    <label><input type=\"checkbox\" class=\"checkbox\" id=\"checkedAllBtn\"\n                                                            autocomplete=\"off\">\u5168\u9009</label>\n                                                </span></li>\n                                            <li class=\"col-goods\">\u5546\u54C1</li>\n                                            <li class=\"col-quantity\">\u6570\u91CF</li>\n                                            <li class=\"col-unitprice\">\u5355\u4EF7</li>\n                                            <li class=\"col-rebate\">\u4F18\u60E0</li>\n                                            <li class=\"col-amount\">\u91D1\u989D</li>\n                                        </ul>\n                                    </div>\n\n                                    <div class=\"ncc-mod-tbody\" id=\"modTbody_1\">\n                                        <div class=\"store-bar\">\n                                            <div class=\"fl\"> <span class=\"checkbox-layout\">\n                                                    <input type=\"checkbox\" class=\"checkbox J-store-all-check\" data-store-all-check=\"1\"\n                                                        autocomplete=\"off\" id=\"storeAllCheck_1\">\n                                                    <label></label>\n                                                </span><a class=\"store-name\" href=\"/store/1\">\u5B98\u65B9\u5E97\u94FA</a>\n                                            </div>\n                                            <div class=\"fr\"> </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"ncc-mod-tbody\" id=\"modTbody_28\">\n                                        <div class=\"store-bar\">\n                                            <div class=\"fl\"> <span class=\"checkbox-layout\">\n                                                    <input type=\"checkbox\" class=\"checkbox J-store-all-check\" data-store-all-check=\"28\"\n                                                        autocomplete=\"off\" id=\"storeAllCheck_28\">\n                                                    <label></label>\n                                                </span><a class=\"store-name\" href=\"/store/28\">\u4E2D\u56FD\u519C\u57A6\u5B98\u65B9\u65D7\u8230\u5E97</a>\n                                            </div>\n                                            <div class=\"fr\"> </div>\n                                        </div>\n\n                                    </div>\n\n                                    <div id=\"modTfootPanelShow\">\n                                        <div class=\"ncc-mod-tfoot \" id=\"modTfootPanel\">\n                                            <div id=\"disableBuyTips\" class=\"group-wrapper group-popup hidden\">\n                                                <div id=\"J_SelectedItemsList\" class=\"group-content\">\n                                                    <div class=\"group-top-title\">\n                                                        <p>\u8BF7\u5206\u5F00\u7ED3\u7B97\u4EE5\u4E0B\u5546\u54C1</p>\n                                                        <span id=\"J_group_close_btn\" class=\"group-close-btn\"></span>\n                                                    </div>\n                                                    <div class=\"groups-list\" id=\"disableBuyTipsGoodsList\"></div>\n                                                </div><span class=\"arrow\"></span>\n                                            </div>\n                                            <div class=\"actions\"><span class=\"checkbox-layout\">\n\n                                                    <label for=\"checkedAllBottomBtn\"><input type=\"checkbox\" class=\"checkbox\"\n                                                            id=\"checkedAllBottomBtn\" autocomplete=\"off\">\u5168\u9009</label>\n                                                </span> <a href=\"javascript:;\" class=\"delete-checked\" id=\"mDelSkuBtn\">\u5220\u9664</a> </div>\n                                            <div class=\"summary\">\n                                                <dl>\n                                                    <dt>\u9009\u8D2D\u5546\u54C1\u79CD\u7C7B\uFF1A</dt>\n                                                    <dd class=\"kinds-total\"><span class=\"value\" id=\"kindsTotal\">0</span>\u79CD</dd>\n                                                    <dt>\u9009\u8D2D\u6570\u91CF\u603B\u8BA1\uFF1A</dt>\n                                                    <dd class=\"quantity-total\"><span class=\"value\" id=\"quantityTotal\">0</span>\u4EF6</dd>\n                                                    <dt>\u5546\u54C1\u91D1\u989D\u603B\u8BA1\uFF1A</dt>\n                                                    <dd class=\"amount-total\"><strong class=\"value\" id=\"amountTotal\">\n                                                            <span class=\"yuan\">\uFFE5</span><span class=\"integer\">0</span><span\n                                                                class=\"pointer\">.</span><span class=\"decimal\">00</span>\n                                                        </strong></dd>\n                                                </dl>\n                                            </div>\n                                            <div class=\"form\">\n                                                <button id=\"cartSubmit\" class=\"checkout checkout-disabled\">\u7ED3\u7B97</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>";
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

                var reg1 = "<div class=\"goods-zone\"  data-id=\"" + arr1['gid'] + "\">\n                <div class=\"mask-layer\"><span class=\"top\"></span><span class=\"right\"></span><span\n                        class=\"bottom\"></span><span class=\"left\"></span></div>\n                <div class=\"fl m-r-5\"><span class=\"checkbox-layout fcheckbox\">\n                        <input type=\"checkbox\" class=\"checkbox J-spu-checkbox\" \n                            data-spu-checkbox=\"" + arr1['gid'] + "\" data-goods-modal=\"1\" data-spu-store-id=\"1\"\n                            autocomplete=\"off\" data-is-chain=\"0\" data-is-virtual=\"0\" data-is-foreign=\"0\"\n                            data-img=\"../images/cart1.jpg\" data-goods-name=\"\u6C7E\u9152100\u5E74\u6C7E\u85CF1989\u73CD\u85CF\u7EC4 \u8D27\u53F7123478\"\n                            data-real-common-id=\"0\" data-goods-type=\"0\">\n                        <label></label>\n                    </span> </div>\n                <div class=\"goods-img\">\n                    <div class=\"img-vertical\"><a target=\"_blank\" href=\"/goods/5812\"><img\n                                src=\"../" + arr1['list_pic'] + "\" alt=\"\"\n                                style=\"max-width:100%; max-height:100%\"></a></div>\n                </div>\n                <div class=\"goods-main\">\n                    <div class=\"spu-name\"><span class=\"tag tag1\"></span><a href=\"/goods/5812\"\n                            target=\"_blank\">" + arr1['goods_name1'] + "</a>\n                        <div class=\"attributes\"> </div>\n                    </div>\n\n                    <div class=\"panel-remove\"> <a\n                            class=\"icon-delete\" href=\"javascript:;\" title=\"\u5220\u9664\u8BE5\u5546\u54C1\" data-delete=\"" + arr1['gid'] + "\"><i class=\"fa fa-trash-o\"\n                                aria-hidden=\"true\"></i></a></div>\n                    <div class=\"panel-modify\"><a href=\"javascript:;\" data-mod-id=\"5812\"><i\n                                class=\"fa fa-pencil\" aria-hidden=\"true\"></i><span\n                                data-spu-mod=\"\">\u4FEE\u6539</span></a></div>\n                    <table class=\"spu-singles\">\n                        <tbody>\n                            <tr class=\"goods-sku\" id=\"goodsSkuPanel_9451\" data-goods-spu=\"5812\"\n                                data-sku-id=\"9451\" data-cart-id=\"722\" data-goods-modal=\"1\"\n                                data-goods-type=\"normal\" data-goods-web-usable=\"0\" data-web-price0=\"698.00\"\n                                data-web-price1=\"0.00\" data-web-price2=\"0.00\" data-goods-price0=\"698\"\n                                data-goods-price1=\"0\" data-goods-price2=\"0\" data-is-spec=\"0\"\n                                data-goods-storage=\"13\" data-buy-limit=\"10\" data-unit-name=\"\u7EC4\"\n                                data-chain-id=\"0\" data-is-chain=\"0\">\n                                <td>&nbsp;</td>\n                                <td class=\"sku-opt\"> </td>\n                                <td class=\"sku-primary\"></td>\n                                <td class=\"sku-quantity\">\n                                    <div class=\"sku-quantity-block clearfix\"><a href=\"javascript:;\"\n                                            class=\"minus \" title=\"\u51CF\u5C11\" data-id=\"" + arr1['gid'] + "\"><i class=\"fa fa-minus\"\n                                                aria-hidden=\"true\">-</i></a>\n                                        <input type=\"text\" class=\"input-text\" value=\"" + arr1['counts'] + "\"\n                                            id=\"buynum_" + arr1['gid'] + "\" autocomplete=\"off\">\n                                        <a href=\"javascript:;\" class=\"plus \" title=\"\u589E\u52A0\" data-id=\"" + arr1['gid'] + "\" data-limit=\"" + arr1['buy_limit'] + "\"><i\n                                                class=\"fa fa-plus\" aria-hidden=\"true\">+</i></a> <span\n                                            class=\"text-warning\"></span></div>\n                                </td>\n                                <td class=\"sku-delete\"><a href=\"javascript:;\" title=\"\u5220\u9664\"\n                                        data-goods-spec-del=\"722\"><i class=\"fa fa-trash-o\"\n                                            aria-hidden=\"true\"></i></a></td>\n                                <td class=\"sku-unitprice\">\n                                    <span class=\"number number-thin\" id=\"singleprice_" + arr1['gid'] + "\">\n                                        <span class=\"yuan\">\uFFE5</span><span class=\"integer\">" + arr1['goods_price'] + "</span>\n                                    </span>\n                                </td>\n                                <td class=\"sku-rebate\"> </td>\n                                <td class=\"sku-amount\">\n                                    <div class=\"sku-amount-block\"><em id=\"totalprice_" + arr1['gid'] + "\"\n                                            class=\"number number-14\">\n                                            <span class=\"yuan\">\uFFE5</span><span\n                                                class=\"integer\">" + totalprice + "</span><span\n                                                class=\"pointer\">.</span><span class=\"decimal\">00</span>\n                                        </em></div>\n                                </td>\n                            </tr>\n                        </tbody>\n\n                    </table>\n                </div>\n            </div>";

                $('#modTbody_1').append(reg1);
            } else if (arr[i]['shop'] == "中国农垦官方旗舰店") {
                var arr2 = arr[i];
                var totalprice2 = arr2['counts'] * arr2['goods_price'];

                var reg2 = "<div class=\"goods-zone\" data-id=\"" + arr2['gid'] + "\" >\n                <div class=\"mask-layer\"><span class=\"top\"></span><span class=\"right\"></span><span\n                        class=\"bottom\"></span><span class=\"left\"></span></div>\n                <div class=\"fl m-r-5\"><span class=\"checkbox-layout scheckbox\">\n                        <input type=\"checkbox\" class=\"checkbox J-spu-checkbox\" \n                            data-spu-checkbox=\"12366\" data-goods-modal=\"1\" data-spu-store-id=\"28\"\n                            autocomplete=\"off\" data-is-chain=\"0\" data-is-virtual=\"0\" data-is-foreign=\"0\"\n                            data-img=\"https://pic5.cnrmall.com/image/80/76/8076686a49f04adba415a06f6def9223.jpg@160w_160h\"\n                            data-goods-name=\"\u65B9\u5BB6\u94FA\u5B50 \u9ED1\u67B8\u675E  \u9752\u6D77\u9ED1\u67B8\u675E 50g*5\u74F6\" data-real-common-id=\"0\"\n                            data-goods-type=\"0\">\n                        <label></label>\n                    </span> </div>\n                <div class=\"goods-img\">\n                    <div class=\"img-vertical\"><a target=\"_blank\" href=\"/goods/12366\"><img\n                                src=\"../" + arr2['list_pic'] + "\"\n                                alt=\"\" style=\"max-width:100%; max-height:100%\"></a></div>\n                </div>\n                <div class=\"goods-main\">\n                    <div class=\"spu-name\"><span class=\"tag tag1\"></span><a href=\"/goods/12366\"\n                            target=\"_blank\">" + arr2['goods_name1'] + "</a>\n                        <div class=\"attributes\"> </div>\n                    </div>\n\n                    <div class=\"panel-remove\"> <a\n                            class=\"icon-delete\" href=\"javascript:;\" title=\"\u5220\u9664\u8BE5\u5546\u54C1\" " + arr2['gid'] + "><i class=\"fa fa-trash-o\"\n                                aria-hidden=\"true\"></i></a></div>\n                    <div class=\"panel-modify\"><a href=\"javascript:;\" data-mod-id=\"12366\"><i\n                                class=\"fa fa-pencil\" aria-hidden=\"true\"></i><span\n                                data-spu-mod=\"\">\u4FEE\u6539</span></a></div>\n                    <table class=\"spu-singles\">\n                        <tbody>\n                            <tr class=\"goods-sku\" id=\"goodsSkuPanel_12821\" data-goods-spu=\"12366\"\n                                data-sku-id=\"12821\" data-cart-id=\"726\" data-goods-modal=\"1\"\n                                data-goods-type=\"normal\" data-goods-web-usable=\"0\" data-web-price0=\"139.00\"\n                                data-web-price1=\"0.00\" data-web-price2=\"0.00\" data-goods-price0=\"139\"\n                                data-goods-price1=\"0\" data-goods-price2=\"0\" data-is-spec=\"1\"\n                                data-goods-storage=\"200\" data-buy-limit=\"0\" data-unit-name=\"\"\n                                data-chain-id=\"0\" data-is-chain=\"0\">\n                                <td>&nbsp;</td>\n                                <td class=\"sku-opt\"> <span class=\"checkbox-layout\">\n                                        <input class=\"J-sku-checkbox\" autocomplete=\"off\" type=\"checkbox\"\n                                            data-sku-checkbox=\"12821\" data-sku-amount=\"0\" data-sku-num=\"0\"\n                                            data-target=\"spuCheckBox_12366\" data-is-chain=\"0\"\n                                            data-is-virtual=\"0\" data-is-foreign=\"0\" data-goods-type=\"0\">\n                                        <label></label>\n                                    </span> </td>\n                                <td class=\"sku-primary\">\u989C\u8272\uFF1A\u5171\u540C </td>\n                                <td class=\"sku-quantity\">\n                                    <div class=\"sku-quantity-block clearfix\"><a href=\"javascript:;\"\n                                            class=\"minus \" title=\"\u51CF\u5C11\" data-id=\"" + arr2['gid'] + "\"><i class=\"fa fa-minus\"\n                                                aria-hidden=\"true\">-</i></a>\n                                        <input type=\"text\" class=\"input-text\" value=\"" + arr2['counts'] + "\"\n                                            id=\"buynum_" + arr2['gid'] + "\" autocomplete=\"off\">\n                                        <a href=\"javascript:;\" class=\"plus \" title=\"\u589E\u52A0\" data-id=\"" + arr2['gid'] + "\" data-limit=\"" + arr2['buy_limit'] + "\"><i\n                                                class=\"fa fa-plus\" aria-hidden=\"true\">+</i></a> <span\n                                            class=\"text-warning\"></span></div>\n                                </td>\n                                <td class=\"sku-delete\"><a href=\"javascript:;\" title=\"\u5220\u9664\"\n                                        data-goods-spec-del=\"726\"><i class=\"fa fa-trash-o\"\n                                            aria-hidden=\"true\"></i></a></td>\n                                <td class=\"sku-unitprice\">\n                                    <span class=\"number number-thin\" id=\"singleprice_" + arr2['gid'] + "\">\n                                        <span class=\"yuan\">\uFFE5</span><span class=\"integer\">" + arr2['goods_price'] + "</span>\n                                    </span>\n                                </td>\n                                <td class=\"sku-rebate\"> </td>\n                                <td class=\"sku-amount\">\n                                    <div class=\"sku-amount-block\"><em id=\"totalprice_" + arr2['gid'] + "\"\n                                            class=\"number number-14\">\n                                            <span class=\"yuan\">\uFFE5</span><span class=\"integer\">" + totalprice2 + "</span><span\n                                                class=\"pointer\">.</span><span class=\"decimal\">00</span>\n                                        </em></div>\n                                </td>\n                            </tr>\n                        </tbody>\n\n                    </table>\n                </div>\n            </div>";

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
                success: function success() {
                    // var arr = JSON.parse(str);

                    var tNUM = "#buynum_" + thisY.attr('data-id');

                    var lNUM = "" + thisY.attr('data-limit');

                    var newN = $(tNUM).val() * 1 + 1;
                    if (newN >= lNUM * 1) {
                        newN = lNUM * 1;
                    }
                    $(tNUM).attr('value', newN);

                    // totalprice_${arr1['gid']}
                    var tPRICE = "#totalprice_" + thisY.attr('data-id') + " span.integer";
                    var tsingle = "#singleprice_" + thisY.attr('data-id') + " span.integer";
                    var newP = newN * ($(tsingle).html() * 1);
                    $(tPRICE).html(newP);

                    checkall();
                }
            });
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
                success: function success() {
                    // var arr = JSON.parse(str);
                    var tNUM = "#buynum_" + thisY.attr('data-id');

                    var newN = $(tNUM).val() * 1 - 1;
                    if (newN < 1) {
                        newN = 1;
                    }
                    $(tNUM).attr('value', newN);

                    // totalprice_${arr1['gid']}
                    var tPRICE = "#totalprice_" + thisY.attr('data-id') + " span.integer";
                    var tsingle = "#singleprice_" + thisY.attr('data-id') + " span.integer";
                    var newP = newN * ($(tsingle).html() * 1);
                    $(tPRICE).html(newP);
                    checkall();
                }
            });
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
                    gid: thisY.attr('data-delete')

                }, //传输给后台的数据
                success: function success() {
                    checkall();
                }
            });
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
                            gid: gidarr[i]

                        }, //传输给后台的数据
                        success: function success() {
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
                    });
                };
            }
        });

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
                    gidarr.push($($('.goods-zone .checkbox')[i]).parents('.goods-zone'));
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
                    gidarr.push($($('.goods-zone .checkbox')[i]).parents('.goods-zone').attr('data-id'));
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
});