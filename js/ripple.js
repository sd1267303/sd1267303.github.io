const buttons = document.querySelectorAll('a');
buttons.forEach(btn => {
		let ripples = document.createElement('span');
		btn.appendChild(ripples);
		ripples.style.opacity=0;

	btn.addEventListener('mousemove', function(e) {
		let x = e.clientX - e.target.offsetLeft;
		let y = e.clientY - e.target.offsetTop;
		ripples.style.opacity=0.4;
		ripples.style.left = x + 'px';
		ripples.style.top = y + 'px';
	})
	btn.addEventListener("mousedown",function(e){
		ripples.classList.remove("play")
		window.requestAnimationFrame(()=>{
			ripples.classList.add("play")
		})
	})
	btn.addEventListener("mouseleave",function(e){
		ripples.classList.remove("play")
		ripples.style.opacity=0;
	})
})