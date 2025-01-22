
    var ventana = window.open("", "width=400, height=200");
    ventana.document.write("<p>Se cerrara sola en 10 segundos</p>");
    var contador = 10;
    var intervalo;

    function presioname(){
        intervalo = setInterval(escribir, 1000);
    }
    function escribir(){
        contador--;
        console.log(contador);
        window.opener.document.body.innerHTML = contador;
        if(contador == 0){
            clearInterval(intervalo);
            window.close;
        }
    }
    

