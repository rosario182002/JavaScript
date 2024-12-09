document.getElementById('loadPosts').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const tabla = document.getElementById('b1');
            tabla.innerHTML = ''; // Limpiar contenido previo

            // Recorrer cada post y agregar una fila a la tabla
            posts.forEach(post => {
                const row = document.createElement('tr');

                const titulo = document.createElement('td');
                titulo.textContent = post.title;

                const cuerpo = document.createElement('td');
                cuerpo.textContent = post.body;

                row.appendChild(titulo);
                row.appendChild(cuerpo);
                tabla.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error al cargar los posts:', error);
        });
});
