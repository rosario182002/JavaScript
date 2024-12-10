document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('lista');

    // Usamos fetch para obtener los datos
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            return response.json();
        })
        .then(data => {
            const preguntas = data.results;

            preguntas.forEach(pregunta => {
                const li = document.createElement('li');

                // Agregamos el contenido
                li.innerHTML = `
                    <strong>Category:</strong> ${pregunta.category}<br>
                    <strong>Question:</strong> ${pregunta.question}<br>
                    <strong>Answer:</strong> <strong>${pregunta.correct_answer}</strong>
                `;

                // Estilos
                li.style.backgroundColor = '#e9e9e9';
                li.style.padding = '10px';
                li.style.margin = '5px 0';
                li.style.border = '1px solid #ccc';
                li.style.borderRadius = '4px';
                li.style.fontFamily = 'Arial, sans-serif';
                li.style.color = '#333';

                // Estilo al pasar el ratón
                li.addEventListener('mouseenter', () => {
                    li.style.backgroundColor = '#d1d1d1';
                });
                li.addEventListener('mouseleave', () => {
                    li.style.backgroundColor = '#e9e9e9';
                });

                // Agregamos el elemento a la lista
                lista.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error al cargar la API:', error);
        });
});
