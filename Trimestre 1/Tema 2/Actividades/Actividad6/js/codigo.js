//Actividad 6. Crear una página que pida al usuario por pantalla su nombre y su correo electrónico. Mostrar los datos en la
//página HTML de forma que el nombre lo pinte con <h1> y el correo con <h2>
let nombre = prompt("Escribe tu nombre");
document.write(`<h1>${nombre}</h1>`);

let correo = prompt("Escribe tu correo electronico");
document.write(`<h2>${correo}</h2>`);