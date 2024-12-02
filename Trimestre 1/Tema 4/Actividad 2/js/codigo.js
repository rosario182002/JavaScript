// Seleccionamos el contenedor con el ID 'div1'
let div1 = document.getElementById("div1");

// Creamos un nuevo elemento <p>
let nuevoParrafo = document.createElement("p");

// Añadimos el texto al nuevo elemento <p>
nuevoParrafo.textContent = "Soy el nuevo";

// Asignamos un id al nuevo elemento <p>
nuevoParrafo.id = "p3";

// Añadimos el nuevo <p> al final del contenedor 'div1'
div1.appendChild(nuevoParrafo);
