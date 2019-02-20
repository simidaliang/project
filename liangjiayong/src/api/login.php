<?php
//查询数据库
include 'connect.php';
header("content-type:text/html;charset=utf-8");


//接收前端传来的数据
$username = isset($_POST['username']) ? $_POST['username'] : '';
$psw = isset($_POST['psw']) ? $_POST['psw'] : '';

// $username = '梁1';
// $psw =  '23132';
// 写查询语句:按需查询数据，每一次只查询一页数据


	$sql = "SELECT * FROM register where name = '$username' AND psw = '$psw'";
	
	//执行语句:得到的返回值是一个结果集
	$res = $conn->query($sql);
	
	
	//获取结果集里面的内容部分
    $row = $res->fetch_all(MYSQLI_ASSOC);//对象格式  [{},{},{}]
        // var_dump($row);  
        
        
        if($row){
           
            $good=array(
                'code'=>'1',
                'list'=>$row,
                'message'=>'登录成功'
            );
        }else{
             $good=array(
                'code'=>'0',
                'message'=>'用户名或密码错误'
            );                       
        }
        // var_dump ($good);
    //     if(in_array($username,$goodslist)){
    //         echo 'code=1';
    //     }
    //     //把对象转成字符串，echo给前端
        echo json_encode($good,JSON_UNESCAPED_UNICODE);
        
      
       
        $conn->close();








?>