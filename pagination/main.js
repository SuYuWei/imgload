$(function(){

	var pagination = $(".pagination");
	var arr = [];
	for(var i=0;i<123;i++){

		var img_url = "http://fakeimg.pl/70x70/"+Math.floor((Math.random()*100000)+99999);
		
		var grid = "<div class=\"mem\" data-num="+i+">"+
		            "<div class=\"img\" ><img src='"+img_url+"'></div>"+
		        	"<div class=\"name\">"+i+"</div>"+
		        "</div>";
		arr.push(grid);
	}

	var totalPage = Math.ceil(arr.length/40);
	var pageNum = 1;

  	pagination.append('<li><a class="active" href="#page1">1</a></li>');
  	for(var i=2;i <= totalPage;i++){
  		pagination.append('<li><a href="#page'+i+'">'+i+'</a></li>');
  	}
  	$("body").append('<div id="page1" class="contact-mems"></div>');
  	appendMem("page1",pageNum);

  	pagination.on('click','li a',function(){
  		if($(this).hasClass("active")) return;
  		$('.contact-mems').remove();
  		$(".pagination li a").removeClass("active");

  		$(this).addClass("active");
  		var pageId = $(this).attr('href').replace(/\#/,'');
  		pageNum = $(this).text();
  		$("body").append('<div id="'+pageId+'" class="contact-mems"></div>');
  		appendMem(pageId,pageNum);
  	});
  	
  	function appendMem(pageId,num){
  		// console.log(40*(num-1),40*num-1);
  		for(var i=40*(num-1); i<=40*num-1; i++){
  			$("#"+pageId).append(arr[i]);
  		}
		$("#"+pageId).show();
  	}

  	$(".pagePrev").click(function(){
  		if(pageNum <= 1) return;
  		pageNum--;
  		$('.pagination li a[href="#page'+pageNum+'"]').trigger('click');
  	});

  	$(".pageNext").click(function(){
  		if(pageNum >= totalPage) return;
  		pageNum++;
  		$('.pagination li a[href="#page'+pageNum+'"]').trigger('click');
  		// scrollPageBar();
  	});

  	function scrollPageBar(){
  		var test = 0;
  		console.log($('.pagination li a[class="active"]').offset().left-260,pagination.width()-50);
  		if($('.pagination li a[class="active"]').offset().left-260 > pagination.width()-50){
  			test+=50;
  			pagination.animate({scrollLeft : test},600);
  		}
  	}

})

