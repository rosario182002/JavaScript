let tiempoRestante =30;
let intervalo;
let enPausa = false;

let temporizador = document.getElementById("temporizador");
let botonInciar = document.getElementById("iniciar");
let botonPausar = document.getElementById("pausar");
let botonReiniciar = document.getElementById("reiniciar");

function iniciarTemporizador(){
    if(!intervalo){
        intervalo = setInterval(() =>{
            if(tiempoRestante > 0){
                tiempoRestante-- ;
                actualizarTemporizador();
            }else{
                clearInterval(intervalo);
                intervalo = null;
                temporizador.textContent = "¡Tiempo Agotado!";
            }
        }, 1000);
    }
}

function pausarTemporizador(){
    clearInterval(intervalo);
    intervalo = null;
    enPausa =true;
}

function reiniciarTemporizador(){
    clearInterval(intervalo);
    intervalo = null;
    tiempoRestante = 30;
    actualizarTemporizador();
    if (enPausa){
        iniciarTemporizador(); //reinicia el temporizador automáticamente si estaba en pausa
    }
}

function actualizarTemporizador(){
    temporizador.textContent = tiempoRestante;
}

botonInciar.addEventListener("click", iniciarTemporizador);
botonPausar.addEventListener("click", pausarTemporizador);
botonReiniciar.addEventListener("click", reiniciarTemporizador);