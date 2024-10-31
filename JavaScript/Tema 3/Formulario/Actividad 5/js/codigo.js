function mostrarSeleccion() {
    // Obtener todos los radio buttons con el nombre 'opcion'
    const opciones = document.getElementsByName("opcion");
    let seleccionada = "";

    // Recorrer las opciones para encontrar la seleccionada
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionada = opciones[i].value; // Obtener el valor de la opción seleccionada
            break; // Salir del bucle una vez encontrada la seleccionada
        }
    }

    // Mostrar la selección en un alert
    if (seleccionada) {
        alert("La opción seleccionada es: " + seleccionada);
    } else {
        alert("No se ha seleccionado ninguna opción.");
    }
}