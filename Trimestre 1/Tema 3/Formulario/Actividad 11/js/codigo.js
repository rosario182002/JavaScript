function verificarEdad(){
    let edad = document.getElementById("edad").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";
    let edad1 = parseInt(edad);
            if (isNaN(edad1)) {
                // Si no es un número, mostrar mensaje en rojo
                resultado.textContent = "Por favor, introduce un número válido.";
                resultado.style.color = "red";
            } else if (edad1 >= 18) {
                // Si es mayor de edad, mensaje en verde
                resultado.textContent = "Eres mayor de edad.";
                resultado.style.color = "green";
            } else {
                // Si es menor de edad, mensaje en rojo
                resultado.textContent = "Eres menor de edad.";
                resultado.style.color = "red";
            }
}