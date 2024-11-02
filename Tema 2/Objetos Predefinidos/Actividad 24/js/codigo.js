var contador = window.opener.document.getElementById("numeroDeSegundos").value;
var intervalo;
function presioname(){
    intervalo = setInterval(escribirEnPadre,1000);
}
function escribirEnPadre(){
    contador--;
    console.log(contador);
    window.opener.document.body.innerHTML= contador;
    if(contador ==0){
        clearInterval(intervalo);
        window.close();
    }
    
}