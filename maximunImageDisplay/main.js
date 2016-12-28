$(function(){

	var memContainer = $(".contact-mems");
	var arr = [];
	for(var i=0;i<1000;i++){
		if(i < 80){
			var img_url = "http://fakeimg.pl/70x70/ccc?"+Math.floor((Math.random()*100000)+1);
		}else if(i >= 80 && i<160){
			var img_url = "http://fakeimg.pl/70x70/FF5733?"+Math.floor((Math.random()*100000)+1);
		}else{
			var img_url = "http://fakeimg.pl/70x70/000?"+Math.floor((Math.random()*100000)+1);
		}
		
		var grid = "<div class=\"mem\">"+
		            "<div class=\"img\" style=\"background-image:url("+img_url+")\"></div>"+
		        	"<div class=\"name\">test</div>"+
		        "</div>";
		arr.push(grid);
		// $(".contact-mems").append(grid);
	}
	
  	console.log(arr);

	memContainer.scroll(function(e) {
		var height = $(this).height();	//500
		var scrollTop = $(this).scrollTop();	
  		// console.log(height,scrollTop);
  		// console.log(Math.floor(scrollTop / height));
  		if(scrollTop > height){
  			var test = Math.floor(scrollTop / height);
  			console.log(test);
  		}
	});
})

