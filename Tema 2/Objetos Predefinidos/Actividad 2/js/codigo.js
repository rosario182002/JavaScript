let fechaActual = new Date();
let añoProximo = fechaActual.getFullYear() + 1;
let mifechaFin = new Date(añoProximo, 5, 30);

let milisegundosDia = 24 * 60*60*1000;

numDias = mifechaFin - fechaActual;

document.write(`<h1> Quedan ${Math.floor(Math.abs(numDias)/milisegundosDia)} dias hasta el 30 de junio de ${añoProximo}`)