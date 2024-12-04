document.getElementById('respuesta').addEventListener('click', function (){
    const peticion = new XMLHttpRequest();
    peticion.open("GET", "https://yesno.wtf/api", true);
    peticion.onload = function (){
        if(peticion.status === 200){
            const dato = JSON.parse(peticion.responseText);
            document.getElementById('texto').textContent = dato.answer.toUpperCase();
        } else{
            document.getElementById('texto').textContent = 'Error al obtener respuesta';
        }
    };
    peticion.send();
});