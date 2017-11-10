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

function popupHide(){                       //弹窗隐藏事件
		$(".login-mask").click(()=>{$('#popup').hide()})
		$("#popup .close a").click(()=>{$('#popup').hide()})
	}



