(()=>{
	notFixedHeader();
	popupHide();
	setTimeout(()=>{
		$("[data-type=theater]").addClass("white-block");
	},100)


	var fid=getKeyWord();

	
	//加载页面数据
	function loadPage(){
		$.ajax({
			type:'get',
			url:'data/details/detail.php',
			data:{fid},
			success:function(response){
				var data = response[0];
				var defaultImg = `img/film_default.jpg`;
	
				var html = `<a href="detail.html?fid=${data.fid}">
									<img src="${data.poster_pic}" onerror="this.src='${defaultImg}' title="${data.fname}">
								</a>`;
				$("[data-type=img]").html(html);

				var html =`<div>
								<h1><a href="detail.html?fid=${fid}">${data.fname}</a></h1>
								<p class="sub-title">${data.sub_name}</p>
								<div class="otherbox">
								<span>${data.duration}分钟</span>-
								<span>${data.types}</span>-
								<span>${data.fage}年 ${data.release_time} ${data.zone}上映</span>-
								<span>3D/IMAX3D/中国巨幕</span>
							</div>
							</div>
							<p class="division flex">
								<a href="javascript:;">今天 ${getNowDate()}</a>
								<a href="javascript:;">明天</a>
								<a href="javascript:;">后天</a>
								<a href="javascript:;">更多</a>
							</p>`;

				$("[data-type=info]").html(html);

				$("[data-type=jump]").attr("href",`ticket.html?fid=${data.fid}`);
			},
			
			error:function(){

				alert("网络错误，请检查");
			}
		})
	}
	
	loadPage();
	
})();
