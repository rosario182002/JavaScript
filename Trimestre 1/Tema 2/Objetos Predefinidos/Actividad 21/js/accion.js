var ventana1=null;
var ventana2=null;

function abrirVentanas(){
    ventana1 = window.open('ventana1.html', 'Ventana1', 'width=300,height=200,top=300,left=100');

    ventana2 = window.open('ventana2.html', 'Ventana2', 'width=300,height=200,top=300,left=500');
    ventana1.focus();
    ventana2.focus();
}


//CIERRA LAS DOS VENTANAS
function cerrarVentanas(){
    ventana1.close();
    ventana2.close();
 
}


//CAMBIAR FONDO DE VENTANA 1
function fondoVentana1(){
    if(ventana1 && !ventana1.closed){
        ventana1.focus();
        ventana1.document.body.style.backgroundColor= '#FFECA1';
    }
}


//CAMBIAR FONDO DE VENTANA 2

function fondoVentana2(){
    if(ventana2 && !ventana2.closed){
        ventana2.focus();
        ventana2.document.body.style.backgroundColor= '#EFC3CA';
    }
}


//ENVIAR MENSAJE A LA VENTANA 2
function enviarMensajeVentana2(){
    if(window.opener && window.opener.ventana2) {
        window.opener.ventana2.document.body.innerHTML +=
        "<p>La ventana 1 te saluda</p>"
    }
}

//CAMBIAR FONDO VENTANA 2 DESDE LA VENTANA 1
function cambiarFondoVentana2(){
    if(window.opener && window.opener.ventana2) {
        window.opener.ventana2.document.body.style.backgroundColor = '#7DDA58';
    }
}

//ENVIAR MENSAJE A LA VENTANA 1
function enviarMensajeVentana1(){
    if(window.opener  && window.opener.ventana1 ) {
         window.opener.ventana1.document.body.innerHTML += 
        "<p>La ventana 2 te saluda</p>"
    }
}


//CAMBIAR FONDO VENTANA 1 DESDE LA VENTANA 2
function cambiarFondoVentana1(){
    if(window.opener  && window.opener.ventana1) {
        window.opener.ventana1.document.body.style.backgroundColor = '#5DE2E7';
    }
}







