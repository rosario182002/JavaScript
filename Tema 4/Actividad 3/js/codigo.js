// Seleccionamos el contenedor con el ID 'div1'
let div1 = document.getElementById("div1");

// Creamos un nuevo elemento <p>
let nuevoParrafo = document.createElement("p");

// Añadimos el texto al nuevo elemento <p>
nuevoParrafo.textContent = "Soy el primero ahora";

// Seleccionamos el primer <p> dentro de 'div1'
let primerParrafo = div1.getElementsByTagName("p")[0];

// Insertamos el nuevo <p> delante del primer <p>
div1.insertBefore(nuevoParrafo, primerParrafo);
