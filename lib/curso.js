
const name= document.getElementById("username")
const password=document.getElementById("password")
const form=document.getElementById("form")
const parrafo=document.getElementById("war")

form.addEventListener("submit", e=>{
	e.preventDefault()
	let war= ""
	let entrar= false
    parrafo.innerHTML=""
    
	if(name.value.lenght <6){
		war += 'El nombre no es valido <br>'
		entrar= true
	}
	if(password.value.lenght <8){
		war += 'La contraseña no es valido <br>'
		entrar= true
	}
	if (entrar) {
		parrafo.innerHTML =war
	}
}
})
