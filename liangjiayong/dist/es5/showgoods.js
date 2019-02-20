'use strict';

$(function () {
    //根据gid渲染数据
    var preHref = location.href;
    var gid = preHref.split('?')[1].split('=')[1];
    // console.log(gid)
    function showgoods(gid) {
        $.ajax({
            type: "post", //请求方式
            url: "../api/getgoods.php", //路径
            async: true, //异步
            data: {
                gid: gid

            }, //传输给后台的数据
            success: function success(str) {
                var arr = JSON.parse(str);
                // console.log(arr[0])
                var reg = '<div class="ncs-detail">\n                <!-- S \u5546\u54C1\u56FE\u7247 -->\n                <div id="ncsGoodsPicture" class="ncs-goods-picture image_zoom">\n                    <!--\u5927\u56FE--> <a id="Zoomer" href="" class="MagicZoomPlus"\n                        rel="selectors-effect: false; zoom-width: 650; zoom-height: 500; expand-size: original" title=""\n                        style="position: relative; display: inline-block; text-decoration: none; outline: 0px; margin: auto; width: 360px; height: 360px;"><img\n                            src="../' + arr[0]["goods_pic_show"] + '" style="opacity: 1;">\n                        <div class="MagicZoomPup"\n                            style="z-index: 10; position: absolute; overflow: hidden; display: none; visibility: hidden; width: 291px; height: 223px; opacity: 0.5; left: 67px; top: 0px;">\n                        </div>\n                        <div class="MagicZoomBigImageCont"\n                            style="overflow: hidden; z-index: 100; top: -10000px; position: absolute; width: 650px; height: 500px; opacity: 1; left: 375px;">\n                            <div class="MagicZoomHeader"\n                                style="position: relative; z-index: 10; left: 0px; top: 0px; padding: 3px; display: none; visibility: hidden;">\n                            </div>\n                            <div style="overflow: hidden;" id="fangda_big"><img src="../images/fangda_big.jpg"\n                                    style="padding: 0px; margin: 0px; border: 0px; position: relative; left: -149px; top: 0px;">\n                            </div>\n                            <!-- <div\n                                style="color: rgb(255, 255, 255); font-size: 12px; font-weight: normal; position: absolute; width: 95%; text-align: right; display: none; top: 480px;">\n                                </div> -->\n                        </div>\n    \n                    </a>\n                    <!--\u5C0F\u56FE-->\n                    <div class="controller"> <a title="\u5411\u524D" id="GoodsPicPrevBtn" class="cBtn prev fa fa-angle-left"\n                            href="javascript:;"></a>\n                        <div class="goods-pic-box">\n                            <ul id="ncsGoodsPicList" style="width: 325px;">\n                                <li data-color-id="0"> <a href="javascript:;"\n                                        rev-herf="https://pic1.cnrmall.com/image/b5/5a/b55a0cde48baeed0787d663d8bd2d59a.jpg"\n                                        rev="https://pic5.cnrmall.com/image/b5/5a/b55a0cde48baeed0787d663d8bd2d59a.jpg@360w_360h"\n                                        class=""> <img src="../' + arr[0]["goods_pic_small1"] + '">\n                                    </a>\n                                </li>\n                                <li data-color-id="0"> <a href="javascript:;"\n                                        rev-herf="https://pic4.cnrmall.com/image/a0/0a/a00aae2332372d63e14852154c485a2a.jpg"\n                                        rev="https://pic3.cnrmall.com/image/a0/0a/a00aae2332372d63e14852154c485a2a.jpg@360w_360h"\n                                        class=""> <img src="../' + arr[0]["goods_Pic_small2"] + '">\n                                    </a>\n                                </li>\n                                <li data-color-id="0"> <a href="javascript:;"\n                                        rev-herf="https://pic4.cnrmall.com/image/ec/ae/ecaee17cbbaaebc3a61f763d909a3a17.jpg"\n                                        rev="https://pic5.cnrmall.com/image/ec/ae/ecaee17cbbaaebc3a61f763d909a3a17.jpg@360w_360h"\n                                        class="current"> <img src="../images/fangda_small3.jpg">\n                                    </a>\n                                </li>\n                                <li data-color-id="0"> <a href="javascript:;"\n                                        rev-herf="https://pic1.cnrmall.com/image/19/93/199364cf83fbb0d19df9f2b17183bfc7.jpg"\n                                        rev="https://pic4.cnrmall.com/image/19/93/199364cf83fbb0d19df9f2b17183bfc7.jpg@360w_360h"\n                                        class=""> <img src="../images/fangda_small4.jpg">\n                                    </a>\n                                </li>\n                                <li data-color-id="0"> <a href="javascript:;"\n                                        rev-herf="https://pic2.cnrmall.com/image/14/ea/14ea108dffa6bff1fcb823218c2c223b.jpg"\n                                        rev="https://pic5.cnrmall.com/image/14/ea/14ea108dffa6bff1fcb823218c2c223b.jpg@360w_360h"\n                                        class=""> <img src="../images/fangda_small1.jpg">\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                        <a title="\u5411\u540E" id="GoodsPicNextBtn" class="cBtn next fa fa-angle-right" href="javascript:;"></a>\n                    </div>\n                    <!-- E \u5546\u54C1\u56FE\u7247 -->\n                    <div class="ncs-handle" id="content"> <a href="javascript:;" class="favorite"\n                            nc_type="goodsFavoritesBtn" data-param="{\'commonId\':\'5676\'}"><i class="fa fa-star-o"\n                                aria-hidden="true"></i>\u6536\u85CF\u5546\u54C1<em class="m-l-5" nc_type="goodsFavoritesNum">0</em> </a>\n                        <div class="share"><i class="fa fa-share-alt" aria-hidden="true"></i>\u5206\u4EAB<i\n                                class="m-l-5 fa fa-caret-down" aria-hidden="true"></i> <!-- JiaThis Button BEGIN -->\n                            <!-- <input type="hidden" name="jiathisImage" value="https://pic1.cnrmall.com/image/b5/5a/b55a0cde48baeed0787d663d8bd2d59a.jpg@160w_160h"/> -->\n                            <!-- <input type="hidden" name="jiathisImage" value="https://pic3.cnrmall.com/image/a0/0a/a00aae2332372d63e14852154c485a2a.jpg@160w_160h"/> -->\n                            <!-- <input type="hidden" name="jiathisImage" value="https://pic5.cnrmall.com/image/ec/ae/ecaee17cbbaaebc3a61f763d909a3a17.jpg@160w_160h"/> -->\n                            <!-- <input type="hidden" name="jiathisImage" value="https://pic2.cnrmall.com/image/19/93/199364cf83fbb0d19df9f2b17183bfc7.jpg@160w_160h"/> -->\n                            <!-- <input type="hidden" name="jiathisImage" value="https://pic3.cnrmall.com/image/14/ea/14ea108dffa6bff1fcb823218c2c223b.jpg@160w_160h"/> -->\n                            <sub class="J-share-data" data-title="' + arr[0]["goods_name1"] + '" data-summary="' + arr[0]["goods_name2"] + '"\n                                data-url="/goods/5676"\n                                data-wap-url="https://m1.cnrmall.com/tmpl/product_detail.html?commonId=5676"\n                                data-pic="https://pic5.cnrmall.com/image/b5/5a/b55a0cde48baeed0787d663d8bd2d59a.jpg@160w_160h||https://pic3.cnrmall.com/image/a0/0a/a00aae2332372d63e14852154c485a2a.jpg@160w_160h||https://pic5.cnrmall.com/image/ec/ae/ecaee17cbbaaebc3a61f763d909a3a17.jpg@160w_160h||https://pic4.cnrmall.com/image/19/93/199364cf83fbb0d19df9f2b17183bfc7.jpg@160w_160h||https://pic3.cnrmall.com/image/14/ea/14ea108dffa6bff1fcb823218c2c223b.jpg@160w_160h">\n                                <a class="J-share-btn" href="javascript:;" style="font-size: 12px;"\n                                    data-web-id="tsina">\u65B0\u6D6A</a> <a class="J-share-btn" href="javascript:;"\n                                    style="font-size: 12px;" data-web-id="weixin">\u5FAE\u4FE1</a> </sub> <!-- JiaThis Button END -->\n                        </div>\n                        <a href="javascript:;" class="goods-QRcode"><i class="fa fa-qrcode" aria-hidden="true"></i>\u79FB\u52A8\u7AEF\u8D2D\u4E70\n                            <div class="QRcode-pic"><img src="https://pic4.cnrmall.com/qr/1/5676.gif"></div>\n                        </a>\n                    </div>\n                </div>\n                <!-- E \u5546\u54C1\u56FE\u7247\u53CA\u6536\u85CF\u5206\u4EAB -->\n                <!-- S \u5546\u54C1\u57FA\u672C\u4FE1\u606F -->\n                <!-- S \u5546\u54C1\u89C4\u683C\u503C-->\n                <!-- \u96F6\u552E/\u865A\u62DF/\u6D77\u5916\u6A21\u5F0F -->\n                <!-- \u96F6\u552E -->\n    \n                <!-- S \u5546\u54C1\u57FA\u672C\u4FE1\u606F -->\n    \n                <div class="ncs-goods-summary model-retail">\n                    <div class="ncs-goods-tag"></div>\n                    <div class="ncs-goods-name">\n                        <h1>' + arr[0]["goods_name1"] + '</h1>\n                        <strong>' + arr[0]["goods_name2"] + '</strong>\n                    </div>\n                    <div class="ncs-meta pr">\n                        <!-- S \u5546\u54C1\u4EF7\u683C -->\n                        <dl class="goods-price" id="goodsPriceHtml">\n                            <dt>\u4EF7\u683C</dt>\n                            <dd><span class="goods-price-real"><strong id="rmPrice" class="number number-thin">\n                                        <span class="yuan">\uFFE5</span><span class="integer">' + arr[0]["goods_price"] + '</span>\n                                    </strong><sub class="original-price" id="basePrice" style="display: none !important">\n                                        \u539F\u4EF7\uFF1A\n                                        <span class="yuan">\uFFE5</span><span class="integer">' + arr[0]["goods_price"] + '</span>\n                                    </sub></span> </dd>\n                        </dl>\n                        <!-- S \u5151\u6362\u7801 -->\n                        <!-- E \u5151\u6362\u7801 -->\n                        <!-- S \u7A0E\u7387 -->\n                        <!-- E \u7A0E\u7387 -->\n                        <!-- E \u5546\u54C1\u4EF7\u683C -->\n                    </div>\n    \n                    <!-- S \u5546\u54C1\u8D60\u54C1 -->\n                    <div class="goods-gift" id="goodsGiftHtml"> </div>\n                    <!-- E \u5546\u54C1\u8D60\u54C1 -->\n                    <!-- S \u4F18\u60E0\u5E03\u5C40\u5C55\u793A-->\n    \n                    <!-- S \u7269\u6D41\u4E0E\u8FD0\u8D39\u65B0\u5E03\u5C40\u5C55\u793A  -->\n                    <div class="ncs-logistics">\n                        <dl id="ncs-freight" class="ncs-freight">\n                            <dt>\u7269\u6D41</dt>\n                            <dd class="ncs-freight_box">\n                                <div class="fl m-r-5">\u914D\u9001\u81F3</div>\n                                <div id="ncsFreightSelector" class="ncs-freight-select">\n                                    <div class="text">\n                                        <div id="areaInfoText">\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u8354\u6E7E\u533A</div>\n                                        <b>\u2228</b>\n                                    </div>\n                                    <div class="content" style="display: none;">\n                                        <div id="ncs-stock" class="ncs-stock" data-widget="tabs">\n                                            <div class="mt">\n                                                <ul class="tab" id="ncsTopTabs">\n                                                    <li data-index="0" data-widget="tab-item" class=""> <a href="#none"\n                                                            class="hover"><em>\u5E7F\u4E1C\u7701</em><i> \u2228</i></a> </li>\n                                                    <li data-index="1" data-widget="tab-item" class=""><a\n                                                            href="javascript:;" class="hover"><em>\u5E7F\u5DDE\u5E02</em><i> \u2228</i></a></li>\n                                                    <li data-index="2" data-widget="tab-item" class=""><a\n                                                            href="javascript:;" class="hover"><em>\u8354\u6E7E\u533A</em><i> \u2228</i></a></li>\n                                                </ul>\n                                            </div>\n                                            <div id="stockItem_0" data-widget="tab-content" data-area="0"\n                                                style="display: none;">\n                                                <ul class="area-list">\n                                                    <li><a data-value="1" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u5317\u4EAC\u5E02</a></li>\n                                                    <li><a data-value="2" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u5929\u6D25\u5E02</a></li>\n                                                    <li><a data-value="3" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u6CB3\u5317\u7701</a></li>\n                                                    <li><a data-value="4" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u5C71\u897F\u7701</a></li>\n                                                    <li><a data-value="5" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u5185\u8499\u53E4\u81EA\u6CBB\u533A</a></li>\n                                                    <li><a data-value="6" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u8FBD\u5B81\u7701</a></li>\n                                                    <li><a data-value="7" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u5409\u6797\u7701</a></li>\n                                                    <li><a data-value="8" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u9ED1\u9F99\u6C5F\u7701</a></li>\n                                                    <li><a data-value="9" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u4E0A\u6D77\u5E02</a></li>\n                                                    <li><a data-value="10" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u6C5F\u82CF\u7701</a></li>\n                                                    <li><a data-value="11" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u6D59\u6C5F\u7701</a></li>\n                                                    <li><a data-value="12" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u5B89\u5FBD\u7701</a></li>\n                                                    <li><a data-value="13" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u798F\u5EFA\u7701</a></li>\n                                                    <li><a data-value="14" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u6C5F\u897F\u7701</a></li>\n                                                    <li><a data-value="15" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u5C71\u4E1C\u7701</a></li>\n                                                    <li><a data-value="16" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u6CB3\u5357\u7701</a></li>\n                                                    <li><a data-value="17" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u6E56\u5317\u7701</a></li>\n                                                    <li><a data-value="18" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u6E56\u5357\u7701</a></li>\n                                                    <li><a data-value="19" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u5E7F\u4E1C\u7701</a></li>\n                                                    <li><a data-value="20" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A</a></li>\n                                                    <li><a data-value="21" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u6D77\u5357\u7701</a></li>\n                                                    <li><a data-value="22" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u91CD\u5E86\u5E02</a></li>\n                                                    <li><a data-value="23" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u56DB\u5DDD\u7701</a></li>\n                                                    <li><a data-value="24" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u8D35\u5DDE\u7701</a></li>\n                                                    <li><a data-value="25" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u4E91\u5357\u7701</a></li>\n                                                    <li><a data-value="26" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u897F\u85CF\u81EA\u6CBB\u533A</a></li>\n                                                    <li><a data-value="27" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u9655\u897F\u7701</a></li>\n                                                    <li><a data-value="28" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u7518\u8083\u7701</a></li>\n                                                    <li><a data-value="29" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u9752\u6D77\u7701</a></li>\n                                                    <li><a data-value="30" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A</a></li>\n                                                    <li><a data-value="31" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A</a></li>\n                                                    <li><a data-value="32" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u53F0\u6E7E\u7701</a></li>\n                                                    <li><a data-value="33" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A</a></li>\n                                                    <li><a data-value="34" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A</a></li>\n                                                    <li><a data-value="35" data-deep="1" data-area-parent-id="0"\n                                                            href="javascript:;">\u6D77\u5916</a></li>\n                                                </ul>\n                                            </div>\n                                            <div id="stockItem_1" data-widget="tab-content" data-area="1"\n                                                style="display: none;">\n                                                <ul class="area-list">\n                                                    <li><a data-value="289" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u5E7F\u5DDE\u5E02</a></li>\n                                                    <li><a data-value="290" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u97F6\u5173\u5E02</a></li>\n                                                    <li><a data-value="291" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u6DF1\u5733\u5E02</a></li>\n                                                    <li><a data-value="292" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u73E0\u6D77\u5E02</a></li>\n                                                    <li><a data-value="293" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u6C55\u5934\u5E02</a></li>\n                                                    <li><a data-value="294" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u4F5B\u5C71\u5E02</a></li>\n                                                    <li><a data-value="295" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u6C5F\u95E8\u5E02</a></li>\n                                                    <li><a data-value="296" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u6E5B\u6C5F\u5E02</a></li>\n                                                    <li><a data-value="297" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u8302\u540D\u5E02</a></li>\n                                                    <li><a data-value="298" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u8087\u5E86\u5E02</a></li>\n                                                    <li><a data-value="299" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u60E0\u5DDE\u5E02</a></li>\n                                                    <li><a data-value="300" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u6885\u5DDE\u5E02</a></li>\n                                                    <li><a data-value="301" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u6C55\u5C3E\u5E02</a></li>\n                                                    <li><a data-value="302" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u6CB3\u6E90\u5E02</a></li>\n                                                    <li><a data-value="303" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u9633\u6C5F\u5E02</a></li>\n                                                    <li><a data-value="304" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u6E05\u8FDC\u5E02</a></li>\n                                                    <li><a data-value="305" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u4E1C\u839E\u5E02</a></li>\n                                                    <li><a data-value="306" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u4E2D\u5C71\u5E02</a></li>\n                                                    <li><a data-value="307" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u6F6E\u5DDE\u5E02</a></li>\n                                                    <li><a data-value="308" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u63ED\u9633\u5E02</a></li>\n                                                    <li><a data-value="309" data-deep="2" data-area-parent-id="19"\n                                                            href="javascript:;">\u4E91\u6D6E\u5E02</a></li>\n                                                </ul>\n                                            </div>\n                                            <div id="stockItem_2" data-widget="tab-content" data-area="2">\n                                                <ul class="area-list">\n                                                    <li><a data-value="3118" data-deep="3" data-area-parent-id="289"\n                                                            href="javascript:;">\u8354\u6E7E\u533A</a></li>\n                                                    <li><a data-value="3119" data-deep="3" data-area-parent-id="289"\n                                                            href="javascript:;">\u8D8A\u79C0\u533A</a></li>\n                                                    <li><a data-value="3120" data-deep="3" data-area-parent-id="289"\n                                                            href="javascript:;">\u6D77\u73E0\u533A</a></li>\n                                                    <li><a data-value="3121" data-deep="3" data-area-parent-id="289"\n                                                            href="javascript:;">\u5929\u6CB3\u533A</a></li>\n                                                    <li><a data-value="3122" data-deep="3" data-area-parent-id="289"\n                                                            href="javascript:;">\u767D\u4E91\u533A</a></li>\n                                                    <li><a data-value="3123" data-deep="3" data-area-parent-id="289"\n                                                            href="javascript:;">\u9EC4\u57D4\u533A</a></li>\n                                                    <li><a data-value="3124" data-deep="3" data-area-parent-id="289"\n                                                            href="javascript:;">\u756A\u79BA\u533A</a></li>\n                                                    <li><a data-value="3125" data-deep="3" data-area-parent-id="289"\n                                                            href="javascript:;">\u82B1\u90FD\u533A</a></li>\n                                                    <li><a data-value="3126" data-deep="3" data-area-parent-id="289"\n                                                            href="javascript:;">\u5357\u6C99\u533A</a></li>\n                                                    <li><a data-value="3127" data-deep="3" data-area-parent-id="289"\n                                                            href="javascript:;">\u4ECE\u5316\u533A</a></li>\n                                                    <li><a data-value="3128" data-deep="3" data-area-parent-id="289"\n                                                            href="javascript:;">\u589E\u57CE\u533A</a></li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <!--<a href="javascript:;" class="close" id="areaPanelClose">\u5173\u95ED</a>-->\n                                </div>\n                                <div id="ncs-freight-prompt"><strong>\u6709\u8D27</strong><span>\u514D\u8FD0\u8D39</span></div>\n                            </dd>\n                        </dl>\n                    </div>\n                    <!-- E \u7269\u6D41\u4E0E\u8FD0\u8D39\u65B0\u5E03\u5C40\u5C55\u793A  -->\n                    <!-- \u670D\u52A1 -->\n                    <div class="ncs-service">\n                        <dl>\n                            <dt>\u670D\u52A1</dt>\n                            <dd>\u7531<span class="service-name">\n                                    <!--\u5B98\u65B9\u5E97\u94FA-->&nbsp;&nbsp;\u592E\u5E7F\u8D2D\u7269&nbsp;&nbsp;</span>\u53D1\u8D27\uFF0C\u5E76\u63D0\u4F9B\u552E\u540E\u670D\u52A1\u3002</dd>\n                        </dl>\n                    </div>\n                    <div class="ncs-key" id="nc-spec-panel">\n                        <!-- S \u5546\u54C1\u89C4\u683C\u503C-->\n                        <!-- \u65E0\u89C4\u683C\u6A21\u5F0F -->\n                        <!--\u6CA1\u6709\u89C4\u683C-->\n    \n                        <!-- S \u8D2D\u4E70\u6570\u91CF\u53CA\u5E93\u5B58 -->\n                        <div id="modalNullPanel">\n                            <div class="ncs-retail-modal">\n    \n                                <dl>\n                                    <dt class="ncs-number">\u6570\u91CF</dt>\n                                    <dd>\n                                        <div id="rmNumValuePanel" class="amount" style="display: block; "><span\n                                                href="javascript:;" id="mnBuyNumCutBtn" class="minus crisis" title="\u51CF\u5C11"><i\n                                                    class="fa fa-minus" aria-hidden="true">-</i></span>\n                                            <input type="text" name="" id="mnBuyNumInput" value="1" size="3" maxlength="6"\n                                                class="input-text" data-goods-storage="579" data-goods-id="9296"\n                                                data-batch-num0="1" data-batch-num1="0" data-batch-num2="0"\n                                                data-web-price0="184" data-web-price1="0" data-web-price2="0"\n                                                data-limit-amount="0" data-goods-web-usable="0" autocomplete="off">\n                                            <span href="javascript:;" id="mnBuyNumAddBtn" class="plus" title="\u589E\u52A0" data-limit="' + arr[0]["buy_limit"] + '"><i\n                                                    class="fa fa-plus" aria-hidden="true">+</i></span><span class="m-l-5">\n                                                <!--by[szq] \u4FEE\u6539\u5546\u54C1\u5355\u4F4D\u663E\u793A -->\n                                                \u7EC4\n                                                <!--by[szq] \u4FEE\u6539\u5546\u54C1\u5355\u4F4D\u663E\u793A -->\n                                            </span></div>\n                                        <!-- S \u5E93\u5B58\u63D0\u793A-->\n                                        <div class="m-l-10 fl" id="storageHint">\uFF08\u5E93\u5B58<span nctype="goods_stock">' + arr[0]["goods_stock"] + '</span>\n                                            <!--by[szq] \u4FEE\u6539\u5546\u54C1\u5355\u4F4D\u663E\u793A -->\u7EC4\n                                            <!--by[szq] \u4FEE\u6539\u5546\u54C1\u5355\u4F4D\u663E\u793A -->\uFF09</div>\n                                        <div class="m-l-10 fl" id="buyLimitMargin" data-buy-limit="10"\n                                            data-buy-limit-margin="10">\u6BCF\u4EBA\u9650\u8D2D<span>' + arr[0]["buy_limit"] + '</span>\n                                            <!--by[szq] \u4FEE\u6539\u5546\u54C1\u5355\u4F4D\u663E\u793A -->\u7EC4\n                                            <!--by[szq] \u4FEE\u6539\u5546\u54C1\u5355\u4F4D\u663E\u793A -->\n                                        </div>\n                                        <!-- E \u5E93\u5B58\u63D0\u793A-->\n                                    </dd>\n                                </dl>\n                            </div>\n                            <div class="ncs-buy">\n                                <!-- S \u8D2D\u4E70\u6309\u94AE\u7EC4-->\n                                <div class="ncs-btn">\n                                    <!-- \u7ACB\u5373\u8D2D\u4E70--> <a href="javascript:void(0);" id="buyNowSubmitBtn" class="buynow"\n                                        title="\u7ACB\u5373\u8D2D\u4E70">\u7ACB\u5373\u8D2D\u4E70</a> <!-- \u52A0\u5165\u8D2D\u7269\u8F66--> <a href="javascript:void(0);" id="addCartBtn"\n                                        class="addcart" title="\u52A0\u5165\u8D2D\u7269\u8F66"> <i class="fa fa-shopping-cart"></i>\u52A0\u5165\u8D2D\u7269\u8F66 </a> </div>\n                                <!-- S \u8D2D\u4E70\u6309\u94AE\u7EC4-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class="ncs-cti m-t-10">\n                        <dl>\n                            <dt>\u670D\u52A1\u627F\u8BFA</dt>\n                            <dd>\n                                <span>\n                                    <img src="https://statics.cnrmall.com/public/img/cti/7day30.png">\n                                    <a href="javascript:void(0);">15\u5929\u65E0\u7406\u7531\u9000\u6362\u8D27\uFF0C30\u5929\u53EA\u6362\u4E0D\u4FEE</a>\n                                </span>\n                            </dd>\n                        </dl>\n                    </div>\n                    <!-- \u95E8\u5E97\u81EA\u63D0 Begin -->\n    \n                    <div class="ncs-chain-wrap" id="chainPanel" style="display: none">\n                        <div class="chain-title">\n                            <h1>\u7EBF\u4E0B\u95E8\u5E97\u5728\u552E</h1>\n                            <i class="rule" id="btnChainRule"></i>\n                        </div>\n                        <div class="chain-wrap">\n                            <div class="chain-thumb"><img id="chainImage"\n                                    src="https://statics.cnrmall.com/public/img/default_store_avatar.png"></div>\n                            <div class="chain-info">\n                                <div class="chain-name"><span id="chainName"></span>\n                                    <p class="chain-rate" id="chainRate"></p>\n                                </div>\n                                <p class="chain-address" id="chainAddress">\u5317\u4EAC\u5E02\u5927\u5174\u533A\u897F\u7EA2\u95E8\u9547\u5317\u5174\u8DEF\u4E1C\u6BB52\u53F7\u661F\u5149\u5F71\u89C6\u56ED\u65B0\u5A92\u4F53\u5927\u53A6</p>\n                                <a class="more" href="javascript:;" id="btnChainMore">\u66F4\u591A\u95E8\u5E97 &gt;</a> <a class="goto-chain"\n                                    href="javascript:;" id="btnChainBuy">\u9009\u62E9\u95E8\u5E97\u8D2D\u4E70</a>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- End -->\n                </div>\n                <!-- S \u6A71\u7A97\u63A8\u8350-->\n                <div class="ncs-r-mod" id="showCasePanel" data-common-id="5676" data-store-id="1">\n                    <div class="ncs-r-mod-tit">\n                        <h4>\u6A71\u7A97\u63A8\u8350</h4>\n                        <a href="javascript:;" id="showCaseRefreshBtn"><i class="icon fa fa-refresh"></i>\u6362\u4E00\u6279</a>\n                    </div>\n                    <div class="ncs-r-mod-con">\n                        <ul class="ncs-recom-goods" id="showCaseGoodsList">\n                            <li title="\u6D77\u9E25\u7ECF\u5178\u4E94\u661F\u9640\u98DE\u8F6E\u8155\u8868 \u8D27\u53F7125127"><a href="/goods/20860">\n                                    <div class="ncs-recom-goods-thumb">\n                                        <div class="jqthumb" style="width: 120px; height: 120px; opacity: 1;">\n                                            <div\n                                                style="width: 100%; height: 100%; background-image: url(&quot;https://pic4.cnrmall.com/dw/125127/125127_0.jpg?x-oss-process=image/resize,w_160,h_160&quot;); background-repeat: no-repeat; background-position: 50% 50%; background-size: cover;">\n                                            </div>\n                                        </div><img\n                                            src="https://pic4.cnrmall.com/dw/125127/125127_0.jpg?x-oss-process=image/resize,w_160,h_160"\n                                            alt="\u6D77\u9E25\u7ECF\u5178\u4E94\u661F\u9640\u98DE\u8F6E\u8155\u8868 \u8D27\u53F7125127" style="display: none;">\n                                    </div>\n                                    <div class="goods-price"><em><span class="yuan">\uFFE5</span><span\n                                                class="integer">9999</span><span class="pointer">.</span><span\n                                                class="decimal">00</span></em></div>\n                                </a></li>\n                            <li title="\u749E\u7FE0\u9601\u96CD\u5BB9\u534E\u8D35\u7F8A\u8102\u7389\u624B\u956F \u8D27\u53F7123239"><a href="/goods/24896">\n                                    <div class="ncs-recom-goods-thumb">\n                                        <div class="jqthumb" style="width: 120px; height: 120px; opacity: 1;">\n                                            <div\n                                                style="width: 100%; height: 100%; background-image: url(&quot;https://pic1.cnrmall.com/dw/123239/123239_0.jpg?x-oss-process=image/resize,w_160,h_160&quot;); background-repeat: no-repeat; background-position: 50% 50%; background-size: cover;">\n                                            </div>\n                                        </div><img\n                                            src="https://pic1.cnrmall.com/dw/123239/123239_0.jpg?x-oss-process=image/resize,w_160,h_160"\n                                            alt="\u749E\u7FE0\u9601\u96CD\u5BB9\u534E\u8D35\u7F8A\u8102\u7389\u624B\u956F \u8D27\u53F7123239" style="display: none;">\n                                    </div>\n                                    <div class="goods-price"><em><span class="yuan">\uFFE5</span><span\n                                                class="integer">19800</span><span class="pointer">.</span><span\n                                                class="decimal">00</span></em></div>\n                                </a></li>\n                            <li title="\u8001\u6D2A\u796518K\u91D1\u5929\u7136\u7FE0\u7EFF\u7FE1\u7FE0\u540A\u5760 \u8D27\u53F7125558"><a href="/goods/24165">\n                                    <div class="ncs-recom-goods-thumb">\n                                        <div class="jqthumb" style="width: 120px; height: 120px; opacity: 1;">\n                                            <div\n                                                style="width: 100%; height: 100%; background-image: url(&quot;https://pic5.cnrmall.com/image/85/8c/858c89a22c6b4c29efea36adc5b0ee32.jpg?x-oss-process=image/resize,w_160,h_160&quot;); background-repeat: no-repeat; background-position: 50% 50%; background-size: cover;">\n                                            </div>\n                                        </div><img\n                                            src="https://pic5.cnrmall.com/image/85/8c/858c89a22c6b4c29efea36adc5b0ee32.jpg?x-oss-process=image/resize,w_160,h_160"\n                                            alt="\u8001\u6D2A\u796518K\u91D1\u5929\u7136\u7FE0\u7EFF\u7FE1\u7FE0\u540A\u5760 \u8D27\u53F7125558" style="display: none;">\n                                    </div>\n                                    <div class="goods-price"><em><span class="yuan">\uFFE5</span><span\n                                                class="integer">56800</span><span class="pointer">.</span><span\n                                                class="decimal">00</span></em></div>\n                                </a></li>\n                        </ul>\n                    </div>\n                </div>\n                <!--  E \u6A71\u7A97\u63A8\u8350-->\n                <div class="clear"></div>\n            </div>';

                $('.ncs-detail').html(reg);
                showjs();
            }
        });
    };
    showgoods(gid);

    function showjs() {
        $('#topCategoryMenu').css('display', 'none');

        $('.all-category').on('mouseover', function () {
            $('#topCategoryMenu').css('display', 'block');
        });
        $('.all-category').on('mouseout', function () {
            $('#topCategoryMenu').css('display', 'none');
        });

        //足迹前后键
        $('#goodsBrowseContent').on('mouseover', function () {
            $('.bx-prev').css('display', 'inline');
            $('.bx-next').css('display', 'inline');
        });
        $('#goodsBrowseContent').on('mouseout', function () {
            $('.bx-prev').css('display', 'none');
            $('.bx-next').css('display', 'none');
        });

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
                $('.cate-part').css('top', $(window).scrollTop() - oldTop);
            } else if ($(window).scrollTop() < oldTop) {
                $('.cate-part').css('top', 0);
            }
        });
        $('.menu li').on('mouseout', function () {
            // console.log($(this).find('.cate-part'))
            $(this).find('.cate-part').css('display', 'none');
        });

        //
        $('#categoryMenu').children().on('click', function () {
            $(this).siblings().removeClass('current');
            $(this).addClass('current');
        });

        //吸顶
        var SW = $('#main-nav-holder').offset().top;

        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= SW) {
                $('#main-nav').addClass('nav-goods-pin');
            } else if ($(window).scrollTop() < SW) {
                $('#main-nav').removeClass('nav-goods-pin');
            }
        });

        //
        $('#comment_tab').children().on('click', function () {
            $(this).siblings().removeClass('current');
            $(this).addClass('current');
        });

        //放大镜
        // console.log($('#ncsGoodsPicList').children().children())
        // console.log($('#ncsGoodsPicList').find('a'))
        $('#ncsGoodsPicList').find('a').on('mouseover', function () {

            //小图片加框
            $('#ncsGoodsPicList').find('a').removeClass('current');
            $(this).addClass('current');

            //小图片找大图片
            var newNum = $(this).parent().index() + 1;
            $('#Zoomer').find('img').attr('src', '../images/fangda_middle' + newNum + '.jpg');
            $('#fangda_big').find('img').attr('src', '../images/fangda_big.jpg');
        });

        $('#Zoomer').on('mouseover', function () {

            $('.MagicZoomBigImageCont').css('top', '0');
            $('.MagicZoomPup').css({
                display: 'block',
                visibility: 'visible'
            });
        });
        $('#Zoomer').on('mouseout', function () {
            $('.MagicZoomBigImageCont').css('top', '-10000px');
            $('.MagicZoomPup').css({
                display: 'none',
                visibility: 'hidden'
            });
        });

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
            img2.style.left = -sL / percentX + 'px';
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
                    left = 0;
                } else if (left >= img1.offsetWidth - span.offsetWidth) {
                    left = img1.offsetWidth - span.offsetWidth;
                }
                if (top <= 0) {
                    top = 0;
                } else if (top >= img1.offsetHeight - span.offsetHeight) {
                    top = img1.offsetHeight - span.offsetHeight;
                }
                // span.css('left', left + 'px');
                // span.css('top', top + 'px');

                span.style.left = left + 'px';
                span.style.top = top + 'px';
                fangda();
            };
        };
        box.onmouseout = function () {}
        // span.style.display = 'none';
        // box2.style.display = 'none';

        //查cookie中的id
        ;function checkloginid() {
            var arr = document.cookie.split('; ');
            var str = new Object();
            // var islogin = true;
            for (var i = 0; i < arr.length; i++) {
                str[arr[i].split('=')[0]] = arr[i].split('=')[1];
            }
            // console.log(parseInt(str['id']));
            return parseInt(str['id']);
        }
        //加入购物车
        $('#addCartBtn').on('click', function () {
            // console.log($('#mnBuyNumInput').val())
            var gcount = $('#mnBuyNumInput').val();

            checkloginid();
            if (checkloginid() > 0) {
                $.ajax({
                    type: "post", //请求方式
                    url: "../api/checkcart.php", //路径
                    async: true, //异步
                    data: {
                        gid: gid,
                        num: gcount
                    }, //传输给后台的数据
                    success: function success(str) {
                        var arr = JSON.parse(str);
                        // console.log(arr)
                        if (arr.list == '超过限购量') {
                            alert(arr.list);
                        } else if (arr.list == '未超过限购量') {
                            alert(arr.message);
                        }

                        listcartnum();
                    }
                });
            } else {
                location.href = 'http://localhost:1811/liangjiayong/src/html/login.html';
            }
        });

        //小购物车的数量
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
                    success: function success(str) {
                        var arr = JSON.parse(str);

                        // console.log(arr.length)
                        $('#tbarCartNum').html(arr.length);
                        $('.my-cart-count').html(arr.length);
                    }
                });
            } else {
                $('#tbarCartNum').css('display', 'none');
                $('.my-cart-count').css('display', 'none');
            }
        }

        //加减数量
        $('#mnBuyNumAddBtn').on('click', function () {
            // console.log($(this).attr('data-id'))
            var lNUM = $(this).attr('data-limit');
            var TNUM = $('#mnBuyNumInput').val() * 1;
            console.log($('#mnBuyNumInput').val());
            if (TNUM >= lNUM) {
                $('#mnBuyNumInput').val(lNUM);
            } else {
                TNUM++;
                $('#mnBuyNumInput').val(TNUM);
                $('#mnBuyNumCutBtn').css('cursor', 'pointer');
            }
        });

        $('#mnBuyNumCutBtn').on('click', function () {
            var TNUM = $('#mnBuyNumInput').val() * 1;
            if (TNUM <= 1) {
                TNUM = 1;
                $('#mnBuyNumCutBtn').css('cursor', 'not-allowed');
            } else if (TNUM > 1) {
                TNUM--;
                $('#mnBuyNumCutBtn').css('cursor', 'pointer');
            }
            $('#mnBuyNumInput').val(TNUM);
        });
    }
});