let resultado = confirm("Quieres abrir una página nueva");
if(resultado){
   const caracteristicas=
   "toolbar=no, scrollbars=yes, width= 200, height=80, top=500, left=500, resizable= yes";

    ventanita = window.open("", "prueba", caracteristicas);

    if(ventanita){
        ventanita.document.write("<h1>Entorno cliente</h1>");
    }else{
        alert("La ventana ha sido bloqueada por el navegador.");
    }

}
