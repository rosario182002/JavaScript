
var array = [];
var objeto1 = {id: 1, nombre: "galleta", precio: 2.50}
var objeto2 = {id: 2, nombre: "pan", precio: 0.50};
var objeto3 = {id: 3, nombre: "chocolate", precio:1.70};
var objeto4 = {id:4, nombre: "café", precio: 2.50};
array.push(objeto1, objeto2, objeto3, objeto4);

var tbody = document.getElementById("cuerpoTabla");
array.forEach((objeto) => {
  //Por cada objeto, se crea una fila y se le asigna su id.
  var fila = document.createElement("tr");
  fila.setAttribute("id", objeto.id);

  //luego se crea un td para cada atributo y se le asigna su valor
  var nombre = document.createElement("td");
  nombre.innerHTML = objeto.nombre;
  var precio = document.createElement("td");
  precio.innerHTML = objeto.precio;
  var codigo = document.createElement("td");
  codigo.innerHTML = objeto.precio;

  //Insertamos cada una de las celdas a la fila
  fila.appendChild(nombre);
  fila.appendChild(precio);
  fila.appendChild(codigo);
 
  //imprimimos cada fila
  tbody.appendChild(fila);
});
