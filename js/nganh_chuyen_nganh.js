function changeCM(e){
	event.preventDefault()
	var target = e.dataset.cm
	
	var cm = document.querySelectorAll('[data-cm]')
	cm.forEach((c)=>{
		c.classList.remove("active")
	})
	e.classList.add("active")
	if(target === 'career'){
		document.querySelector(".career-form").classList.remove("hidden")
		document.querySelector(".major-form").classList.add("hidden")

	}
	if(target === 'major'){
		document.querySelector(".major-form").classList.remove("hidden")
		document.querySelector(".career-form").classList.add("hidden")
	}

}