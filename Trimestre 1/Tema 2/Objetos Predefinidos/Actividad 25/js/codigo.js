function abrirVentana(){
    var contador = 0;
    var segundos = document.getElementById("segundos").value;
    var ventana = window.open("","ventana ejercicio 25","width=400px, height=400px");
    var contadorFunction = () =>{
        contador++;
        console.log(contador);
        ventana.document.body.innerHTML=contador;
    }
    var terminarIntervalo = () =>{
        clearInterval(intervalo)
        ventana.window.close();
    }
    let intervalo = setInterval(contadorFunction,1000);
    let timeout = setTimeout(terminarIntervalo,(segundos*1000));
    document.getElementById("resultado").innerHTML=`Ya han pasado ${segundos} segundos y se ha cerrado la ventana emergente`;
}