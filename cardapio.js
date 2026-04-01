const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
})

const elements = document.querySelectorAll(".hidden")

elements.forEach( (element) => myObserver.observe(element))

// formulario

const name = document.getElementById("nome").value
const number =  document.getElementById("telefone").value
const msg = document.getElementById("msg").value

const labarra = 5532988024802


function enviar(){
    const text = "olá, me chamo ${name}. ${number}"

    const textCodificado = encodeURIComponent(text)

    const url = "https://wa.me/${labarra}?text=${textCodificado}";

    window.open(url, "_blank")
}