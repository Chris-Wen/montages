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
             e.preventDefault();
             $('.head-nav .login').show();
        })
    })

    if($('footer').length!=0){
         $.ajax({
            url:'footer.html',
            success:function(data){
                $('footer').html(data)
            }
        })
    }
})();



