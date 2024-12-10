document.getElementById("boton").addEventListener("click", obtenerUsuarios);

function obtenerUsuarios() {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => {
            const usuarios = data.results;
            const contenedor = document.getElementById("info");
            contenedor.innerHTML = ""; // Limpiar todo lo anterior (NO OLVIDAR)

            usuarios.forEach(usuario => {
                const divUsuario = document.createElement("div");
                divUsuario.className = "usuario";
            

                const img = document.createElement("img");
                img.src = usuario.picture.medium;
                img.alt = `${usuario.name.first} ${usuario.name.last}`;


                const nombre = document.createElement("h3");
                nombre.textContent = `${usuario.name.first} ${usuario.name.last}`;

                const correo = document.createElement("p");
                correo.textContent = `Correo: ${usuario.email}`;

                const direccion = document.createElement("p");
                direccion.textContent = `Dirección: ${usuario.location.street.number} ${usuario.location.street.name}`;

                const ciudad = document.createElement("p");
                ciudad.textContent = `Ciudad: ${usuario.location.city}`;

                const botonCambiar = document.createElement("button");
                botonCambiar.textContent = "Cambiar Usuario";
        

                botonCambiar.addEventListener("click", () => cambiarUsuario(divUsuario));

                divUsuario.appendChild(img);
                divUsuario.appendChild(nombre);
                divUsuario.appendChild(correo);
                divUsuario.appendChild(direccion);
                divUsuario.appendChild(ciudad);
                divUsuario.appendChild(botonCambiar);

                contenedor.appendChild(divUsuario);
            });
        })
        .catch(error => console.error("Error al obtener los usuarios:", error));
}

function cambiarUsuario(divUsuario) {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const usuario = data.results[0];
            divUsuario.innerHTML = ""; // Limpiar contenido previo

            const img = document.createElement("img");
            img.src = usuario.picture.medium;
            img.alt = `${usuario.name.first} ${usuario.name.last}`;
            

            const nombre = document.createElement("h3");
            nombre.textContent = `${usuario.name.first} ${usuario.name.last}`;

            const correo = document.createElement("p");
            correo.textContent = `Correo: ${usuario.email}`;

            const direccion = document.createElement("p");
            direccion.textContent = `Dirección: ${usuario.location.street.number} ${usuario.location.street.name}`;

            const ciudad = document.createElement("p");
            ciudad.textContent = `Ciudad: ${usuario.location.city}`;

            const botonCambiar = document.createElement("button");
            botonCambiar.textContent = "Cambiar Usuario";
   

            botonCambiar.addEventListener("click", () => cambiarUsuario(divUsuario));

            divUsuario.appendChild(img);
            divUsuario.appendChild(nombre);
            divUsuario.appendChild(correo);
            divUsuario.appendChild(direccion);
            divUsuario.appendChild(ciudad);
            divUsuario.appendChild(botonCambiar);
        })
        .catch(error => console.error("Error al cambiar el usuario:", error));
}