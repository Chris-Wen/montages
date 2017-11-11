(()=>{
    $.ajax({
            url: 'header.html',
            success: function (data) {
                $('header').html(data);
            }
    }).then(()=>{
        //css效果
        $('.search-box i').hover(function(){
            $(this).prev().css({'width':'350px','border-bottom':'1px solid #1b6d85'});
        })

        $('.head-nav a').click(e=>{
            $('.head-nav i.white-block').removeClass('white-block');
            $(e.target).children().addClass('white-block');
        })

        $('.login-box a:first').click(e=>{
             window.event? window.event.returnValue = false : e.preventDefault();

             $('.head-nav .login').show();
             $("#username").focus();
        })
        $("[data-type=close-box]").click( function(){
            $("#form-login").hide(500);
        })

        //登录验证

        $.ajax({
            type:'get',
            url:'data/user/session_data.php',
            success:function(response){
                if(response.uname){
                    var username = response.uname;
   
                    $("[data-type=storage]").html(`
                        <div>
                            <p style="color:white">欢迎：${username} <a style="color:white" href="javascript:;" data-type="logout"> 退出登录</a></p> 
                        <div>
                    `);

                    $("[data-type=logout]").click( e=>{
                        window.event? window.event.returnValue = false : e.preventDefault();

                        $.ajax({
                            url:"data/user/logout.php",
                            success:function(response){
                                if(response.code == 200){

                                    setTimeout(()=>{
                                        window.location.reload()
                                    },500);
                                }
                            },
                            error:function(){
                                alert("未知错误，退出登录失败，请稍后重试");
                            }    
                        }).then(()=>{

                            sessionStorage.removeItem('username');
                        })

                    })
                }
            }
        })

        /**登录单击按钮事件监听**/
        $('[data-type=form-login]').click( ()=>{
            var uname = $("#username").val();
            var upwd = $("#password").val();

            if( uname && upwd ){
                $.ajax({
                    type: 'post',
                    url: 'data/user/login.php',
                    data: { uname,upwd },
                    success: function (result) {
                            console.log(result);
                        if (result.code === 200) {              //登录成功
                            sessionStorage.username = uname;
                            save();
                            window.location.reload();        

                        } else if (result.code === 201) {       //登录失败
                            
                            $("[data-type=login-info]").html('<p>登录失败！用户名或密码错误</p>');
                        }
                    },
                    error:function(){
                        alert("网络错误，请检查")
                    }
                });
            }
            
        });

        /******搜索*******/
        $("#searchIcon").click(()=>{
            var kw = $("#searchInput").val();
            if(kw){
                location.href = `search.html?kw=`+kw; 
            }
        })
        
        /***7天之内不再登录***/
        $(document).ready(function () {
                if ( getCookie("rmbUser") == "true" ) {
                    $("#remember").prop("checked", true);
                    $("#username").val( unescape( getCookie("username")) );
                    $("#password").val( unescape( getCookie("password")) );

                }
            });

        //记住用户名密码
        function save() {
                if ($("#remember").prop("checked")) {
                    var str_username = $("#username").val();
                    var str_password = $("#password").val();

                    setCookie("rmbUser", "true", 7);          //存储一个带7天期限的cookie
                    setCookie("username", str_username,7);
                    setCookie("password", str_password, 7);
                }
                else {
                    setCookie("rmbUser", "false", -1);
                    setCookie("username", "", -1);
                    setCookie("password", "",  -1);
                }
            }

    });




    if($('footer').length!=0){
         $.ajax({
            url:'footer.html',
            success:function(data){
                $('footer').html(data)
            }
        })
    }
})();



