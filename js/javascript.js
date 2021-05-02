function mostrarAlerta(){
    alert('Enviado')
}

function hacerClick(){
    var button = document.getElementById('boton-enviar').onclick = mostrarAlerta
    console.log("Enviado")
}
window.onload = hacerClick;