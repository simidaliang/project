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
                gid: gid,

            }, //传输给后台的数据
            success: function (str) {
                var arr = JSON.parse(str);
                // console.log(arr[0])
                var reg = `<div class="ncs-detail">
                <!-- S 商品图片 -->
                <div id="ncsGoodsPicture" class="ncs-goods-picture image_zoom">
                    <!--大图--> <a id="Zoomer" href="" class="MagicZoomPlus"
                        rel="selectors-effect: false; zoom-width: 650; zoom-height: 500; expand-size: original" title=""
                        style="position: relative; display: inline-block; text-decoration: none; outline: 0px; margin: auto; width: 360px; height: 360px;"><img
                            src="../${arr[0]["goods_pic_show"]}" style="opacity: 1;">
                        <div class="MagicZoomPup"
                            style="z-index: 10; position: absolute; overflow: hidden; display: none; visibility: hidden; width: 291px; height: 223px; opacity: 0.5; left: 67px; top: 0px;">
                        </div>
                        <div class="MagicZoomBigImageCont"
                            style="overflow: hidden; z-index: 100; top: -10000px; position: absolute; width: 650px; height: 500px; opacity: 1; left: 375px;">
                            <div class="MagicZoomHeader"
                                style="position: relative; z-index: 10; left: 0px; top: 0px; padding: 3px; display: none; visibility: hidden;">
                            </div>
                            <div style="overflow: hidden;" id="fangda_big"><img src="../images/fangda_big.jpg"
                                    style="padding: 0px; margin: 0px; border: 0px; position: relative; left: -149px; top: 0px;">
                            </div>
                            <!-- <div
                                style="color: rgb(255, 255, 255); font-size: 12px; font-weight: normal; position: absolute; width: 95%; text-align: right; display: none; top: 480px;">
                                </div> -->
                        </div>
    
                    </a>
                    <!--小图-->
                    <div class="controller"> <a title="向前" id="GoodsPicPrevBtn" class="cBtn prev fa fa-angle-left"
                            href="javascript:;"></a>
                        <div class="goods-pic-box">
                            <ul id="ncsGoodsPicList" style="width: 325px;">
                                <li data-color-id="0"> <a href="javascript:;"
                                        rev-herf="https://pic1.cnrmall.com/image/b5/5a/b55a0cde48baeed0787d663d8bd2d59a.jpg"
                                        rev="https://pic5.cnrmall.com/image/b5/5a/b55a0cde48baeed0787d663d8bd2d59a.jpg@360w_360h"
                                        class=""> <img src="../${arr[0]["goods_pic_small1"]}">
                                    </a>
                                </li>
                                <li data-color-id="0"> <a href="javascript:;"
                                        rev-herf="https://pic4.cnrmall.com/image/a0/0a/a00aae2332372d63e14852154c485a2a.jpg"
                                        rev="https://pic3.cnrmall.com/image/a0/0a/a00aae2332372d63e14852154c485a2a.jpg@360w_360h"
                                        class=""> <img src="../${arr[0]["goods_Pic_small2"]}">
                                    </a>
                                </li>
                                <li data-color-id="0"> <a href="javascript:;"
                                        rev-herf="https://pic4.cnrmall.com/image/ec/ae/ecaee17cbbaaebc3a61f763d909a3a17.jpg"
                                        rev="https://pic5.cnrmall.com/image/ec/ae/ecaee17cbbaaebc3a61f763d909a3a17.jpg@360w_360h"
                                        class="current"> <img src="../images/fangda_small3.jpg">
                                    </a>
                                </li>
                                <li data-color-id="0"> <a href="javascript:;"
                                        rev-herf="https://pic1.cnrmall.com/image/19/93/199364cf83fbb0d19df9f2b17183bfc7.jpg"
                                        rev="https://pic4.cnrmall.com/image/19/93/199364cf83fbb0d19df9f2b17183bfc7.jpg@360w_360h"
                                        class=""> <img src="../images/fangda_small4.jpg">
                                    </a>
                                </li>
                                <li data-color-id="0"> <a href="javascript:;"
                                        rev-herf="https://pic2.cnrmall.com/image/14/ea/14ea108dffa6bff1fcb823218c2c223b.jpg"
                                        rev="https://pic5.cnrmall.com/image/14/ea/14ea108dffa6bff1fcb823218c2c223b.jpg@360w_360h"
                                        class=""> <img src="../images/fangda_small1.jpg">
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a title="向后" id="GoodsPicNextBtn" class="cBtn next fa fa-angle-right" href="javascript:;"></a>
                    </div>
                    <!-- E 商品图片 -->
                    <div class="ncs-handle" id="content"> <a href="javascript:;" class="favorite"
                            nc_type="goodsFavoritesBtn" data-param="{'commonId':'5676'}"><i class="fa fa-star-o"
                                aria-hidden="true"></i>收藏商品<em class="m-l-5" nc_type="goodsFavoritesNum">0</em> </a>
                        <div class="share"><i class="fa fa-share-alt" aria-hidden="true"></i>分享<i
                                class="m-l-5 fa fa-caret-down" aria-hidden="true"></i> <!-- JiaThis Button BEGIN -->
                            <!-- <input type="hidden" name="jiathisImage" value="https://pic1.cnrmall.com/image/b5/5a/b55a0cde48baeed0787d663d8bd2d59a.jpg@160w_160h"/> -->
                            <!-- <input type="hidden" name="jiathisImage" value="https://pic3.cnrmall.com/image/a0/0a/a00aae2332372d63e14852154c485a2a.jpg@160w_160h"/> -->
                            <!-- <input type="hidden" name="jiathisImage" value="https://pic5.cnrmall.com/image/ec/ae/ecaee17cbbaaebc3a61f763d909a3a17.jpg@160w_160h"/> -->
                            <!-- <input type="hidden" name="jiathisImage" value="https://pic2.cnrmall.com/image/19/93/199364cf83fbb0d19df9f2b17183bfc7.jpg@160w_160h"/> -->
                            <!-- <input type="hidden" name="jiathisImage" value="https://pic3.cnrmall.com/image/14/ea/14ea108dffa6bff1fcb823218c2c223b.jpg@160w_160h"/> -->
                            <sub class="J-share-data" data-title="${arr[0]["goods_name1"]}" data-summary="${arr[0]["goods_name2"]}"
                                data-url="/goods/5676"
                                data-wap-url="https://m1.cnrmall.com/tmpl/product_detail.html?commonId=5676"
                                data-pic="https://pic5.cnrmall.com/image/b5/5a/b55a0cde48baeed0787d663d8bd2d59a.jpg@160w_160h||https://pic3.cnrmall.com/image/a0/0a/a00aae2332372d63e14852154c485a2a.jpg@160w_160h||https://pic5.cnrmall.com/image/ec/ae/ecaee17cbbaaebc3a61f763d909a3a17.jpg@160w_160h||https://pic4.cnrmall.com/image/19/93/199364cf83fbb0d19df9f2b17183bfc7.jpg@160w_160h||https://pic3.cnrmall.com/image/14/ea/14ea108dffa6bff1fcb823218c2c223b.jpg@160w_160h">
                                <a class="J-share-btn" href="javascript:;" style="font-size: 12px;"
                                    data-web-id="tsina">新浪</a> <a class="J-share-btn" href="javascript:;"
                                    style="font-size: 12px;" data-web-id="weixin">微信</a> </sub> <!-- JiaThis Button END -->
                        </div>
                        <a href="javascript:;" class="goods-QRcode"><i class="fa fa-qrcode" aria-hidden="true"></i>移动端购买
                            <div class="QRcode-pic"><img src="https://pic4.cnrmall.com/qr/1/5676.gif"></div>
                        </a>
                    </div>
                </div>
                <!-- E 商品图片及收藏分享 -->
                <!-- S 商品基本信息 -->
                <!-- S 商品规格值-->
                <!-- 零售/虚拟/海外模式 -->
                <!-- 零售 -->
    
                <!-- S 商品基本信息 -->
    
                <div class="ncs-goods-summary model-retail">
                    <div class="ncs-goods-tag"></div>
                    <div class="ncs-goods-name">
                        <h1>${arr[0]["goods_name1"]}</h1>
                        <strong>${arr[0]["goods_name2"]}</strong>
                    </div>
                    <div class="ncs-meta pr">
                        <!-- S 商品价格 -->
                        <dl class="goods-price" id="goodsPriceHtml">
                            <dt>价格</dt>
                            <dd><span class="goods-price-real"><strong id="rmPrice" class="number number-thin">
                                        <span class="yuan">￥</span><span class="integer">${arr[0]["goods_price"]}</span>
                                    </strong><sub class="original-price" id="basePrice" style="display: none !important">
                                        原价：
                                        <span class="yuan">￥</span><span class="integer">${arr[0]["goods_price"]}</span>
                                    </sub></span> </dd>
                        </dl>
                        <!-- S 兑换码 -->
                        <!-- E 兑换码 -->
                        <!-- S 税率 -->
                        <!-- E 税率 -->
                        <!-- E 商品价格 -->
                    </div>
    
                    <!-- S 商品赠品 -->
                    <div class="goods-gift" id="goodsGiftHtml"> </div>
                    <!-- E 商品赠品 -->
                    <!-- S 优惠布局展示-->
    
                    <!-- S 物流与运费新布局展示  -->
                    <div class="ncs-logistics">
                        <dl id="ncs-freight" class="ncs-freight">
                            <dt>物流</dt>
                            <dd class="ncs-freight_box">
                                <div class="fl m-r-5">配送至</div>
                                <div id="ncsFreightSelector" class="ncs-freight-select">
                                    <div class="text">
                                        <div id="areaInfoText">广东省广州市荔湾区</div>
                                        <b>∨</b>
                                    </div>
                                    <div class="content" style="display: none;">
                                        <div id="ncs-stock" class="ncs-stock" data-widget="tabs">
                                            <div class="mt">
                                                <ul class="tab" id="ncsTopTabs">
                                                    <li data-index="0" data-widget="tab-item" class=""> <a href="#none"
                                                            class="hover"><em>广东省</em><i> ∨</i></a> </li>
                                                    <li data-index="1" data-widget="tab-item" class=""><a
                                                            href="javascript:;" class="hover"><em>广州市</em><i> ∨</i></a></li>
                                                    <li data-index="2" data-widget="tab-item" class=""><a
                                                            href="javascript:;" class="hover"><em>荔湾区</em><i> ∨</i></a></li>
                                                </ul>
                                            </div>
                                            <div id="stockItem_0" data-widget="tab-content" data-area="0"
                                                style="display: none;">
                                                <ul class="area-list">
                                                    <li><a data-value="1" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">北京市</a></li>
                                                    <li><a data-value="2" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">天津市</a></li>
                                                    <li><a data-value="3" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">河北省</a></li>
                                                    <li><a data-value="4" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">山西省</a></li>
                                                    <li><a data-value="5" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">内蒙古自治区</a></li>
                                                    <li><a data-value="6" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">辽宁省</a></li>
                                                    <li><a data-value="7" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">吉林省</a></li>
                                                    <li><a data-value="8" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">黑龙江省</a></li>
                                                    <li><a data-value="9" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">上海市</a></li>
                                                    <li><a data-value="10" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">江苏省</a></li>
                                                    <li><a data-value="11" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">浙江省</a></li>
                                                    <li><a data-value="12" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">安徽省</a></li>
                                                    <li><a data-value="13" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">福建省</a></li>
                                                    <li><a data-value="14" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">江西省</a></li>
                                                    <li><a data-value="15" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">山东省</a></li>
                                                    <li><a data-value="16" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">河南省</a></li>
                                                    <li><a data-value="17" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">湖北省</a></li>
                                                    <li><a data-value="18" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">湖南省</a></li>
                                                    <li><a data-value="19" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">广东省</a></li>
                                                    <li><a data-value="20" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">广西壮族自治区</a></li>
                                                    <li><a data-value="21" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">海南省</a></li>
                                                    <li><a data-value="22" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">重庆市</a></li>
                                                    <li><a data-value="23" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">四川省</a></li>
                                                    <li><a data-value="24" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">贵州省</a></li>
                                                    <li><a data-value="25" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">云南省</a></li>
                                                    <li><a data-value="26" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">西藏自治区</a></li>
                                                    <li><a data-value="27" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">陕西省</a></li>
                                                    <li><a data-value="28" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">甘肃省</a></li>
                                                    <li><a data-value="29" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">青海省</a></li>
                                                    <li><a data-value="30" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">宁夏回族自治区</a></li>
                                                    <li><a data-value="31" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">新疆维吾尔自治区</a></li>
                                                    <li><a data-value="32" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">台湾省</a></li>
                                                    <li><a data-value="33" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">香港特别行政区</a></li>
                                                    <li><a data-value="34" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">澳门特别行政区</a></li>
                                                    <li><a data-value="35" data-deep="1" data-area-parent-id="0"
                                                            href="javascript:;">海外</a></li>
                                                </ul>
                                            </div>
                                            <div id="stockItem_1" data-widget="tab-content" data-area="1"
                                                style="display: none;">
                                                <ul class="area-list">
                                                    <li><a data-value="289" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">广州市</a></li>
                                                    <li><a data-value="290" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">韶关市</a></li>
                                                    <li><a data-value="291" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">深圳市</a></li>
                                                    <li><a data-value="292" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">珠海市</a></li>
                                                    <li><a data-value="293" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">汕头市</a></li>
                                                    <li><a data-value="294" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">佛山市</a></li>
                                                    <li><a data-value="295" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">江门市</a></li>
                                                    <li><a data-value="296" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">湛江市</a></li>
                                                    <li><a data-value="297" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">茂名市</a></li>
                                                    <li><a data-value="298" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">肇庆市</a></li>
                                                    <li><a data-value="299" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">惠州市</a></li>
                                                    <li><a data-value="300" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">梅州市</a></li>
                                                    <li><a data-value="301" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">汕尾市</a></li>
                                                    <li><a data-value="302" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">河源市</a></li>
                                                    <li><a data-value="303" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">阳江市</a></li>
                                                    <li><a data-value="304" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">清远市</a></li>
                                                    <li><a data-value="305" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">东莞市</a></li>
                                                    <li><a data-value="306" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">中山市</a></li>
                                                    <li><a data-value="307" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">潮州市</a></li>
                                                    <li><a data-value="308" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">揭阳市</a></li>
                                                    <li><a data-value="309" data-deep="2" data-area-parent-id="19"
                                                            href="javascript:;">云浮市</a></li>
                                                </ul>
                                            </div>
                                            <div id="stockItem_2" data-widget="tab-content" data-area="2">
                                                <ul class="area-list">
                                                    <li><a data-value="3118" data-deep="3" data-area-parent-id="289"
                                                            href="javascript:;">荔湾区</a></li>
                                                    <li><a data-value="3119" data-deep="3" data-area-parent-id="289"
                                                            href="javascript:;">越秀区</a></li>
                                                    <li><a data-value="3120" data-deep="3" data-area-parent-id="289"
                                                            href="javascript:;">海珠区</a></li>
                                                    <li><a data-value="3121" data-deep="3" data-area-parent-id="289"
                                                            href="javascript:;">天河区</a></li>
                                                    <li><a data-value="3122" data-deep="3" data-area-parent-id="289"
                                                            href="javascript:;">白云区</a></li>
                                                    <li><a data-value="3123" data-deep="3" data-area-parent-id="289"
                                                            href="javascript:;">黄埔区</a></li>
                                                    <li><a data-value="3124" data-deep="3" data-area-parent-id="289"
                                                            href="javascript:;">番禺区</a></li>
                                                    <li><a data-value="3125" data-deep="3" data-area-parent-id="289"
                                                            href="javascript:;">花都区</a></li>
                                                    <li><a data-value="3126" data-deep="3" data-area-parent-id="289"
                                                            href="javascript:;">南沙区</a></li>
                                                    <li><a data-value="3127" data-deep="3" data-area-parent-id="289"
                                                            href="javascript:;">从化区</a></li>
                                                    <li><a data-value="3128" data-deep="3" data-area-parent-id="289"
                                                            href="javascript:;">增城区</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!--<a href="javascript:;" class="close" id="areaPanelClose">关闭</a>-->
                                </div>
                                <div id="ncs-freight-prompt"><strong>有货</strong><span>免运费</span></div>
                            </dd>
                        </dl>
                    </div>
                    <!-- E 物流与运费新布局展示  -->
                    <!-- 服务 -->
                    <div class="ncs-service">
                        <dl>
                            <dt>服务</dt>
                            <dd>由<span class="service-name">
                                    <!--官方店铺-->&nbsp;&nbsp;央广购物&nbsp;&nbsp;</span>发货，并提供售后服务。</dd>
                        </dl>
                    </div>
                    <div class="ncs-key" id="nc-spec-panel">
                        <!-- S 商品规格值-->
                        <!-- 无规格模式 -->
                        <!--没有规格-->
    
                        <!-- S 购买数量及库存 -->
                        <div id="modalNullPanel">
                            <div class="ncs-retail-modal">
    
                                <dl>
                                    <dt class="ncs-number">数量</dt>
                                    <dd>
                                        <div id="rmNumValuePanel" class="amount" style="display: block; "><span
                                                href="javascript:;" id="mnBuyNumCutBtn" class="minus crisis" title="减少"><i
                                                    class="fa fa-minus" aria-hidden="true">-</i></span>
                                            <input type="text" name="" id="mnBuyNumInput" value="1" size="3" maxlength="6"
                                                class="input-text" data-goods-storage="579" data-goods-id="9296"
                                                data-batch-num0="1" data-batch-num1="0" data-batch-num2="0"
                                                data-web-price0="184" data-web-price1="0" data-web-price2="0"
                                                data-limit-amount="0" data-goods-web-usable="0" autocomplete="off">
                                            <span href="javascript:;" id="mnBuyNumAddBtn" class="plus" title="增加" data-limit="${arr[0]["buy_limit"]}"><i
                                                    class="fa fa-plus" aria-hidden="true">+</i></span><span class="m-l-5">
                                                <!--by[szq] 修改商品单位显示 -->
                                                组
                                                <!--by[szq] 修改商品单位显示 -->
                                            </span></div>
                                        <!-- S 库存提示-->
                                        <div class="m-l-10 fl" id="storageHint">（库存<span nctype="goods_stock">${arr[0]["goods_stock"]}</span>
                                            <!--by[szq] 修改商品单位显示 -->组
                                            <!--by[szq] 修改商品单位显示 -->）</div>
                                        <div class="m-l-10 fl" id="buyLimitMargin" data-buy-limit="10"
                                            data-buy-limit-margin="10">每人限购<span>${arr[0]["buy_limit"]}</span>
                                            <!--by[szq] 修改商品单位显示 -->组
                                            <!--by[szq] 修改商品单位显示 -->
                                        </div>
                                        <!-- E 库存提示-->
                                    </dd>
                                </dl>
                            </div>
                            <div class="ncs-buy">
                                <!-- S 购买按钮组-->
                                <div class="ncs-btn">
                                    <!-- 立即购买--> <a href="javascript:void(0);" id="buyNowSubmitBtn" class="buynow"
                                        title="立即购买">立即购买</a> <!-- 加入购物车--> <a href="javascript:void(0);" id="addCartBtn"
                                        class="addcart" title="加入购物车"> <i class="fa fa-shopping-cart"></i>加入购物车 </a> </div>
                                <!-- S 购买按钮组-->
                            </div>
                        </div>
                    </div>
                    <div class="ncs-cti m-t-10">
                        <dl>
                            <dt>服务承诺</dt>
                            <dd>
                                <span>
                                    <img src="https://statics.cnrmall.com/public/img/cti/7day30.png">
                                    <a href="javascript:void(0);">15天无理由退换货，30天只换不修</a>
                                </span>
                            </dd>
                        </dl>
                    </div>
                    <!-- 门店自提 Begin -->
    
                    <div class="ncs-chain-wrap" id="chainPanel" style="display: none">
                        <div class="chain-title">
                            <h1>线下门店在售</h1>
                            <i class="rule" id="btnChainRule"></i>
                        </div>
                        <div class="chain-wrap">
                            <div class="chain-thumb"><img id="chainImage"
                                    src="https://statics.cnrmall.com/public/img/default_store_avatar.png"></div>
                            <div class="chain-info">
                                <div class="chain-name"><span id="chainName"></span>
                                    <p class="chain-rate" id="chainRate"></p>
                                </div>
                                <p class="chain-address" id="chainAddress">北京市大兴区西红门镇北兴路东段2号星光影视园新媒体大厦</p>
                                <a class="more" href="javascript:;" id="btnChainMore">更多门店 &gt;</a> <a class="goto-chain"
                                    href="javascript:;" id="btnChainBuy">选择门店购买</a>
                            </div>
                        </div>
                    </div>
                    <!-- End -->
                </div>
                <!-- S 橱窗推荐-->
                <div class="ncs-r-mod" id="showCasePanel" data-common-id="5676" data-store-id="1">
                    <div class="ncs-r-mod-tit">
                        <h4>橱窗推荐</h4>
                        <a href="javascript:;" id="showCaseRefreshBtn"><i class="icon fa fa-refresh"></i>换一批</a>
                    </div>
                    <div class="ncs-r-mod-con">
                        <ul class="ncs-recom-goods" id="showCaseGoodsList">
                            <li title="海鸥经典五星陀飞轮腕表 货号125127"><a href="/goods/20860">
                                    <div class="ncs-recom-goods-thumb">
                                        <div class="jqthumb" style="width: 120px; height: 120px; opacity: 1;">
                                            <div
                                                style="width: 100%; height: 100%; background-image: url(&quot;https://pic4.cnrmall.com/dw/125127/125127_0.jpg?x-oss-process=image/resize,w_160,h_160&quot;); background-repeat: no-repeat; background-position: 50% 50%; background-size: cover;">
                                            </div>
                                        </div><img
                                            src="https://pic4.cnrmall.com/dw/125127/125127_0.jpg?x-oss-process=image/resize,w_160,h_160"
                                            alt="海鸥经典五星陀飞轮腕表 货号125127" style="display: none;">
                                    </div>
                                    <div class="goods-price"><em><span class="yuan">￥</span><span
                                                class="integer">9999</span><span class="pointer">.</span><span
                                                class="decimal">00</span></em></div>
                                </a></li>
                            <li title="璞翠阁雍容华贵羊脂玉手镯 货号123239"><a href="/goods/24896">
                                    <div class="ncs-recom-goods-thumb">
                                        <div class="jqthumb" style="width: 120px; height: 120px; opacity: 1;">
                                            <div
                                                style="width: 100%; height: 100%; background-image: url(&quot;https://pic1.cnrmall.com/dw/123239/123239_0.jpg?x-oss-process=image/resize,w_160,h_160&quot;); background-repeat: no-repeat; background-position: 50% 50%; background-size: cover;">
                                            </div>
                                        </div><img
                                            src="https://pic1.cnrmall.com/dw/123239/123239_0.jpg?x-oss-process=image/resize,w_160,h_160"
                                            alt="璞翠阁雍容华贵羊脂玉手镯 货号123239" style="display: none;">
                                    </div>
                                    <div class="goods-price"><em><span class="yuan">￥</span><span
                                                class="integer">19800</span><span class="pointer">.</span><span
                                                class="decimal">00</span></em></div>
                                </a></li>
                            <li title="老洪祥18K金天然翠绿翡翠吊坠 货号125558"><a href="/goods/24165">
                                    <div class="ncs-recom-goods-thumb">
                                        <div class="jqthumb" style="width: 120px; height: 120px; opacity: 1;">
                                            <div
                                                style="width: 100%; height: 100%; background-image: url(&quot;https://pic5.cnrmall.com/image/85/8c/858c89a22c6b4c29efea36adc5b0ee32.jpg?x-oss-process=image/resize,w_160,h_160&quot;); background-repeat: no-repeat; background-position: 50% 50%; background-size: cover;">
                                            </div>
                                        </div><img
                                            src="https://pic5.cnrmall.com/image/85/8c/858c89a22c6b4c29efea36adc5b0ee32.jpg?x-oss-process=image/resize,w_160,h_160"
                                            alt="老洪祥18K金天然翠绿翡翠吊坠 货号125558" style="display: none;">
                                    </div>
                                    <div class="goods-price"><em><span class="yuan">￥</span><span
                                                class="integer">56800</span><span class="pointer">.</span><span
                                                class="decimal">00</span></em></div>
                                </a></li>
                        </ul>
                    </div>
                </div>
                <!--  E 橱窗推荐-->
                <div class="clear"></div>
            </div>`;

                $('.ncs-detail').html(reg);
                showjs();


            }
        })
    };
    showgoods(gid);



    function showjs() {
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
        //查cookie中的id
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
                    success: function (str) {
                        var arr = JSON.parse(str);
                        // console.log(arr)
                        if (arr.list == '超过限购量') {
                            alert(arr.list);
                        } else if (arr.list == '未超过限购量') {
                            alert(arr.message);
                        }


                        listcartnum();
                    }
                })

            } else {
                location.href = 'http://localhost:1811/liangjiayong/src/html/login.html';

            }
        })

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

        //加减数量
        $('#mnBuyNumAddBtn').on('click', function () {
            // console.log($(this).attr('data-id'))
            var lNUM = $(this).attr('data-limit');
            var TNUM = $('#mnBuyNumInput').val() * 1;
            console.log($('#mnBuyNumInput').val())
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

})