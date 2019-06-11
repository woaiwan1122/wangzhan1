
(function (){
	var sreenWidth = window.innerWidth
			
	var htmlSize = window.innerWidth*1/3.75
	document.querySelector('html').style.fontSize = htmlSize+'px'
	
	window.onresize = function(){
		console.log(window.innerWidth)
		var sreenWidth = window.innerWidth
		var htmlSize = window.innerWidth*1/3.75
		document.querySelector('html').style.fontSize = htmlSize+'px'
	}
	
})()


