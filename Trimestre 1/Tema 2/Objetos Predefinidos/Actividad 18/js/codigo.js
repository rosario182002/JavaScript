

var temporizador = setInterval(cambiarColor, 1000);
function cambiarColor(){
    var color = document.body.style.backgroundColor;
    
    if(color == "orange"){
        color="blue";
        document.body.style.backgroundColor=color;
    }else{
        color="orange";
        document.body.style.backgroundColor=color;
        
    }
}
function detener(){
    clearInterval(temporizador);
}