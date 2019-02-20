<?php
//查询数据库
include 'connect.php';
header("content-type:text/html;charset=utf-8");


//接收前端传来的数据
$gid = isset($_POST['gid']) ? $_POST['gid'] : '';
$dowhat = isset($_POST['dowhat']) ? $_POST['dowhat'] : '';


// echo $gid,$num
// $username = '梁1';
// $psw =  '';
//写查询语句:按需查询数据，每一次只查询一页数据


	
	$sql= "SELECT * FROM cart where gid = '$gid'";
	//执行语句:得到的返回值是一个结果集
	$res = $conn->query($sql);
	// $res2 = $conn->query($sql2);
	
	//获取结果集里面的内容部分
    $row = $res->fetch_all(MYSQLI_ASSOC);//对象格式  [{},{},{}]
    // $row2 = $res2->fetch_all(MYSQLI_ASSOC); 
    

    
    // var_dump(++$newnum)

    // echo $row[0]['buy_limit'];

    if($dowhat==0){
        $arr=$row[0];
        $newnum=$row[0]['counts']-1;
        if($newnum<1){
            $newnum = 1;
        }
        $res2 = $conn->query("UPDATE cart SET counts = '$newnum' WHERE gid = $gid;");
      
    }else if($dowhat==1){
        $arr2=$row[0];
        $newnum2=$row[0]['counts']+1;
        if($newnum2>$row[0]['buy_limit']){
            $newnum2=$row[0]['buy_limit'];
        }
        $res3 = $conn->query("UPDATE cart SET counts = '$newnum2' WHERE gid = $gid;");
    }


        // $good=array(
        //     'code'=>'1',
        //     // 'list' => $row,
        //     'message'=>'加入购物车成功'
        // ); 
        
        
        
       
    //     //把对象转成字符串，echo给前端
        // echo json_encode($good,JSON_UNESCAPED_UNICODE);
       
      
       
        // $conn->close();








?>