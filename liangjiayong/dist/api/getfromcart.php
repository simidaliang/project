<?php
	
	include 'connect.php';
	
	//中文乱码
	header("content-type:text/html;charset=utf-8");
    
    $what = isset($_POST['what']) ? $_POST['what'] : '1';


    //写一个sql语句：查询goodslist所有的内容
    if($what==1){
        $sql = "SELECT * FROM cart";//目前只是字符串
        //执行sql语句,得到一个结果集
        $res = $conn->query($sql);
        
        $row = $res->fetch_all(MYSQLI_ASSOC);//对象 [{},{},{}]
 
        echo json_encode($row,JSON_UNESCAPED_UNICODE);//'[{},{},{}]'
    }
	
	
	// echo $sql;
	
	// var_dump ($row);	
	//得到结果集里面的内容部分
	
	// var_dump ($row);	
	
	// var_dump($row);
	//把结果集，转成字符串，传给前端
	
?>