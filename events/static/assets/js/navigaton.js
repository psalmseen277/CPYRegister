	// var btn = document.getElementById('btn');
		 // btn.addEventListener('click', () => {
		   // document.querySelector('form input').style.visibility = 'visible'
		   // })
	// function hide(){
		// document.querySelector('form input').style.visibility = 'hidden'
	// }
	// setInterval(hide, 7000)
	$(document).ready(function(){
		$('#btn').click(function(){
			$("input").toggle()
		})
		
		//create a filter
		$("input").on("keyup", function(){
			var value = $(this).val().toLowerCase();
			//filter function
			$("#myList li").filter(function(){
			$(this).toggle($(this).text().toLowerCase().indexOf(value) >-1).css("background", "red")
			})
			
			//Any div
			
			$("#myDiv *").filter(function(){
				$(this).toggle($(this).text().toLowerCase().indexOf(value) >-1).css("background", "red")
			})
		})
	})