$(document).ready(function(){
	$("#clickarea").click(function(){
		//show hide toggle
		$("#panel").toggle(1000, function(){
			alert("Stop playing!")
		});
	})
	
	$("#clickarea2").click(function(){
		//fade the panel
		//fadeIn fadeOut fadeToggle
		// $("#panel2").fadeToggle('slow')
		$("#panel2").fadeTo('slow', 0.6)
		$("#panel2b").fadeTo('slow', 0.2)
		});
	
	$("#slidearea").click(function(){
		//slideDown slideUp slideToggle
		$("#panel3").slideToggle('slow')
		
	})
	
	//Animations
	$("#start").click(function(){
		// $("#box").animate({left:"600px"}, 4000)
		// $("#box").animate({
			// left:"600px",
			// opacity: '0.4',
			// height: '+=250px', //using relative values is allowed
			// width: 'toggle',
		// }, 2000)
		
		var box = $("#box")
		
		box.animate({left:"600px",opacity: '0.4',height: '250px'}, 2000);
	})
	//JQ stop() method 
	$("#stop").click(function(){
		$("#box").stop()
	})
	//JQ stop() method 
	
	
	
})