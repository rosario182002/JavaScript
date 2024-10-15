let cadena = prompt("Dime una cadena");
let invertida = '';

for (let i =cadena.length -1; i>=0; i--){
    invertida +=cadena[i];
}

document.write(invertida);
