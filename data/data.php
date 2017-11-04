<?php
/*
*	***聚合数据（JUHE.CN）数据接口调用通用DEMO SDK
*/
header('content-type:text/html;charset=utf-8');

$appkey ='944e9d7ee05720d37f1603e1b1a6c4c5'; #通过聚合申请到数据的appkey

$url ='http://v.juhe.cn/movie/index'; #请求的数据接口URL
//$url ='http://v.juhe.cn/boxoffice/wp'; #请求的数据接口URL

$params ='ip=www.juhe.cn&key='.$appkey;

$content = juhecurl($url,$params,0);

if($content){
    $result =json_decode($content,true);
    #print_r($result);

	#错误码判断
	$error_code = $result['error_code'];
	if($error_code ==0){
		#根据所需读取相应数据
		$data = $result['result'];
		echo '结果为：'.$data['area'].' '.$data['location'];
	}else{
		echo $error_code.':'.$result['reason'];
	}
}


/*
    ***请求接口，返回JSON数据
    ***@url:接口地址
    ***@params:传递的参数
    ***@ispost:是否以POST提交，默认GET
*/
function juhecurl($url,$params=false,$ispost=0){
    $httpInfo = array();
	$ch = curl_init();

	curl_setopt( $ch, CURLOPT_HTTP_VERSION , CURL_HTTP_VERSION_1_0 );
	curl_setopt( $ch, CURLOPT_USERAGENT , 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22' );
	curl_setopt( $ch, CURLOPT_CONNECTTIMEOUT , 30 );
	curl_setopt( $ch, CURLOPT_TIMEOUT , 30);
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER , true );
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
		#echo "cURL Error: " . curl_error($ch);
		return false;
	}
	$httpCode = curl_getinfo( $ch , CURLINFO_HTTP_CODE );
	$httpInfo = array_merge( $httpInfo , curl_getinfo( $ch ) );
	curl_close( $ch );
	return $response;
}