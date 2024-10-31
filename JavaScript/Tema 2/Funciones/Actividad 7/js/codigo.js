let ventanita = window.open ("", "ventanita", "width=700,height=300");
let num = ventanita.prompt("Dame el num del 1 al 20");
    
function generarLista(numero){
    let lista = "<ul>"; //creamos una lista UL
    for(let i =1; i<=numero; i++){
        lista += "<li>" +i+ "</li>";  //creamos los elementos LI
    }
    lista += "</ul>"; //creamos una lista UL
    document.body.innerHTML += lista; //Insertamos la lista entera
}
generarLista(num);
ventanita.window.close();