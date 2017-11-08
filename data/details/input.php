<?php
   header("Content-Type:text/plain;charset=UTF-8");
   
   require_once("../init.php");
   @$cid = $_REQUEST["cid"];
   @$film_id = $_REQUEST["film_id"];
   @$uname = $_REQUEST["uname"];
   @$content = $_REQUEST["content"];

   //用户评论电影
   if(!$cid && $uname && $content){
      $sql = "INSERT INTO mtq_comments VALUES (NULL,$film_id,'$uname','',NULL,'$content')";
      $result = mysqli_query($conn,$sql);
      if($result){
         echo "评论成功";
      }else{
         echo "error: ".$sql;
      }
   }

   //用户回复评论
   if($cid){    
      $sql = "INSERT INTO mtq_reply VALUES(NULL,$cid,'$uname',NULL,'$content')";
      $result = mysqli_query($conn,$sql);
      if($result){
         echo "评论成功";
      }else{
         echo "error: ".$sql;
      }
   }

   
?>