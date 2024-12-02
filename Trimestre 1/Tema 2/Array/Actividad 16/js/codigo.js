//Array de productos donde los productos tienen una categoria con nombre y descripcion
let productos = [
    {nombre: 'ordenador', precio: 1200, categoria:{nombre:'Electronica', descripcion: 'Dispositivos electrónicos' }},
    {nombre: 'tablet', precio:600, categoria: {nombre: 'Electronica', descripcion: 'Dispositivos electrónicos'}},
    {nombre: 'Cafetera', precio: 100, categoria:{nombre: 'Hogar', descripcion: 'Electrodomésticos de cocina' }},
    {nombre: 'Silla', precio: 70, categoria:{nombre: 'Muebles', descripcion: 'Artículos de mobiliario'}}
]

//Obtener array de nombres de productos que pertenecen  a una categoria específica
let categoriaEspecifica = 'Electronica';
let productosElectronica = productos.filter(producto => producto.categoria.nombre === categoriaEspecifica)
productosElectronica.map(producto => producto.nombre);

console.log(productosElectronica);

// Imprimir los detalles de los productos filtrados, incluyendo el nombre de la categoría y su descripción
console.log(`\nDetalles de productos de la categoría "${categoriaEspecifica}":`);
productos.filter(producto => producto.categoria.nombre === categoriaEspecifica)

// Usar otro bucle for para imprimir los detalles de cada producto que pertenece a la categoría específica
for (let i = 0; i < productos.length; i++) {
if (productos[i].categoria.nombre === categoriaEspecifica) {
// Imprimir detalles de los productos
console.log(`Producto: ${productos[i].nombre}`);
console.log(`Precio: $${productos[i].precio}`);
console.log(`Categoría: ${productos[i].categoria.nombre}`);    
console.log(`Descripción de la categoría: ${productos[i].categoria.descripcion}`);
        console.log('-------------------'); // Línea para separar
    }
}

