(()=>{

	function loadSeat(){
		var html="";
		for(var j=1; j<8 ;j++){
			html+=`<tr><td>`;
			if(j<5){
				for(var k=1;k<20;k++){
					if(k<9){
						html+=`<i class="seat" data-name="${j}排${17-k}座"></i>`;
					}else if(k>10){
						html+=`<i class="seat" data-name="${j}排${19-k}座"></i>`;
					}else{
						html+=`<i class="seat"></i>`;						
					}
				}
			}else if(j>4 && j<7){
				for(var k=1;k<20;k++){
					if(k<9){
						html+=`<i class="seat" data-name="${j}排${18-k}座"></i>`;
					}else if(k>10){
						html+=`<i class="seat" data-name="${j}排${20-k}座"></i>`;
					}else{
						html+=`<i class="seat"></i>`;						
					}
				}
			}else{
				for(var k=1;k<20;k++){
					html+=`<i class="seat" data-name="${j}排${20-k}座"></i>`;
				}
			}
			html+=`</td></tr>`;
		}
		$('#seats').html(html);
	}

	loadSeat();
	// function loadEvent(){}
	$('#seats tr:lt(4) td i:last-child').removeClass('seat');
	 $('#seats tr:lt(6) td i:eq(8)','#seats tr:lt(6) td i:eq(9)').removeClass('seat');

	//监测页面信息变化
	var count=0,  seatleft=$('#seats .seat').length;
	var price = 45;

	setInterval(()=>{
		count =$('#seats .selected').length;
		var leave =$('#seats .seat').length;
		if(leave!=seatleft){
			seatleft = leave;
			$("[data-type=counts]").html(leave);
			$("[data-type=price]").html('￥'+price*count);
			$('[data-seat=counts]').html(count);
		}
	},50);

	//选座问题
	$('#seats').on('click','i', e=>{
		var $this = $(e.target), isPrevSeated=isNextSeated=false; 
		var ticketName = $this.attr('data-name');
		//三连坐判断
		if(!$this.prev().hasClass('seated'))isPrevSeated = $this.prev().prev().hasClass('selected');  
		if(!$this.next().hasClass('seated'))isNextSeated = $this.next().next().hasClass('selected');		
		
		if($this.hasClass('seated')){return}
		if($this.hasClass('selected')){
			if($this.prev().hasClass('selected')&&$this.next().hasClass('selected')){
				warning()
			}else{
				$this.removeClass('selected').addClass('seat');	
				//移除电影票根
				var dataName = `[data-ticket=${ticketName}]`;
				$(dataName).remove();
			}
			return;
		}
		//不多于四座
		if(count==4){ bookWarning(); return }
		//判断三连坐
		if(isPrevSeated && !$this.prev().hasClass('selected')){
			if(count==3){
				warning(); 
				return ;
			}else{
				$this.prev().removeClass('seat').addClass('selected');
				$('.seat-info').show();
				var prevTicket = $this.prev().attr('data-name');
				creatTicket(prevTicket);
			}
		}
		if(isNextSeated && !$this.next().hasClass('selected')){
			if(count==3){
				warning(); 
				return ;
			}else{
				$this.next().removeClass('seat').addClass('selected');
				$('.seat-info').show();
				var nextTicket = $this.next().attr('data-name');
				creatTicket(nextTicket);
			}
		}
		$this.removeClass('seat').addClass('selected');
		//生成电影票根
		creatTicket(ticketName);
	}).on("mouseenter","i",e=>{
		var $this = $(e.target),
	 		 html = `<p class="location">${$this.attr('data-name')}</p>`;
	 	$this.css({position:'relative'}).append(html);
	}).on("mouseout","i",e=>{ $(e.target).empty()});


	//电影票生成
	function creatTicket(Name){
		html = `<p data-ticket="${Name}"><span>${Name}</span><em></em></p>`;
		$("[data-type=ticket]").append(html);
	}

	//弹窗处理
	var $bookInfo = $('#bookInfo');
	function warning(){$bookInfo.show().find('.infos .info1').html('不要留下单独空座')}
	function bookWarning(){$bookInfo.show().find('.infos .info1').html('每个订单最多选择4个座位')}
	$("[data-type=close]").click(()=>{$bookInfo.hide()})   //弹出框隐藏
	$("[data-type=submit]").click(()=>{
		$bookInfo.show().find('.infos .info1').html('请选择座位')
				.next().css({background:'#FD9036',color:'white'});
	})
	
	//定时5分钟弹窗停止选票，点击后重载页面
	setTimeout(()=>{
		$('#bookInfo').show()
			.find('.infos .info1').html('选座已超时，请在5分钟内选择座位！')
			.next().html('重新选择').css({background:'#FD9036',color:'white'});
		$("[data-type=close]").click(()=>{
			window.location.reload()
		})
	},300*1000) 
})();


(()=>{

	var fid = getKeyWord();

	$.ajax({
		type:'get',
		url:'data/user/session_data.php',
		success:function(response){
			var uid = Number(response.uid);
			var uname  = response.uname;
			if(sessionStorage.username == uname){
				$.ajax({
					type:'get',
					data:{uid},
					url:"data/user/get_basic.php",
					success:function(result){

						if(result.code==200){
							$("#phone").append(`<span style="color:#ff8800;font-size:16px;">${result.phone}</span>`);
						}
					},
				})
			}
			
			
		},
		error:function(){
			console.log("session 失败")
		}	
		
	})


	if(fid){
		$.ajax({
			type:'get',
			data:{fid},
			url:"data/details/detail.php",
			success:function(response){

				var data = response[0];

				var html = `<p class="right-top">电影票</p>
									<div class="film flex">
										<img src="${data.poster_pic}" alt="">
										<p><span>${data.fname}</span><br/>
										&nbsp;&nbsp;&nbsp;&nbsp;类型:${data.types}</p>
									</div>
									<div class="content">
										<p>影院：&nbsp;&nbsp;<strong>杭州比高电影城</strong></p>
										<p>版本：&nbsp;&nbsp;<strong>2D&nbsp;中文版</strong></p>
										<p>场次：&nbsp;&nbsp;<strong>${getNowDate()}&nbsp;22:00</strong></p>
										<div class=" flex"> 
											<span class="ticket-seat">座位：</span>
											<div class="tickets" data-type="ticket"></div>
										</div>
										<p>票价：&nbsp;&nbsp;<strong>${Number(data.price)+Math.floor(Math.random()*10) }/张</strong></p>
										<p>票数：&nbsp;&nbsp;<strong data-seat="counts">0</strong></p>
									</div>`;
				
				$("#ticketInfo").prepend(html);
			}	
		})
	}

})();