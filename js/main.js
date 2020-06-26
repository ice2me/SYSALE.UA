let list = document.querySelector('.container__one-list')
let block = document.querySelector('.container__one-block')

let colorNameOut = document.getElementById('color-name')
let colorRadio = document.getElementsByName('color-list')

let submit = document.querySelector('.container__one-submit')
let icon = document.querySelector('.container__one-icon')

block.onclick = showMenu
function showMenu(){
	if(list.classList.contains('show')){
		list.classList.remove('show')
		block.style.borderRadius = '15px'
	}
	else{
		list.classList.add('show')
		block.style.borderRadius = '15px 15px 0 0'
	}
	list.onmouseleave = closeMenu

	window.onclick = function onclickRadio() {
		for (var i = 0; i < colorRadio.length; i++) {
			if (colorRadio[i].type === 'radio' && colorRadio[i].checked) {
				rezultatRadio = colorRadio[i].value
			}
		}
		colorNameOut.innerHTML = rezultatRadio
	}
}

function closeMenu () {
	list.classList.remove('show')
	block.style.borderRadius = '15px'
}

let buttonMinus = document.querySelector('.container__one-minus')
let buttonPlus = document.querySelector('.container__one-plus')
let out = document.querySelector('.container__one-out')
let t = 1
buttonMinus.onclick = (e) => {
	e.preventDefault()
		if (t >= 1) {
			out.innerHTML = t--
			buttonMinus.disabled = false
		}else{
			buttonMinus.disabled = true
		}
}
buttonPlus.onclick = (e) => {
	e.preventDefault()
		if(t >= 1){
			out.innerHTML = t++
		}
}

submit.onclick = (e) => {
	e.preventDefault()
	icon.innerHTML = '<div class="container__one-icon__img"><img src="./img/Vector.png" alt=""></div>'
}
