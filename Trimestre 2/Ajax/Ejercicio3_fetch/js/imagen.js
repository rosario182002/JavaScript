document.getElementById('respuesta').addEventListener('click', function () {
    fetch("https://yesno.wtf/api")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al obtener respuesta: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('texto').textContent = data.answer.toUpperCase();
            document.getElementById('imagen').src = data.image; // Aquí estaba "imagen", corregido a "image".
        })
        .catch(error => {
            console.error(error);
            document.getElementById('texto').textContent = 'Error al obtener respuesta';
        });
});
