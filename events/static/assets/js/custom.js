var btn = document.getElementById('btn');
	btn.addEventListener('click', () => {
	document.querySelector('form input').style.visibility = 'visible'
})

function hide(){
	document.querySelector('form input').style.visibility = 'hidden'
}

setInterval(hide, 3000)