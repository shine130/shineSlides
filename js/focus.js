/**
 * code by http://blog.ipsfan.com/ on 2015/6/18.
 */
(function($){
$.fn.focusSlide=function(options){
    var defaults={
        btn:".slideBtn span",
        scrollBox:".slideFul",
        next:".nextBtn",
        pre:".preBtn",
        speed:4000,
        autoPlay:true,
        fullScreen:false
            },
        opts= $.extend(defaults,options);
//opts end
    var obj=this,
        scrollBox=obj.find(opts.scrollBox),
        scrollWidth=scrollBox.width(),
        scrollEle=obj.find("li"),
        btn=obj.find(opts.btn),
        next=obj.find(opts.next),
        pre=obj.find(opts.pre),
        slideId= 0,
        timer,
        speed=opts.speed,
        autoPlay=opts.autoPlay,
        fullScreen=opts.fullScreen;

    scrollEle.eq(slideId).fadeIn(500);
    btn.eq(slideId).addClass("on");
    function updateTimer(){
        scrollEle.stop(true,true).fadeOut(500);
        btn.removeClass("on");
        slideId++;
        if(slideId>=scrollEle.length){
            slideId=0;
        }else if(slideId<0){
            slideId=scrollEle.length-1;
        }
        scrollEle.eq(slideId).stop(true,true).fadeIn(500);
        btn.eq(slideId).addClass("on");
    }
    if (autoPlay) timer = setInterval(updateTimer, speed);
    obj.hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(updateTimer, speed);
    });
    btn.bind("mouseenter",function(){
        var index=$(this).index();
        slideId=index-1;
        updateTimer();
    });
    pre.bind("click",function(){
        slideId=slideId-2;
        updateTimer();
    });
    next.bind("click",function(){
        updateTimer();
    });

    //fullScreen
    if(fullScreen){
        function setPos(){
            var objWidth=obj.width(),
                scLeft=scrollWidth/2-objWidth/2;
            scrollBox.css({"left":-scLeft});
        }
        setPos();
        $(window).bind("resize",function(){
            setPos();
        });
    }

}
})(jQuery);