function notFixedHeader() {  //更改footer样式，去除固定定位，和标签定位小三角
    setTimeout(() => {
        $(".fixed").removeClass('fixed');
        $(".white-block").removeClass("white-block");
    }, 50);
}
