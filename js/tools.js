function notFixedHeader() {                  //更改footer样式，去除固定定位，和标签定位小三角
    setTimeout(() => {
        $(".fixed").removeClass('fixed');
        $(".white-block").removeClass("white-block");
    }, 50);
}

    
function countWords(textArea,numItem,max) {  //统计textarea字数
    textArea[0].setAttribute("maxlength", max);
    var curLength = textArea.val().length;
    textArea.on('input propertychange', function () {
        var value = textArea.val();
        numItem.html(`${max - value.length}`);
    });
}


function getNowFormatDate() {              //获取当前时间 yyyy-MM-dd HH:MM:SS 
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

function getNowDate(index) {                     //获取当前时间 MM-dd
    var date = new Date();
    var seperator1 = "月";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = month + seperator1 + strDate+"日";
    return currentdate;
}

function getKeyWord(){                      //只传递一个参数
    var url =window.location.search;
	var fid =  url.substring(url.lastIndexOf('=')+1, url.length);
    return Number(fid); 
}

function popupHide(){                       //弹窗隐藏事件
		$(".login-mask").click(()=>{$('#popup').hide()})
		$("#popup .close a").click(()=>{$('#popup').hide()})
	}


//cookie
function setCookie(name,value,Days=7){

    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();

}  

function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return (arr[2]);
    else
        return null;
} 

function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

