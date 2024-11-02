//Punto 1
console.log("¡Hola, Mundo!");
//Punto 2
alert("¡Bienvenido a mi página web!");
//Punto 3
document.write("Me encanta esta asignatura");
//Punto 4
document.write(
  '<br> <a href="https://www.google.com/?hl=es">Enlace a google</a>'
);

typeof 12;
typeof 12.3;
typeof (12 * 3);
typeof "Hola";
typeof "Hola";
typeof Hola;
typeof (12 > 3);

var x = 9;
if (x == 9) {
  x++;
  console.log(x);
} //esto da 10

/*<script>
 {
 var x = 9;
 }
 console.log(x);
 </script>            //Esto da mal por que esta fuera
*/

var nombre = "Juan";
if (nombre) {
  var nombre = "Pedro";
  console.log(nombre, " dentro del IF");
} // pone en los dos PEDRO
console.log(nombre, " fuera del IF");

var nombre = "Juan";
if (nombre) {
  let nombre = "Pedro";
  console.log(nombre, " dentro del IF"); // PONE PEDRO  POR QUE EL LET ESTA ENTRE LOS CORCHETES
}
console.log(nombre, " fuera del IF"); // JUAN

console.log(
  'Javascript\nes\n\ttremendo\nJohn\'s computer\nLa versión de "Javascript" es ES6'
);
