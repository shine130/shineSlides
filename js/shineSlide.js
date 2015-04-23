(function($){
	$.fn.shineSlide=function(options){
		var defaults={
			ctnbox:".slidectn",
			nextbtn:".nextbtn",
			prebtn:".prebtn",
			controls:".slide_controls span",
			autotimer:5000,
			autoPlay:true
		};
		var opts=$.extend(defaults,options);
		var slide_ctnbox=$(this).find(opts.ctnbox);
		var slide_next=$(this).find(opts.nextbtn);
		var slide_pre=$(this).find(opts.prebtn);
		var slide_controls=$(this).find(opts.controls);
		var curnum=0;
		var allnum=$(this).find(opts.ctnbox+" .item").length;
		var ele_width=$(this).find(opts.ctnbox+" .item").width();
		slide_controls.eq(0).addClass("on");
		slide_controls.each(function(i){
			$(this).bind("click",function(){
				slide_ctnbox.stop();
				slide_ctnbox.animate({
					"margin-Left":-i*ele_width+"px"
				},500);
				slide_controls.removeClass("on");
				$(this).addClass("on");
				curnum=i;
			});
		});
		slide_next.bind("click",function(){
			gonext();
		});
		slide_pre.bind("click",function(){
			gopre();
		});
		function gonext(){
			slide_ctnbox.stop();
			var nextnum=curnum+1;
			if(nextnum<allnum){
				slide_ctnbox.animate({
					"margin-Left":-nextnum*ele_width+"px"
				},500);
				slide_controls.removeClass("on");
				slide_controls.eq(nextnum).addClass("on");
				curnum++;
			}else{
				slide_ctnbox.animate({
					"margin-Left":"0px"
				},500);
				slide_controls.removeClass("on");
				slide_controls.eq(0).addClass("on");
				curnum=0;
			};
		};
		function gopre(){
			slide_ctnbox.stop();
			var prenum=curnum-1;
			if(prenum>=0){
				slide_ctnbox.animate({
					"margin-Left":-prenum*ele_width+"px"
				},500);
				slide_controls.removeClass("on");
				slide_controls.eq(prenum).addClass("on");
				curnum--;
			}else{
				var num=allnum-1;
				slide_ctnbox.animate({
					"margin-Left":-num*ele_width+"px"
				},500);
				slide_controls.removeClass("on");
				slide_controls.eq(num).addClass("on");
				curnum=num;
			};
		};
		function autoPlay(){
			timer=setInterval(function(){
				gonext();
			},opts.autotimer);
		};
		if(opts.autoPlay==true){
			$(this).hover(function(){
				clearInterval(timer);
			},
			function(){
				autoPlay();
				});
			autoPlay();	
		};
	}
})(jQuery)