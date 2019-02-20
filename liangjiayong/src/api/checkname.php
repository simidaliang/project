<?php
//查询数据库
include 'connect.php';
header("content-type:text/html;charset=utf-8");


//接收前端传来的数据
$username = isset($_POST['username']) ? $_POST['username'] : '';


// $username = '梁1';
// $psw =  '';
//写查询语句:按需查询数据，每一次只查询一页数据


	$sql = "SELECT * FROM register where name = '$username'";
	
	//执行语句:得到的返回值是一个结果集
	$res = $conn->query($sql);
	
	
	//获取结果集里面的内容部分
    $row = $res->fetch_all(MYSQLI_ASSOC);//对象格式  [{},{},{}]
        // var_dump($row);  
        // $rs = $this->db->get("SELECT * FROM `register` WHERE `name`='{$username}'"    
        // setcookie('uid', $rs['uid'], time() + 3600*60, '/');
        if($row){
            $good=array(
                'code'=>'1',
                'list' => $row,
                'message'=>'该用户名已被注册',
               
            );
        }else{
             $good=array(
                'code'=>'0',
                'list' => $row,
                'message'=>'该用户名可以注册'
              
            ); 
           
            
        }

    //     //把对象转成字符串，echo给前端
        echo json_encode($good,JSON_UNESCAPED_UNICODE);
       
      
       
        $conn->close();








?>