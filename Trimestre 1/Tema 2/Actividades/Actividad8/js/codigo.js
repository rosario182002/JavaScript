/*Crear una página que pida el precio de un artículo y la cantidad de artículos que desea comprar. Escribir en
la página HTML el total que debe abonar. ( El precio debe ser un numero con decimales)
¿Cómo podemos fijar el número decimal sólo con 2 decimales?*/
let precio = parseFloat(prompt("Escribe el precio de un articulo"));
let cantidad = parseFloat(prompt("Escribe la cantidad de articulos que quieres comprar"));

let total = precio*cantidad;

//te pone el total con los dos decimales (tofixed(2) para indicar los decimales que quereos poner)
document.write(`<p>El precio total es: ${total.toFixed(2)} €</p>`);