<?php
/*
*	***聚合数据（JUHE.CN）数据接口调用通用DEMO SDK
*/
header('content-type:text/html;charset=utf-8');

$appkey ='944e9d7ee05720d37f1603e1b1a6c4c5'; #通过聚合申请到数据的appkey

$url ='http://v.juhe.cn/movie/index'; #请求的数据接口URL



//************1.按关键字检索影片信息************
$params = array(
      "title" => "铁拳",//需要检索的影片标题,utf8编码的urlencode
      "smode" => "0",//<font color=red>是否精确查找，精确:1 模糊:0  默认1</font>
      "pagesize" => "20",//<font color=red>每次返回条数，默认20,最大50</font>
      "offset" => "0",//<font color=red>偏移量，默认0,最大760</font>
      "key" => $appkey,//应用APPKEY(应用详细页查询)
      "dtype" => "json",//返回数据的格式,xml/json，默认json
);
$paramstring = http_build_query($params);
$content = juhecurl($url,$paramstring);

$result = json_decode($content,true);
if($result){
    if($result['error_code']=='0'){
        print_r($result);
    }else{
        echo $result['error_code'].":".$result['reason'];
    }
}else{
    echo "请求失败";
}


/**
 * 请求接口返回内容
 * @param  string $url [请求的URL地址]
 * @param  string $params [请求的参数]
 * @param  int $ipost [是否采用POST形式]
 * @return  string
 */
function juhecurl($url,$params=false,$ispost=0){
    $httpInfo = array();
    $ch = curl_init();
 
    curl_setopt( $ch, CURLOPT_HTTP_VERSION , CURL_HTTP_VERSION_1_1 );
    curl_setopt( $ch, CURLOPT_USERAGENT , 'JuheData' );
    curl_setopt( $ch, CURLOPT_CONNECTTIMEOUT , 60 );
    curl_setopt( $ch, CURLOPT_TIMEOUT , 60);
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER , true );
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    if( $ispost )
    {
        curl_setopt( $ch , CURLOPT_POST , true );
        curl_setopt( $ch , CURLOPT_POSTFIELDS , $params );
        curl_setopt( $ch , CURLOPT_URL , $url );
    }
    else
    {
        if($params){
            curl_setopt( $ch , CURLOPT_URL , $url.'?'.$params );
        }else{
            curl_setopt( $ch , CURLOPT_URL , $url);
        }
    }
    $response = curl_exec( $ch );
    if ($response === FALSE) {
        //echo "cURL Error: " . curl_error($ch);
        return false;
    }
    $httpCode = curl_getinfo( $ch , CURLINFO_HTTP_CODE );
    $httpInfo = array_merge( $httpInfo , curl_getinfo( $ch ) );
    curl_close( $ch );
    return $response;
}