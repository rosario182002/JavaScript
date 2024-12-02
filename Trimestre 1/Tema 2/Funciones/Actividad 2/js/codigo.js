 let num = parseInt(prompt("Introduce un número mayor a 0: "));

 // Comprobamos si el número es válido
 if (isNaN(num) || num < 0) {
    document.write("Por favor, introduce un número mayor a 0");
} else {
    //Función flecha para calcular el factorial
    const factorial = (numerito) => {
        // Si n es 0, el factorial es 1
        if (numerito === 0) return 1;
        // Calculamos el factorial multiplicando n por el factorial de n-1
        return numerito * factorial(numerito - 1);
    };

    //Llamamos a la función y mostramos el resultado
    document.write(`El factorial de ${num} es ${factorial(num)}.`);
}
    













