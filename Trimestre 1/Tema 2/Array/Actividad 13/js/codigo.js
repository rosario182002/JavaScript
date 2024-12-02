let usuarios =[
    {nombre: 'Juan', edad: 18},
    {nombre: 'Eda', edad: 21},
    {nombre: 'Pepe', edad: 17},
    {nombre: 'Luisa', edad: 23},
    {nombre: 'Carlos', edad: 16}
]
let mayoresDeEdad = usuarios.filter(usuario => usuario.edad >=18);

let nombreEdad = mayoresDeEdad.map(usuario => `${usuario.nombre} (${usuario.edad} años)`);

console.log(nombreEdad);

/*document.write(nombreEdad);*/