let inventario = [
    {nombre: 'Camiseta', precio: 15.55, cantidad: 3},
    {nombre: 'Pantalones', precio: 29.99, cantidad: 5},
    {nombre: 'Zapatillas', precio: 49.99, cantidad: 6},
    {nombre: 'Gorra', precio: 12.99, cantidad: 9},
    {nombre: 'Chaqueta', precio: 89.99, cantidad: 1}

];

let productosStock = inventario.map((producto) =>(
     {
        nombre1: producto.nombre,    
        valorTotal: (producto.cantidad * producto.precio).toFixed(2)
    }));

productosStock.forEach(producto => {
    console.log(`Producto: ${producto.nombre1}, Valor total en stock: € ${producto.valorTotal}`);
});