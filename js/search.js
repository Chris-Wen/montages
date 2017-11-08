(()=>{
	notFixedHeader();
	popupHide();



	$("[data-input=search]").click(()=>{
		var search = $("#search").val();
		if(search){
			$.ajax({
				type:'get',
				url:'data/search.php',
				data:{kw:search},
				success:function(response){
					console.log(response);

					var html="";
					for(var data of response){
						html +=`<div class="card ">
										<h3 class="film-title"> <a href="detail.html?kw=${data.fid}">${data.fname}</a></h3>
										<div class="showbox flex">
											<div class="card-img">
												<a href="detail.html?kw=${data.fid}"><img src="${data.poster_pic}" alt=""/></a>
											</div>
											<div class="show-content">
												<p>类型：${data.types}</p>
												<p>导演：塔伊加·维迪提</p>
												<p>地区：${data.zone}</p>
												<p>剧情简介：${data.synopsis}</p>
											</div>
										</div>
									</div>`;
						
					}
				},
				error:function(){
					alert("网络错误，请检查");
				}
			})
		}
	})
	
})();
