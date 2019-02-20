<?php
//查询数据库
include 'connect.php';
header("content-type:text/html;charset=utf-8");


//接收前端传来的数据
$username = isset($_POST['username']) ? $_POST['username'] : '';
$psw = isset($_POST['psw']) ? $_POST['psw'] : '';

// $username = '梁1';
// $psw =  '';
//写查询语句:按需查询数据，每一次只查询一页数据


	$sql = "SELECT * FROM register where name = '$username'";
	
	//执行语句:得到的返回值是一个结果集
	$res = $conn->query($sql);
	
	
	//获取结果集里面的内容部分
    $row = $res->fetch_all(MYSQLI_ASSOC);//对象格式  [{},{},{}]
        // var_dump($row);  
        $good=array(
            'code'=>'0',
            'list' => $row,
            'message'=>'注册成功'
        ); 
        $res2 = $conn->query("INSERT INTO register (name,psw) VALUES('$username','$psw')");
        
        
       
    //     //把对象转成字符串，echo给前端
        echo json_encode($good,JSON_UNESCAPED_UNICODE);
       
      
       
        $conn->close();








?>