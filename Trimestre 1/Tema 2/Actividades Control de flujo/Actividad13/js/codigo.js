//numeros ingresados por el usuario
let num1 = parseInt(prompt("Introduce el primer número"));
let num2 = parseInt(prompt("Introduce el segundo número"));
let num3 = parseInt(prompt("Introduce el tercer número"));

//realiza la media 
let media =(num1 + num2 + num3) /3 ;

document.write("La media es: " +  media.toFixed(2));

//para ver si es proporcionado hay que hacer esto y se compara con 7 por que indica que esta bien proporcionado.
 if(media>= 7){
    document.write(" Proporcionado")
 }


