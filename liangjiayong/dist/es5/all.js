"use strict";

$(function () {
    //  nav


    //首页渲染底部的商品

    function showlist() {

        $.ajax({
            type: "post", //请求方式
            url: "api/getdata.php", //路径
            async: true, //异步
            //传输给后台的数据
            success: function success(str) {
                var arr = JSON.parse(str);
                // console.log(arr)
                var str = '';

                for (var i = 0; i < 45; i++) {
                    str += "<li class=\"bz-more-goods\">\n                        <a class=\"bz-more-goods-lk\" href=\"http://localhost:1811/liangjiayong/src/html/goods.html?goods=" + arr[i]['gid'] + "\" target=\"_blank\" title=\"" + arr[i]["goods_name1"] + "\">\n                            <img class=\"bz-more-photo J-lazy\"\n                                src=\"" + arr[i]["index_pic"] + "\"\n                                \n                                alt=\"" + arr[i]["goods_name1"] + "\" style=\"display: inline-block;\">\n                            <div class=\"bz-more-info\">\n                                <p class=\"bz-more-info-name\">" + arr[i]["goods_name1"] + "</p>\n                                <p class=\"bz-more-info-price\"> <span class=\"bz-more-info-price-txt\">\n                                        <span class=\"yuan\">\uFFE5</span><span class=\"integer\">" + arr[i]["goods_price"] + "</span><span\n                                            class=\"pointer\">.</span><span class=\"decimal\">00</span>\n                                    </span> </p>\n                            </div>\n                        </a>\n                    </li>";
                }

                $('.bz-more-list').html(str);
            }
        });
    }
    showlist();
});