let estudiantes =[
    {nombre: 'Pepe',notas: [8, 7, 9] },
    {nombre: 'Juan', notas: [6, 5, 4]},
    {nombre: 'Eda', notas: [9, 8, 9]},
    {nombre: 'Sara', notas: [3, 4, 7]}
];

//Calcular el promedio de las clasificaciones
let promedios = estudiantes.map(estudiantes => {
    let suma = 0;

    for(let i=0; i<estudiantes.notas.length; i++){
        suma += estudiantes.notas[i];
    }
let notas1 = suma/estudiantes.notas.length;
return {nombre: estudiantes.nombre, notas1: notas1};

});

console.log("Promedios de calificaciones:");
console.log(promedios);

//Filtrar estudiantes que tienen nota superior a 7
let masnota = promedios.filter(estudiantes => estudiantes.notas1 >7);

console.log("Nota superior a 7:");
console.log(masnota);

//Imprimir nombre del estudiantes que tenga mas de un 7
let  nombreEstudiantes = promedios.filter(estudiantes => estudiantes.notas1 >7);

let soloNombre = nombreEstudiantes.map(estudiantes => estudiantes.nombre);
console.log("Nombre del estudiante con nota superior a 7:")
console.log(soloNombre);



