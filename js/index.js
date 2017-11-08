(()=>{
    //轮播图效果
    var slider=$("[data-type=slider]"),             //图片框
        point=$("[data-type=point]"),               //切换卡
        n=0,                                        //移动次数
        trans=300,                                  //切换时间
        interval=3000,                              //切换间隔
        timer=null,                                 //定时器
        LIWIDTH=1200;                               //图片宽
    slider.css("width",LIWIDTH*6);
    point.children().first().addClass("active");

    function moveOnce() {                           //图片移动一次
        n++;
        var left = -n * LIWIDTH;
        slider.css("left",left);

        point.find(".active").removeClass("active");
        if (n === slider.children().length - 1) {
            point.children().eq(0).addClass("active");
            setTimeout( ()=> {
                $("[data-type=slider]").css({"transition":'',"left": 0});
                n = 0;

                setTimeout(()=> {
                    $("[data-type=slider]").css("transition", 'all .' + trans / 100 + 's linear');
                }, 100);
            }, trans);

        } else {
            point.children().eq(n).addClass("active");
        }
    }
    timer=setInterval(moveOnce,interval+trans);

    slider.parent().hover(function () {      //鼠标悬停在图片上，停止切换
        clearInterval(timer);
        timer=null;

    },function () {                          //离开
        
        timer=setInterval(moveOnce,interval+trans);
    });

    for(let i=0; i<point.children().length; i++){
        point.children().eq(i).click( ()=>{

            n=i;
            slider.css("left",-n*LIWIDTH);
            point.find(".active").removeClass("active")
            point.children().eq(n).addClass("active")
        });
    }

    $("[data-type=left]").click( e=> {
        window.event? window.event.returnValue = false : e.preventDefault();

        if(n>0){
            n--;
            slider.css("left",-n*LIWIDTH);
            point.find(".active").removeClass("active")
            point.children().eq(n).addClass("active")
        }else{
            //快速将第一张切到最后一张
            slider.css("transition",'');
            n=slider.children().length-1;
            slider.css("left",-n*LIWIDTH);

            setTimeout(()=>{
                slider.css("transition", 'all .'+trans/100+'s linear');
                n--;
                slider.css("left",-n*LIWIDTH);
                point.find(".active").removeClass("active")
                point.children().eq(n).addClass("active")
            },100)
        }
    })


    $("[data-type=right]").click(function (e) {
        window.event? window.event.returnValue = false : e.preventDefault();

        //图片可以正常移动,多走1张图
        n++;
        slider.css("left",-n*LIWIDTH);
        if(n<slider.children().length-1){
            point.find(".active").removeClass("active")
            point.children().eq(n).addClass("active")
        }else{
            point.find(".active").removeClass("active");
            point.children().first().addClass("active");
            setTimeout(()=>{
                slider.css("transition",'');
                n=0;
                slider.css("left",0);
                setTimeout(()=>{
                    slider.css("transition",  'all .'+trans/100+'s linear');
                },100)
            },trans)
        }
    })       

})();

(()=>{



    $("[data-type=on-sale]").hover(function(){
        if( !$(this).hasClass("t-acitve") ){
            $(this).addClass("t-active")
            .siblings().removeClass("t-active");
            $("#onSale").show();
            $("#preSale").hide();
        }
        
    })
    $("[data-type=prev-sale]").hover(function(){
        if( !$(this).hasClass("t-acitve") ){
            $(this).addClass("t-active")
            .siblings().removeClass("t-active");
            $("#onSale").hide();
            $("#preSale").show();
        }
        
    })

    //影片详情 展示
    $("[data-type=card]").hover(function(){      
        $(this).find(".card-content-info").css({"height":"250px","opacity":"0.8"});
    },function(){
        $(this).find(".card-content-info").css({"height":"40px"})
    })
})();