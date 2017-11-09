<?php

   header("Content-Type:application/json;charset=utf8");

   require_once("init.php");
   $output = [
            "onsale"=>"",                //正在上映
            "presale"=>""                //预售
         ];

   $sql = "SELECT fid,fname,release_time,types,poster_pic,director,zone,price FROM mtq_details WHERE sale=1 LIMIT 8";

   $output["onsale"] = sql_execute($sql);

   $sql = "SELECT fid,fname,release_time,types,poster_pic,director,zone,price FROM mtq_details WHERE sale=2 LIMIT 8";

   $output["presale"] = sql_execute($sql);

   echo json_encode($output);


?>