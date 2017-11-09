<?php
   header("Content-Type:application/json;charset=utf8");
   require_once("init.php");

   @$kw = $_REQUEST["kw"];
   if(!$kw) exit("keyword needed");

   $output = [];

   $sql = "SELECT count(*) num FROM mtq_details WHERE fname LIKE '%$kw%' OR sub_name LIKE '%$kw%'";

   $output["count"] = sql_execute($sql)[0];

   $sql = "SELECT fid,fname,director,sub_name,types,zone,synopsis,poster_pic FROM mtq_details WHERE fname LIKE '%$kw%' OR sub_name LIKE '%$kw%'";

   $output["data"] = sql_execute($sql);

   echo json_encode($output);

?>