document.addEventListener('DOMContentLoaded', () => {
     const lista = document.getElementById('lista');

     const peticion = new XMLHttpRequest ();
     peticion.open("GET", "https://opentdb.com/api.php?amount=5&type=multiple");
     peticion.onload = function (){
        if(peticion.status === 200){
            const dato = JSON.parse(peticion.responseText);
            const pregunta = dato.results;

            pregunta.forEach(e => {
                const li = document.createElement('li');

                li.innerHTML = `
                <strong>Category:</strong> ${e.category}<br>
                <strong>Question:</strong> ${e.question}<br>
                <strong>Answer:</strong> <strong>${e.correct_answer}</strong>
            `;
                // Aplica estilos directamente
                li.style.backgroundColor = '#e9e9e9';
                li.style.padding = '10px';
                li.style.margin = '5px 0';
                li.style.border = '1px solid #ccc';
                li.style.borderRadius = '4px';
                li.style.fontFamily = 'Arial, sans-serif';
                li.style.color = '#333';

                //Cambiamos el color del fondo al pasar con el raton 
                li.addEventListener('mouseenter', () => {
                    li.style.backgroundColor = `#d1d1d1`;
                });
                li.addEventListener('mouseleave', () => {
                    li.style.backgroundColor = `#e9e9e9`;
                });

                // Agregamos el elemento a la lista 
                lista.appendChild(li);
            });
        }else{
            console.error('Error al cargar la Api');
        }
     };
     peticion.onerror = function (){
        console.error('Error de conexión');
     };
     peticion.send();
})