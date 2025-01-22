// Cambia el color del texto a rojo al escribir
function cambiarColorEscribiendo(event){
    event.target.style.color ="red";
}
// Cambia el color del texto a negro al perder el foco
function cambiarColorPerderFoco(event){
    event.target.style.color = "black";
}
// Cambia el color del botón a azul al hacer clic
function cambiarColorBoton() {
    document.getElementById('botonPulsame').style.color = "blue";
}
 // Cambia el borde del botón al pasar el mouse
function cambiarBordeHover() {
    document.getElementById('botonCambia').style.border = "2px solid green";
}
  // Cambia el borde del botón al salir el mouse
function cambiarBordeSalir() {
    document.getElementById('botonCambia').style.border = "2px solid orange";
}

