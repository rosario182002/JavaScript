document.addEventListener("DOMContentLoaded", function(){
    const tabla = document.getElementById("studentTable");
    const peticion = new XMLHttpRequest();

    peticion.open("GET", "fichero.json", true);

    peticion.onload = function (){
        if(peticion.status === 200){
            const dato = JSON.parse(peticion.responseText);

            const tbody = document.createElement("tbody");
            dato.students.forEach(students => {
                const row = document.createElement("tr");

                //COLUMLA ID
                const id1 = document.createElement("td");
                id1.textContent =students.id;
                row.appendChild(id1);

                //Columna Nombre
                const nombre1 = document.createElement("td");
                nombre1.textContent =students.nombre;
                row.appendChild(nombre1);

                //Columna Notas
                const notas1 = document.createElement("td");
                notas1.textContent =students.notas;
                row.appendChild(notas1);

                //Columna de medias
                const media = document.createElement("td");
                const media1 =(students.notas.reduce((sum, notas) => sum + notas, 0)/students.notas.length).toFixed(2);

                media.textContent = media1;
                row.appendChild(media);

                //agregamos fila 
                tbody.appendChild(row);
            });
            tabla.appendChild(tbody);
        }else{
            console.error("Error al cargar el JSON: ", peticion.status);
        }

    };
    peticion.send();
});