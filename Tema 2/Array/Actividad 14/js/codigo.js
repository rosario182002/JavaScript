let libros =[
    {titulo: 'Cien años de soledad', numPag: 417},
    {titulo: '1984', numPag: 328},
    {titulo: 'El señor de los anillos', numPag: 1137},
    {titulo: 'Don Quijote de la Mancha', numPag: 863}
];

let masPaginas = libros.filter(libro => libro.numPag >300);

let soloTitulo = masPaginas.map(libro => libro.titulo);

console.log(soloTitulo);
