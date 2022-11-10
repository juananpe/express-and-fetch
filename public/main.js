
let kudeatu = function (){

    document.getElementById("btn").addEventListener("click", function(){
        let app = document.getElementById("app")
        fetch("/usuarios").then(r => r.json()).then(usuarios => {
            usuarios.forEach(usuario => {
                app.innerHTML += `<p>${usuario.nombre} ${usuario.apellido}</p>`
            })
        })

    })
}


window.onload = kudeatu