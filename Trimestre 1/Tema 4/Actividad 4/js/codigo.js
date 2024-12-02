// Seleccionamos el contenedor con el ID 'div1' (asumiendo que los párrafos están dentro de un contenedor)
let div1 = document.getElementById("div1");

// Seleccionamos el primer <p> dentro de 'div1'
let primerParrafo = div1.getElementsByTagName("p")[0];

// Eliminamos el primer <p>
primerParrafo.remove();
