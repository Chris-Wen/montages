<?php
   header("Content-Type:application/json;charset=utf-8");
   
   require_once("../init.php");
   @$fid = $_REQUEST['fid'];
   
   if(!$fid){ $fid=1; }

   $sql = "SELECT * FROM mtq_details WHERE fid=$fid";

   $output = sql_execute($sql);

   echo json_encode($output);


?>