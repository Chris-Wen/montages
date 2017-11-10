(()=>{   //轮播图效果
    
    "use strict"

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


 //购票栏
(()=>{
    "use strict"

    $.ajax({
        type:'get',
        url:'data/sale_info.php',
        success:function(response){
            console.log(response);
            var onsale = response.onsale;
            var presale = response.presale;
            var html="";

            //onsale
            for(var n of onsale){
                html += `<div class="card " data-type="card">
                            <div class="card-img">
                                <img src="${n.poster_pic}" alt="${n.sub_name}" onerror="this.src='img/film_default.jpg'"/>
                                <div class="card-content">
                                    <div class="card-content-info" data-class="info">
                                        <h3>${n.fname}</h3>
                                        <p><em>${Math.round(Math.random()*10000)+5000}</em>人想看 -${n.types}</p>
                                        <p>导演：${n.director}</p>
                                        <p>地区：${n.zone}</p>
                                        <p style="color:#ff8800"><i style="font-size:20px">${n.price}</i> 元起</p>
                                    </div>
                                </div>
                            </div>
                            <a class="on-button" href="theater.html?fid=${n.fid}">选座购票</a>
                        </div>`;
            }
            $("[data-show=onsale]").html(html);

            //presale
            html="";
            for(let p of presale){
                html += `<div class="card">
                            <p class="showday">${p.release_time}</p>
                            <div class="showbox flex">
                                <div>
                                    <img src="${p.poster_pic}" alt="${p.sub_name}" onerror="this.src='img/film_default.jpg'"/>
                                </div>
                                <div class="show-content">
                                    <div class="pre-title">${p.fname}</div>
                                    <p><em>${Math.round(Math.random()*10000)+5000}</em>人想看 -${p.types}</p>
                                    <p>导演：${p.director}</p>
                                    <p>地区：${p.zone}</p>
                                    <a class="pre-button" href="theater.html?fid=${p.fid}">超前预售</a>
                                </div>
                            </div>
                        </div>`;
            }
            // console.log(prehtml);
            $("[data-show=presale]").html(html);

        },
        error:function(){
            alert("网络错误，请检查");

        }
    }).then(()=>{

        $("[data-type=on-sale]").hover(function(){
            if( !$(this).hasClass("t-acitve") ){
                $(this).addClass("t-active")
                    .siblings().removeClass("t-active");
                $("#preSale").hide();
                $("#onSale").show(1000);
            }
            
        })
        $("[data-type=prev-sale]").hover(function(){
            if( !$(this).hasClass("t-acitve") ){
                $(this).addClass("t-active")
                    .siblings().removeClass("t-active");
                $("#onSale").hide();
                $("#preSale").show(1000);
            }
            
        })

        //影片详情 展示
        $("[data-type=card]").hover(function(){      
            $(this).find(".card-content-info").css({"height":"250px","opacity":"0.8"});
        },function(){
            $(this).find(".card-content-info").css({"height":"40px"})
        })

    })

    
})();


(()=>{         //周票房排行榜
    "use strict"

    $.ajax({
        type:'get',
        url:'data/box_office_rank.php',
        success:function(response){

            var data = JSON.parse(response).showapi_res_body.datalist;

            var html="";
            if(data){
                for(var i=0; i<3; i++){
                    
                    html += `<div class="rank-item flex">
                                <div>${data[i].Rank}</div>
                                <div><img src="img/movie/box_office/rank${i+1}.jpg" onerror="this.src='img/film_default.jpg'"></div>
                                <div>
                                    <p>${data[i].MovieName}</p>
                                    <p>周票房:${data[i].WeekAmount}</p>
                                    <p>累计：${data[i].SumWeekAmount}万元</p>
                                    <p>均价：${data[i].AvgPrice}元</p>
                                </div>
                            </div>`;
                }
                html +=`<a style="text-align:right">了解更多</a>`

                $("[data-type=rank]").html(html);
            }
            
        },
        error:function(){
            console.log("网络超时，请求排行榜失败");
        }
    })

})();