document.getElementById("cambiar").addEventListener("click", function() {
    let cambiarTexto = confirm("¿Quieres cambiar el texto?");
    
    if (cambiarTexto) {
        document.getElementById("texto").textContent = "Texto Cambiado";
    } else {
        let cambiarColor = confirm("¿Quieres cambiar el color del texto a naranja?");
        if (cambiarColor) {
            document.getElementById("texto").style.color = "orange";
        }
    }
});
