<?php
//查询数据库
include 'connect.php';
header("content-type:text/html;charset=utf-8");


//接收前端传来的数据
$gid = isset($_POST['gid']) ? $_POST['gid'] : '';
$num = isset($_POST['num']) ? $_POST['num'] : '';
// echo $gid,$num
// $username = '梁1';
// $psw =  '';
//写查询语句:按需查询数据，每一次只查询一页数据


	$sql = "SELECT * FROM goods where gid = '$gid'";
	$sql2= "SELECT * FROM cart where gid = '$gid'";
	//执行语句:得到的返回值是一个结果集
	$res = $conn->query($sql);
	$res2 = $conn->query($sql2);
	
	//获取结果集里面的内容部分
    $row = $res->fetch_all(MYSQLI_ASSOC);//对象格式  [{},{},{}]
    $row2 = $res2->fetch_all(MYSQLI_ASSOC); 
    
    $arr=$row[0];
    
    // var_dump(++$newnum)


        $reg='未超过限购量';
    if(count($row2)==0){
        
        // echo "INSERT INTO cart (goods_name1,goods_price,goods_stock,gid,buy_limit,shop,list_pic,contents,counts) VALUES('$arr[goods_name1]','$arr[goods_price]','$arr[goods_stock]','$gid','$arr[buy_limit]','$arr[shop]','$arr[list_pic]','$arr[contents]','$num')";
        $res3 = $conn->query("INSERT INTO cart (goods_name1,goods_price,goods_stock,gid,buy_limit,shop,list_pic,contents,counts) VALUES('$arr[goods_name1]','$arr[goods_price]','$arr[goods_stock]','$gid','$arr[buy_limit]','$arr[shop]','$arr[list_pic]','$arr[contents]','$num')");
    }else if(count($row2)==1){
        $arr=$row2[0];

        $newnum=$row2[0]['counts']+$num;
        if($newnum>=$row2[0]['buy_limit']){
            $newnum=$row2[0]['buy_limit'];
            $reg='超过限购量';
        }
        $res4 = $conn->query("UPDATE cart SET counts = '$newnum' WHERE gid = $gid;");
    }


        $good=array(
            'code'=>'1',
            'list' => $reg,
            'message'=>'加入购物车成功'
        ); 
        
        
        
       
    //     //把对象转成字符串，echo给前端
        echo json_encode($good,JSON_UNESCAPED_UNICODE);
       
      
       
        // $conn->close();








?>