$(function(){

	for(var i=0;i<1000;i++){
		var img_url = "http://fakeimg.pl/70x70/000?"+Math.floor((Math.random()*1000)+1);
		var grid = "<div class=\"mem\">"+
		            "<div class=\"img waitLoad\" data-url=\""+img_url+"\"></div>"+
		        	"<div class=\"name\">test</div>"+
		        "</div>";
		$(".contact-mems").append(grid);
	}
  	
  	var tmp = $(".contact-mems").find(".img.waitLoad:lt(100)");
	$.each(tmp, function(index,domTmp){
		var dom = $(domTmp);
		dom.css("background-image","url("+dom.attr("data-url")+")").removeClass("waitLoad").removeAttr("data-url");
	});

	var memContainer = $(".contact-mems");
	var g_contactWaitLoadImgs = memContainer.find(".img.waitLoad");
	memContainer.scroll(function(e) {
		if( null == g_contactWaitLoadImgs) return;
		
		var height = $(this).height()+100;
		for(var i=g_contactWaitLoadImgs.length-1;i>=0;i--){
			var tmpDom = $(g_contactWaitLoadImgs[i]);
			if(tmpDom.offset().top < height){
				tmpDom.css("background-image","url("+tmpDom.attr("data-url")+")").removeClass("waitLoad").removeAttr("data-url");
				g_contactWaitLoadImgs.splice(i,1);
			}
		}
	});
})

