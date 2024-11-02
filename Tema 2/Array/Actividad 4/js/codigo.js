//Array de objetos
let productos = [
    {nombre: 'Camiseta', precio: 15.55, categoria: 'Ropa'},
    {nombre: 'Pantalones', precio: 29.99, categoria: 'Ropa'},
    {nombre: 'Zapatillas', precio: 49.99, categoria: 'Calzado'},
    {nombre: 'Gorra', precio: 12.99, categoria: 'Ascesorios'},
    {nombre: 'Chaqueta', precio: 89.99, categoria: 'Ropa'}

];

let nombreMayus = productos.map((producto) =>
    producto.nombre.toLocaleUpperCase()
);

console.log("Nombre de los productos en mayusculas");
console.log(nombreMayus);

document.write("<p>" + nombreMayus.join(" - ") + "</p>");