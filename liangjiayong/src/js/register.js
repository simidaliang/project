$(function () {
    //验证码初始化
    $('.verify_code').html(yzm());
    //检查用户名
    var reg = 1;
    $('#mobile').on('blur', function () {
        var user = $('#mobile').val().trim();
        if (user) {
            $.ajax({
                type: "post", //请求方式
                url: "../api/checkname.php", //路径
                async: true, //异步
                data: {
                    username: user
                }, //传输给后台的数据
                success: function (str) {
                    console.log(str)
                    var arr = JSON.parse(str);

                    reg = arr.code;
                    // console.log(reg)
                    checkname(arr);
                }
            });
        } else {
            alert('用户名不能为空');
        }


        function checkname(arr) {
            // var arr = JSON.parse(str);
            //dom操作
            if (!arr.code) {
                $('.error').css('display', 'none');
            } else {
                $('.error').css('display', 'block');
            }
            $('.error').html(arr.message)
        }
    });

    $('#mobileSubmitFirst').on('click', function () {
        // console.log(reg)
        if ($('#psw').val()) {
            if (reg * 1) {
                alert('注册失败');
            } else {
                $.ajax({
                    type: "post", //请求方式
                    url: "../api/register.php", //路径
                    async: true, //异步
                    data: {
                        username: $('#mobile').val().trim(),
                        psw: $('#psw').val()
                    }, //传输给后台的数据
                    success: function (str) {

                        var arr = JSON.parse(str);
                        console.log(arr.code)
                        if (arr.code == 0) {
                            alert(arr.message);
                            location.href = '../html/login.html';
                        }
                    }
                });
            }
        } else {
            alert('密码不能为空');
        }

    })



    //登录
    $('#loginSubmit').on('click', function () {
        if ($('#loginName').val() && $('#memberPwd')) {
            if ($('#captcha').val().toLowerCase() == $('.verify_code').html().toLowerCase()) {
                $.ajax({
                    type: "post", //请求方式
                    url: "../api/login.php", //路径
                    async: true, //异步
                    data: {
                        username: $('#loginName').val().trim(),
                        psw: $('#memberPwd').val()
                    }, //传输给后台的数据
                    success: function (str) {

                        var arr = JSON.parse(str);
                        if (arr.code == 1) {
                            // + ";expires=" 删除cookie
                            document.cookie = 'id=' + arr.list[0].id + ';path=/';
                            document.cookie = 'name=' + arr.list[0].name + ';path=/';
                            location.href = '../ind.html';

                        } else {
                            alert(arr.message)
                        }

                        // if (arr.code == 0) {
                        //     alert(arr.message);
                        //     location.href = '../html/login.html';
                        // }
                    }
                });
            } else {
                alert('验证码错误')
            }

        } else {
            alert('用户名或密码不能为空')
        }

    })

    // $('#captcha').val().toLowerCase();

    $('.code-pic').on('mouseover', function () {
        $(this).css('opacity', '1')
    });
    $('.code-pic').on('mouseout', function () {
        $(this).css('opacity', '0')
    });




    $('.code-pic').on('click', function () {
        $('.verify_code').html(yzm());
    })


    //构造验证码函数    
    function yzm() {
        var str = '1234567890qwertyuiopadsfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        var res = '';
        for (var i = 0; i < 4; i++) {
            var a = str.charAt(parseInt(Math.random() * str.length))
            res += a;
        }
        return res;
    }



})