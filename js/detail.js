(()=>{
	notFixedHeader();
	popupHide();
	function loadReply(cid,reply){    //加载回复
				$.ajax({
						type:'get',
						data:{ cid },
						url:"data/details/reply.php",
						success:function(res){
							var html="";
							
							for(let r of res){
								html+=`<li class="reply-item">
											<p ><a href="javascript:;">${r.r_uname}</a><span>${r.r_time}</span></p>
											<p>${r.r_content}</p>
										</li>`;
							}
							reply.innerHTML=html;
						},
						error:function(){
							alert("网络错误，请检查....");
						}
					})
			}
	//获取页面初始化数据
	var fid=5, uname="dingding"; //影片id   用户名；

	//加载页面数据
	$.ajax({
		type:'get',
		url:'data/details/detail.php',
		success:function(response){

			var data = response[0];
			var html="", score = data.film_score;
			html = `
				<h1>${data.fname}</h1>
				<p class="sub-title">${data.sub_name}</p>
				<div class="otherbox">
					<span>${data.duration}分钟</span>-
					<span>${data.types}</span>-
					<span>${data.fage}${data.release_time}${data.zone}上映</span>-
					<span>3D/IMAX3D/中国巨幕</span>
				</div>`;

			$("#infoTitle").html(html);
			
			html = `<p class="saw">
						<a class="film-score">${score}分</a><span>${Math.floor(Math.random()*500)+500}人评分</span><span>${Math.floor(Math.random()*10000)+5000}想看</span>
					</p>
					<p class="progress">
						<span>音乐&nbsp;&nbsp;<meter min="1" value="${Math.floor(Math.random()*10)+score*10}" max="100" heigh="90"   low="80" optimum='10'></meter></span>
						<span>画面&nbsp;&nbsp;<meter min="1" value="${Math.floor(Math.random()*10)+score*10}" max="100" heigh="90" low="85" optimum='10'></meter></span>
					</p>
					<p class="progress">
						<span>导演&nbsp;&nbsp;<meter min="1" value="${Math.floor(Math.random()*10)+score*10}" max="100" low="88" heigh="95" optimum='88'></meter></span>
						<span>故事&nbsp;&nbsp;<meter min="1" value="${Math.floor(Math.random()*10)+score*10}" max="100" low="88" heigh="95" optimum='88'></meter></span>
						<span class="box-office">票房：${data.box_office}</span>
					</p>
					<dl class="film-details">
						<dd><strong>导演：</strong><span class="detail-item">${data.director}</span></dd>
						<dd><strong>编剧：</strong><span class="detail-item">${data.writer}</span></dd>
						<dd><strong>国家地区：</strong><span>${data.zone}</span></dd>
						<dd><strong>发行公司：</strong><span>${data.distributor}</span></dd>
						<dd class="intro">
							<strong>剧情：</strong>
							<p>${data.synopsis}</p>
						</dd>
					</dl>`;
			$("#infoContent").html(html);

			html = `<img src="${data.poster_pic}" title="${data.fname}" onerror="this.src='img/film_default.jpg'">`;
			$("#poster").html(html);

		},
		error:function(){
			alert("网络错误，请检查");
		}
	})

	// 评论分数
	$("[data-icon=stars]").on("mouseenter","i",e=>{ 
		$(e.target).prevAll().hover().addClass("icon-star");
		$(e.target).nextAll().removeClass("icon-star");
	}).on("click","i",e=>{ 
		$(e.target).addClass("icon-star")
				.prevAll().addClass("icon-star");
	 })

	//textarea字数统计
	var textArea = $("[data-type=area-number]"),
       word = $("[data-type=area-count]"); 
   countWords(textArea,word,256);


	//加载评论
	function loadComment(pno=1,pageSize=10){
		fid = 5;
		$.ajax({
				type:'get',
				data:{ pno,fid,pageSize},
				url:"data/details/comments.php",
				success:function(response){
					console.log(response);
					var data=response.data;
					var html="";

					if(data.length>0){
						for(let d of data){
						html+=`	<dd class="flex comment-item ">
										<div class="user-info">
											<p><span><img src="img/default_avatar.gif" alt="用户头像"></span>
											<a href="javascript:;">${d.c_uname}</a></p>
											<p>${d.c_time}</p>
										</div>
										<div class="user-text">
											<p class="texts">${d.content}</p>
											<p class="reply-icon">
												<span><i  data-type="agrees" class="fa fa-thumbs-up fa-lg"></i><a name="${d.cid}" href="javascript:;">${d.agrees}</a></span>
												<span><i class="fa fa-commenting"></i><a href="javascript:;">${d.count}</a></span>
											</p>
											<p class="reply-info"></p>
											<form action="#" class="reply-form">
												<textarea data-type="reply-area" maxlength="210" class="reply-content" name="reply" cols="60" rows="1" placeholder="发表评论,字数限制210"></textarea>
												<a data-type="reply" class="btn-reply" href="${d.cid}">回复</a>
											</form>`;
											if(d.count>0){
												html += `<ul id="replys" name="${d.cid}" data-replies="count"></ul></div></dd>`;

											}else{
												html+=`<ul id="replys"></ul></div></dd>` ;
											}
							}
							html+=`<div class="pages" id="pages"></div>`;

							$("#commentList").html(html);
					

							//动态页码加载
							response.pno = Number(response.pno);
							var  html = `<a class="prev-page">上一页</a>`;
							if(response.pno-2>0){
								html += `<a href="${response.pno-2}">${response.pno-2}</a>`
							}
							if(response.pno-1>0){
								html += `<a href="${response.pno-1}">${response.pno-1}</a>`
							}
							html += `<a class="page-active" href="${response.pno}">${response.pno}</a>`;
							if(response.pno+1<=response.pageCount){
								html += `<a href="${response.pno+1}">${response.pno+1}</a>`;
							}
							if(response.pno+2<=response.pageCount){
								html += `<a href="${response.pno+2}">${response.pno+2}</a>`;
							}
							html +=`<a class="next-page">下一页</a>`;

							$("#pages").html(html);
					}
						
				},
				error:function(){
					alert("网络错误，请检查...")
				}

			}).then(()=>{
				//加载评论
				if($('[data-replies=count]').length>0){
					for(let reply of $('[data-replies=count]')){
						var cid = Number(reply.getAttribute("name"));
						loadReply(cid,reply);
					}
				}
				//点赞功能
				$("[data-type=agrees]").click(e=>{
					//阻止冒泡
					window.event? window.event.cancelBubble = true : e.stopPropagation();

					var $this = $(e.target).next();
					var count = parseInt($this.html());
					var tid = parseInt( $this.attr("name") );
					console.log(123);

					//用户未登录，弹出登录框，
					if(!uname){$('#popup').show();return;}
					//已点赞判断
					if( $this.attr('href')=="true" ){
						$this.parent().parent().next().html("<span>已过赞!</span>").show();
						setTimeout(()=>{ $this.parent().parent().next().hide(800) },1000);
						return;
					}
					count++;

					//加载评论
					$.ajax({
						type:'post',
						data:{count,tid},
						url:'data/details/addagree.php',
						success:function(res){
							console.log(res);
							$this.attr("href","true").html(count)
									.prev().addClass("agreement")
									.parent().parent().next().html("<span>点赞成功</span>").show();
							setTimeout(()=>{ $this.parent().parent().next().hide(800) },1000);
						},
						error:function(){
							$this.parent().parent().next().html("<span>点赞失败，请稍后重试</span>").show();
							setTimeout(()=>{ $this.parent().parent().next().hide(800) },1000);
						}
					})
				})


				// 提交评论
				$("[data-type=submit]").click(()=>{
					// 获取评论内容
					var areaValue=$("[data-type=area-number]").val();

					if(!uname){    //判断用户登录与否
							$('#popup').show();
							return;
					}
					if( areaValue ){     
						$.ajax({
							type:"post",
							data:{film_id:fid,uname:uname,content:areaValue},
							url:"data/details/input.php",
							success:function( response ){
								console.log(response);
								$("[data-info=comments]").html("<span>评论成功!</span>").show();
								setTimeout(()=>{ $("[data-info=comments]").hide(800) },1500);
								// 加载评论
								loadComment(); 
								$("[data-type=area-number]").val("");
							},
							error:function(){
								$("[data-info=comments]").html("<span>评论失败，请稍后再试</span>").show();
								setTimeout( ()=>{$("[data-info=comments]").hide(800)},1500)
							}
						})
					}
				})

				//提交回复
				$("[data-type=reply]").click(e=>{
					var $this = $(e.target);					
					var areaReply=$this.prev().val();      		//回复内容
					var cid = $this.attr('href');						//评论id
					//阻止默认行为
					window.event? window.event.returnValue = false : e.preventDefault();

					if(!uname){  $('#popup').show(); return; }   //判断登录状态
					if( areaReply ){
						$.ajax({
							type:"post",
							data:{cid:cid,uname:uname,content:areaReply},
							url:"data/details/input.php",
							success:function( response ){
								$this.parent().prev().html("<span>回复成功!</span>").show();
								setTimeout(()=>{ $this.parent().prev().hide(800) },1500);

								var html=`<li class="reply-item">
												<p ><a href="javascript:;">${uname}</a><span>${getNowFormatDate()}</span></p>
												<p>${areaReply}</p>
											</li>`;
								$this.parent().next().prepend(html);
								$("[data-type=reply-area]").val("");

							},
							error:function(){
								$this.parent().prev().html("<span>回复失败，请稍后重试!</span>").show();
								setTimeout(()=>{ $this.parent().prev().hide(800) },1500);

							}
						})
					}
				})

				//分页点击
				$("#pages").on("click","a",e=>{
					window.event? window.event.returnValue = false : e.preventDefault();

					var $e=$(e.target);
					if($e.hasClass('page-active')){ return }
					//获取当前页码
					var pno,
						dno=Number( $("#pages .page-active").html() ); //1
					if($e.hasClass('prev-page')){
						if(!$e.next().hasClass("page-active")){
								pno=dno-1;
							}else{ return }
					}else if($e.hasClass('next-page')){
						if(!$e.prev().hasClass("page-active")){
							pno=dno+1;
						}else{ return }
					}else{
						pno=parseInt($e.attr("href"));
					}
					loadComment(pno);
				})
			})
	}
	loadComment();
	
})();
