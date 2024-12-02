let diaSemnana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sabado'];
let fechaActual = new Date();
let nombreDia = diaSemnana[fechaActual.getDay];

document.write("Hoy es: ", nombreDia);