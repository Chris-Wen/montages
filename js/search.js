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

					var count = parseInt(response.count.num);
					var info   = response.data;
					var html="";

					$("[data-type=count]").html(`${count} 条`);
					$("#search").val("");

					if(count==0){

						html = `<div class="error">
										<p>抱歉，没有找到与“${search}”的相关结果<p>
										<p>请您检查输入或者尝试其他关键字<p>
									</div>`;

					}else{

						for(var data of info){
								html +=`<div class="card ">
												<h3 class="film-title"> <a href="detail.html?kw=${data.fid}">${data.fname} / ${data.sub_name}</a></h3>
												<div class="showbox flex">
													<div class="card-img">
														<a href="detail.html?fid=${data.fid}"><img src="${data.poster_pic}" alt=""/></a>
													</div>
													<div class="show-content">
														<p>类型：${data.types}</p>
														<p>导演：${data.director}</p>
														<p>地区：${data.zone}</p>
														<p>剧情简介：${data.synopsis}</p>
													</div>
												</div>
											</div>`;
							}
					}
					
					$("#content").html(html);
				},
				error:function(){
					alert("网络错误，请检查");
				}
			})
		}
	})
	
})();
