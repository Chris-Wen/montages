(()=>{
	//影片查询数据请求
/*	$.ajax({  
        dataType:"JSONP",  
        jsonp:"callback",//请求自动带上callback参数，callback值为jsonpCallback的值  
        jsonpCallback:"login",//接口服务器应该返回字符串数据格式：login(JSON数据)  
        type:"post",  
        url:"http://v.juhe.cn/movie/citys?key=944e9d7ee05720d37f1603e1b1a6c4c5",//接口服务器地址  
        data:{},//请求数据  
        success:function(response){  
            //成功执行  
            console.log(response);  
        },  
        error:function(e){  
            //失败执行  
            alert('请求失败');  
        }  
    })                          */
	
	$.ajax({  
        dataType:"JSONP",  
        jsonp:"callback",//请求自动带上callback参数，callback值为jsonpCallback的值  
//        jsonpCallback:"JSON",//接口服务器应该返回字符串数据格式：login(JSON数据)  
        type:"get",  
        url:"http://v.juhe.cn/wepiao/query?key=69c54677b7ebbffd71eaebac2a3d8c7c",//接口服务器地址  
        data:{},//请求数据  
        success:function(response){  
            //成功执行  
            console.log(response);  
        },  
        error:function(e){  
            //失败执行  
            alert('请求失败');  
        }  
    })         

	
})();