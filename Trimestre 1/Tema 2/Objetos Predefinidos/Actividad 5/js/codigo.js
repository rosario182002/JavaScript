let hoy = new Date();
let partes = fechaNacimiento.split('/');
let fechaNacimiento = new Date(partes[2], partes[1]-1, partes[0]);

let edad = hoy.getFullYear() - fechaNacicmiento.getFullYear();
let mes = hoy.getMonth() - fechaNacimiento.getMonth();

if(mes<0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())){
    edad--;
}
document.write("La edad es: ", edad);
