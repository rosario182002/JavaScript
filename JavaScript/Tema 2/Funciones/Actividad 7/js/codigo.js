let ventanita = window.open ("", "ventanita", "width=700,height=300");
ventanita.document.write(`<p>Introduce un numero entre el 1 y 20: </p>
                            <input type="number id="numero" min="1" max="20">
                            <button onclick="window.opener.generarLista(document.getElementById('numero').value); window.close();">Aceptar</button>`);

function generarLista(numero){
    let lista = "<ul>"; //creamos una lista UL
    for(let i =1; i<=numero; i++){
        lista += "<li>" +i+ "<li>";  //creamos los elementos LI
    }
    lista += "<ul>"; //creamos una lista UL
    document.body.innerHTML += lista; //Insertamos la lista entera
}
