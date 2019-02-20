$(function () {
    //  nav


    //首页渲染底部的商品

    function showlist() {

        $.ajax({
            type: "post", //请求方式
            url: "api/getdata.php", //路径
            async: true, //异步
            //传输给后台的数据
            success: function (str) {
                var arr = JSON.parse(str);
                // console.log(arr)
                var str = '';

                for (var i = 0; i < 45; i++) {
                    str += `<li class="bz-more-goods">
                        <a class="bz-more-goods-lk" href="http://localhost:1811/liangjiayong/src/html/goods.html?goods=${arr[i]['gid']}" target="_blank" title="${arr[i]["goods_name1"]}">
                            <img class="bz-more-photo J-lazy"
                                src="${arr[i]["index_pic"]}"
                                
                                alt="${arr[i]["goods_name1"]}" style="display: inline-block;">
                            <div class="bz-more-info">
                                <p class="bz-more-info-name">${arr[i]["goods_name1"]}</p>
                                <p class="bz-more-info-price"> <span class="bz-more-info-price-txt">
                                        <span class="yuan">￥</span><span class="integer">${arr[i]["goods_price"]}</span><span
                                            class="pointer">.</span><span class="decimal">00</span>
                                    </span> </p>
                            </div>
                        </a>
                    </li>`;
                }

                $('.bz-more-list').html(str);
            }
        });
    }
    showlist();
})
