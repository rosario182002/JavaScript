let hoy = new Date();
let cumple = new Date('2002,11,18');

document.write("La fecha actual es" + hoy.toLocaleDateString()+"<br>");
document.write("Mi cumpleaños es" + cumple.toLocaleDateString()+ "<br>");

document.write(`Estamos en ${hoy.getFullYear()} y nací en el año ${cumple.getFullYear()}`+ "<br>");
hoy.setFullYear(2023)
document.write(`Actualizo al año anterior ${hoy.toLocaleDateString()} "<br>`);



    