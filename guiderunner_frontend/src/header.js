document.addEventListener('DOMContentLoaded',()=>{
	const BTN=document.getElementById('nav-btn')
	const HEADER=document.getElementById('header')
	const NAVBAR=document.getElementById("navbar")
	BTN.addEventListener('click',()=>{
		if(HEADER.classList.contains('open')){
			HEADER.classList.remove('open')
			NAVBAR.classList.remove('open')
			// BTN.innerText='+'
		}else{
			HEADER.classList.add('open')
			NAVBAR.classList.add('open')
			// BTN.innerText='-'
		}
		// console.log("okos")
	})
})