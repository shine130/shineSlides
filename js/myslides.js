(function($){
	$(function(){
		var slide_ctnbox=$("#slidebox").find(".slidectn");
		var slide_next=$("#slidebox").find(".nextbtn");
		var slide_pre=$("#slidebox").find(".prebtn");
		var slide_controls=$("#slidebox .slide_controls").find("span");
		var curnum=0;
		var allnum=$("#slidebox .slidectn").find(".item").length;
		var ele_width=$("#slidebox .slidectn").find(".item").width();
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
			},5000);
		};
		$("#slidebox").hover(function(){
			clearInterval(timer);
		},
		function(){
			autoPlay();
		});
		autoPlay();
	});
})(jQuery)