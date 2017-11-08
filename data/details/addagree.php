<?php
   header("Content-Type:text/plain;charset=UTF-8");
   require_once("../init.php");
   @$count = $_REQUEST['count'];
   @$tid = $_REQUEST['tid'];

   if($count>0){
      $sql ="UPDATE mtq_comments SET agrees=$count WHERE cid=$tid";
      $result = mysqli_query($conn,$sql);
      if($result){
         echo "点赞成功";
      }else{
         echo "点赞失败，请稍后重试";
      }
   }
    

?>