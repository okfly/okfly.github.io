window.onload = function(){
	var timer = null;
	animate();
	var left = parseInt(getStyle(slide,'left'));
	

}

function animate(){
	var slide = document.getElementById('slide');
	var destination = 960;
	var curr = 0;

	timer = setInterval(function() {
		if(curr == destination){
			clearInterval(timer);
			return;
		}
		else
		{
			var left = parseInt(getStyle(slide,'left'));
			slide.style.left = left - 1 + 'px';
	        curr += 1;
	    }
	}, 10)	
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj,false)[attr];
	}
}