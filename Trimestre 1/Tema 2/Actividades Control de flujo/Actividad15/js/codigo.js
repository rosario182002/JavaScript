let base = parseInt(prompt("Introduce la base del rectangulo"));
let altura = parseInt(prompt("Introduce la altura del rectangulo"));

let rectangulo = ''; // esto es para almacenar el resultado

//Primero para empezar a crear el rectangulo

for(let i = 0; i< altura; i++){ // esto para cada fila del rectangulo
    //para la primera y ultima fila

    //rectangulo="";

    if(i== 0 || i == altura -1 ){ // eto me dice si esta extrictamente igual 
        for(let j =0; j<base; j++){ // para cada columna de la fila
            rectangulo += '* '; //para que le ponga el * 
        }        
    }
    else{ //para poner lo del medio
        rectangulo += '* '; //para que lo ponga al principio
        for(let j = 0; j<base -2; j++){ // este me agrega los espacio en blanco entre los asteriscos
            rectangulo +=  '  '; //los espacios del medio
        }
        rectangulo += '*'; //asterisco del final
    }
    document.write(rectangulo +"<br>");
    
    //console.log(rectangulo);
    //rectangulo += '\n'; //salto de linera despues de cadsa fila
} 
