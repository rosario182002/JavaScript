document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users/5')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la petición: ${response.status}`);
            }
            return response.json();
        })
        .then(usuario => {
            const user= document.getElementById('datos');
            user.innerHTML = `
                <p><strong>Nombre:</strong> ${usuario.name}</p>
                <p><strong>Usuario:</strong> ${usuario.username}</p>
                <p><strong>Correo:</strong> ${usuario.email}</p>
                <p><strong>Dirección:</strong> ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city} (${usuario.address.zipcode})</p>
            `;
        })
        .catch(error => {
            document.getElementById('datos').innerHTML = `<p>Error al cargar los datos del usuario: ${error.message}</p>`;
        });
});
