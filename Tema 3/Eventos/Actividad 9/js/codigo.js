// Función para abrir la nueva ventana con datos.html
document.getElementById("abrirPagina").addEventListener("click", () => {
   window.open("datos.html", "Datos del Usuario", "width=400,height=300");
});

// Función para calcular años bisiestos desde el año de nacimiento hasta el año actual
function calcularAniosBisiestos(anioNacimiento) {
    const anioActual = new Date().getFullYear();
    const aniosBisiestos = [];

    for (let anio = anioNacimiento; anio <= anioActual; anio++) {
        if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
            aniosBisiestos += anio + ", ";
        }
    }

    return aniosBisiestos;
}

// Función para recibir los datos de la ventana secundaria y mostrarlos en la ventana principal
function mostrarDatosEnPrincipal(nombre, apellidos, fechaNacimiento) {
    const fecha = new Date(fechaNacimiento);
    const dia =  fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();

    const fechaFormateada = (dia < 10 ? '0' + dia : dia ) + '/' + (mes < 10 ? '0' + mes : mes) + '/' + anio;
    const aniosBisiestos = calcularAniosBisiestos(anio);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre} ${apellidos}</p>
        <p><strong>Fecha de nacimiento:</strong> ${fechaFormateada}</p>
        <p><strong>Años bisiestos desde que naciste:</strong> ${aniosBisiestos}</p>`;
}

// Función que se ejecuta en la ventana secundaria para enviar los datos a la ventana principal
function enviarDatos() { //NO ME FUNCIONA
    console.log("Botón 'Mostrar' presionado."); // Agregar esta línea para depuración
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    if (nombre && apellidos && fechaNacimiento) {
        window.opener.mostrarDatosEnPrincipal(nombre, apellidos, fechaNacimiento);
        window.close();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Asigna el evento al botón 'Mostrar' de la ventana secundaria
if (window.location.pathname.includes("datos.html")) {
    document.getElementById("mostrar").addEventListener("click", enviarDatos);
}