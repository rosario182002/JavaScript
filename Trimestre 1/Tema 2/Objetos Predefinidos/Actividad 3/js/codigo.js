let dia = parseInt(prompt("Introduce el dia de tu cumpleaños"));
let mes = parseInt(prompt("Introduce el mes de tu cumpleaños"));

let añoActual = new Date().getFullYear();


for (let año = añoActual; año <=2100; año++){

   let fecha = new Date(año, mes, dia);
    if(fecha.getDate() === 0){
        document.write("Tu cumpleaños cae en domingo en el año: " + año);
    }

    }







