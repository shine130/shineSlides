/**
 * code by http://blog.ipsfan.com/ on 2015/6/18.
 */
var obj=$("#slide"),
    scrollBox=obj.find(".slideFul"),
    scrollWidth=scrollBox.width(),
    scrollEle=obj.find("li"),
    btn=obj.find(".slideBtn span"),
    slideId= 0,
    timer,
    speed=4000,
    autoPlay=true;
function setPos(){
    var	winWidth=$(window).width(),
        scLeft=scrollWidth/2-winWidth/2;
    scrollBox.css({"left":-scLeft});
}
setPos();

$(window).bind("resize",function(){
    setPos();
});

scrollEle.eq(slideId).fadeIn(500);
btn.eq(slideId).addClass("on");
function updateTimer(){
    scrollEle.stop(true,true).fadeOut(500);
    btn.removeClass("on");
    slideId++;
    if(slideId>=scrollEle.length){
        slideId=0;
    }
    scrollEle.eq(slideId).stop(true,true).fadeIn(500);
    btn.eq(slideId).addClass("on");
    console.log("动画执行"+slideId);
}
if (autoPlay) timer = setInterval('updateTimer()', speed);
obj.hover(function(){
    clearInterval(timer);
},function(){
    timer = setInterval('updateTimer()', speed);
});
btn.bind("mouseenter",function(e){
    var index=$(this).index();
    slideId=index-1;
    console.log("btn点击"+slideId);
    updateTimer();
});
