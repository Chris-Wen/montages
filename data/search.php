<?php
   header("Content-Type:application/json;charset=utf8");
   require_once("init.php");

   @$kw = $_REQUEST["kw"];
   if(!$kw) exit("keyword needed");

   $sql = "SELECT count(*),fid,fname,sub_name,types,zone,synopsis,poster_pic FROM mtq_details WHERE fname LIKE '%$kw%' OR sub_name LIKE '%$kw%'";

   $output = sql_execute($sql);

   echo json_encode($output);

?>