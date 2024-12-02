//ACTIVIDAD 1
//1. El mensaje “Bienvenido” al entrar en la página.
alert("¡Bienvenido");
//2.Una frase con comillas simples en el interior
console.log("'Hola, soy Rosario'");
//3.Una frase con comillas dobles en el interior
console.log('"Hola, Mundo"');
//4. Al entrar muestre un mensaje alert con vuestro nombre.
alert("Rosario Delgado Moreno");
//5. Repetimos el paso anterior creando una variable con vuestro nombre
let nombre = "Rosario";
alert("Mi nombre es " + nombre);

//Actividad 2 Crear una página que pida al usuario vuestro nombre a través de un cuadro de entrada de texto. Y que pinte
//en la página el resultado
let nombre1 = prompt("Escribe tu nombre");
document.write(nombre1);

//Actividad 3  Crear una página que pregunte al usuario si es mayor de edad o no. Mostrar por consola el resultado
let respuesta = confirm("¿Eres mayor de edad?");
console.log(respuesta);

//Actividad 4
//1. Devuelva y muestre por consola la primera coincidencia de “Mundo” en la variable txt=”Hola
//Mundo”;
let texto = "Hola mundo";
let pal = texto.indexOf("mundo");
console.log(pal);
//2. Sustituya la palabra ‘Mundo’ por ‘Universo’ y muestre por consola: “Hola Universo”
let texto1 = texto.replace("Mundo","Universo"); //no me sale 
console.log(texto1);
//3. Muestre por consola el texto en mayúsculas
let texto2 = texto.toUpperCase();
console.log(texto2);
//4. Muestre por consola el texto en minúsculas
let texto3 = texto.toLocaleLowerCase();
console.log(texto3);
//5. Dadas dos cadenas una con vuestro nombre y otra con vuestro apellido, escribir por consola el nombre
//completo utilizando el operador de concatenación.
let nombre2 = "Rosario";
let apellido = "Delgado";
let apellido2 = "Moreno";
console.log(nombre2 + " " + apellido + " " + apellido2);
//6. Dada la palabra Cliente, recuperar la subcadena Cli y escibirla por consola.
let palabra = "cliente";
let subcadena = palabra.substring(0,3);
console.log(subcadena);
//7. Dada la palabra Cliente, recuperar la subcadena ente y escibirla por consola.
let subcadenaRecu = palabra.substring(3);
console.log(subcadenaRecu);

//Actividad 5. La función isNaN, devuelve verdadero si la expresión no es numérica:
//1. ¿Qué devuelve console.log(isNaN(“Hola” * 5));? 
console.log(isNaN("Hola"*5)); //devuelve true ya que intenta multiplicar hola por 5 
//2. ¿Y console.log(isNaN(“3”*5)); ?
console.log(isNaN("3"*5));//imprime false por que el resultado de la operación no es valido





