<?php
	header("Content-Type:application/json;charset=utf-8");
	require_once('../init.php');
	
	@$cid = $_REQUEST['cid'];

	if($cid){
		$sql = "SELECT r_uname,r_time,r_content FROM mtq_reply WHERE topic_id=$cid ORDER BY r_time DESC LIMIT 0,8";
		$output = sql_execute($sql);
		echo json_encode($output);
	}


	
?>