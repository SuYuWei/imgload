$(function(){

	var memContainer = $(".contact-mems");
	var arr = [];

	for(var i=0;i<1000;i++){

		var img_url = "http://fakeimg.pl/70x70/"+Math.floor((Math.random()*100000)+99999);
		
		var grid = "<div class=\"mem\" data-num="+i+">"+
		            "<div class=\"img\" ><img src='"+img_url+"'></div>"+
		        	"<div class=\"name\">"+i+"</div>"+
		        "</div>";
		arr.push(grid);
		// $(".contact-mems").append(grid);
		if(i<80){
			memContainer.append(arr[i]);
		}
	}

	memContainer.scroll(function(e) {
		e.preventDefault();

		var height = $(this).height();	//500
		var scrollTop = $(this).scrollTop();	
		var lastheight = $(this).height() + $(this).scrollTop();

  		console.log(height,scrollTop,lastheight);

  		if(scrollTop > height){
  			for(var i=40*(test-1); i<=40*test-1; i++){
  				memContainer.append(arr[i]);
	  		}
  		}
  		// var test = Math.floor(scrollTop / height)+2;
  		// console.log((scrollTop-height)%height);
  		// if(scrollTop == height){
  		// 	for(var i=40*(test-1); i<=40*test-1; i++){
  		// 		memContainer.append(arr[i]);
	  	// 	}
  		// }
	});
})

