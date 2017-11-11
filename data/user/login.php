<?php
/**
* 接收客户端提交的登录信息：name、pwd，执行登录验证；
* 返回表明登录成功或失败的JSON消息：
* 如：{"code":200, "msg":"check passed"}
*/
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin:*');

@$uname = $_REQUEST['uname'] or die('{"code":401,"msg":"uname required"}');
@$upwd = $_REQUEST['upwd'] or die('{"code":402,"msg":"upwd required"}');

require_once('../init.php');
$sql = "SELECT uid FROM mtq_user WHERE uname='$uname' AND upwd='$upwd'";
$result = mysqli_query($conn,$sql);

if(!$result){       //SQL语句执行失败
  echo('{"code":500, "msg":"db execute err"}');
}else {
  $row = mysqli_fetch_assoc($result);
  if(!$row){        //用户名或密码错误
    echo('{"code":201, "msg":"uname or upwd err"}');
  }else {           //登录成功
    session_start();
    $_SESSION['loginUname'] = $uname;
    $_SESSION['loginUid'] = $row['uid'];
    
    echo ('{"code":200, "msg":"login succ"}');
  }
}