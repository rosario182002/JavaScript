document.getElementById("cambiarNombre").addEventListener("click", function(){

    let nuevoNombre = prompt("Por favor, introduce tu nombre: ");

    if(nuevoNombre != null && nuevoNombre.trim() !== ""){
        document.getElementById("nombreInput").value = nuevoNombre;
        document.getElementById("cambiarNombre").textContent = "pulsado";

    }

});