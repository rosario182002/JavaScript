// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el contenedor con el ID 'myDIV'
    let myDiv = document.getElementById("myDIV");

    // Seleccionamos todos los elementos <p> dentro de 'myDIV'
    let elementos = myDiv.getElementsByTagName("p");

    // Cambiamos el fondo del primer elemento <p>
    elementos[0].style.backgroundColor = "yellow";

    // Cambiamos el fondo del segundo elemento <p>
    elementos[1].style.backgroundColor = "orange";

    // Cambiamos el color de texto de todos los elementos <p> a rojo
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.color = "red";
    }
});
