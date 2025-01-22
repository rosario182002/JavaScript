const info = document.getElementById('info');

document.getElementById('boton').addEventListener('click', function (){
    fetch('https://randomuser.me/api/')
    .then(response =>{
        if(!response.ok){
            throw new Error(`"Error en el estado "`);
        }
        return response.json();
    })
    .then (dato =>{
        const usuario = dato.results[0];
        info.innerHTML = `
            <img src="${usuario.picture.medium}" alt="Foto de ${usuario.name.first}">
            <p><strong>Nombre:</strong> ${usuario.name.first} ${usuario.name.last}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Ciudad:</strong> ${usuario.location.city}</p>
        `;
    })
    .catch(error => {
        userInfoDiv.innerHTML = `<p>Error: No se pudo cargar el usuario</p>`;
        console.error(error);
    });
})