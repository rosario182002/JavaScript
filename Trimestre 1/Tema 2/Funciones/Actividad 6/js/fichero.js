function esFindeSemana(){
    let hoy = new Date();
    let dia = hoy.getDay();
    let nuevaVentana = window.open('','nueva', 'width=400,height=400')
    if(dia ==6 || dia == 0){
        nuevaVentana.document.body.innerHTML='<img src="./imagen/caritafeliz.jpg" alt="feliz" class="imagen">';
    }else{
        nuevaVentana.document.body.innerHTML= '<img src="./imagen/caritatriste.jpg" alt="triste" class="imagen">';
    }
}