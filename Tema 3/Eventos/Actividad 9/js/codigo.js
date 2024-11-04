// Función para abrir la nueva ventana con datos.html
document.getElementById("abrirPagina").addEventListener("click", () => {
   window.open("datos.html", "Datos del Usuario", "width=400,height=300");
   function ventanita (){
    document.getElementById("mostrar").addEventListener("click", enviarDatos);
   }
});

// Función para calcular años bisiestos desde el año de nacimiento hasta el año actual
function calcularAniosBisiestos(anioNacimiento) {
    let anioActual = new Date().getFullYear();
    let aniosBisiestos = [];

    for (let anio = anioNacimiento; anio <= anioActual; anio++) {
        if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
            aniosBisiestos += anio + ", ";
        }
    }

    return aniosBisiestos;
}

// Función para recibir los datos de la ventana secundaria y mostrarlos en la ventana principal
function mostrarDatosEnPrincipal(nombre, apellidos, fechaNacimiento) {
    let fecha = new Date(fechaNacimiento);
    let dia =  fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();

    let fechaFormateada = (dia < 10 ? '0' + dia : dia ) + '/' + (mes < 10 ? '0' + mes : mes) + '/' + anio;
    let aniosBisiestos = calcularAniosBisiestos(anio);

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre} ${apellidos}</p>
        <p><strong>Fecha de nacimiento:</strong> ${fechaFormateada}</p>
        <p><strong>Años bisiestos desde que naciste:</strong> ${aniosBisiestos}</p>`;
}

// Función que se ejecuta en la ventana secundaria para enviar los datos a la ventana principal
function enviarDatos() { //NO ME FUNCIONA
    console.log("Botón 'Mostrar' presionado."); // Agregar esta línea para depuración
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;

    if (nombre && apellidos && fechaNacimiento) {
        window.opener.mostrarDatosEnPrincipal(nombre, apellidos, fechaNacimiento);
        window.close();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Asigna el evento al botón 'Mostrar' de la ventana secundaria
//if (window.location.pathname.includes("datos.html")) {

   // document.getElementById("mostrar").addEventListener("click", enviarDatos);
//}

ventanita();