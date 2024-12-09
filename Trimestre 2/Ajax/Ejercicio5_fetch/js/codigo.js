document.addEventListener("DOMContentLoaded", function() {
    const tabla = document.getElementById("studentTable");
    const tbody = tabla.querySelector("tbody"); // Obtener el cuerpo de la tabla para agregar filas

    if (!tbody) {
        console.error("No se encontró el tbody en la tabla.");
        return;
    }

    // Usamos fetch para cargar el archivo JSON
    fetch("fichero.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el JSON");
            }
            return response.json(); // Convertir respuesta en JSON
        })
        .then(dato => {
            // Recorrer los estudiantes y agregar una fila por cada uno
            dato.students.forEach(students => {
                const row = document.createElement("tr");

                // Columna ID
                const id1 = document.createElement("td");
                id1.textContent = students.id;
                row.appendChild(id1);

                // Columna Nombre
                const nombre1 = document.createElement("td");
                nombre1.textContent = students.nombre;
                row.appendChild(nombre1);

                // Columna Notas
                const notas1 = document.createElement("td");
                notas1.textContent = students.notas.join(', '); // Convertir el array de notas en texto
                row.appendChild(notas1);

                // Columna Media
                const media = document.createElement("td");
                const media1 = (students.notas.reduce((sum, notas) => sum + notas, 0) / students.notas.length).toFixed(2);
                media.textContent = media1;
                row.appendChild(media);

                // Agregar fila al cuerpo de la tabla
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error al cargar el JSON:", error);
        });
});
