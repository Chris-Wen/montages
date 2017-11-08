<?php
/**
* 根据产品fid对应的所有评价
* 评论分页数pno   单页显示评价条数 pageSize
* 返回参数
*/
	header('Content-Type:application/json;charset=utf-8');
	require_once('../init.php');
	@$fid = $_REQUEST['fid'];
	@$pno=$_REQUEST["pno"];
	@$pageSize=$_REQUEST["pageSize"];


	if(!$pno) $pno=1;
	if(!$pageSize) $pageSize=10;  //单页默认显示10条

	$output=[
			   'recodeCount'=>0,	//评论总记录数
			   'pageCount'=>0,     //总页数
			   'data'=>null,     	//评论数据
			   'pno'=>$pno,			//当前页码
			   'pageSize'=>$pageSize,   //当前页大小
        	];

	//查询记录和总页数
    $sql="SELECT count(*) FROM mtq_comments WHERE film_id=$fid";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    $output["recodeCount"]=intval($row[0]);
    $output["pageCount"]=ceil($output["recodeCount"]/$output["pageSize"]);  //向上取整
    //判断页数问题
    if($output["pno"]>$output["pageCount"])$output["pno"]=$output["pageCount"];
     //查询当前页的内容
    $start=($output["pno"]-1)*$output["pageSize"];
    $count=$output["pageSize"];


	$sql="SELECT A.cid,A.c_uname,A.agrees,A.c_time,A.content,(SELECT count(*) FROM mtq_reply WHERE A.cid=topic_id )count FROM mtq_comments A WHERE film_id=$fid ORDER BY A.c_time DESC  LIMIT $start,$count";

	$output["data"]=sql_execute($sql);

	echo json_encode($output);

?>

