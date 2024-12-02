const palabrita = [];
for(let i = 0; i<3; i++){
    palabrita[i] = prompt("Dame una palabra");
    if(palabrita[i] == null){
        palabrita[i] = "";
    }
}

function filtrado(){
    let filtro = palabrita.filter((e) =>
        e.toLowerCase.startWith("c")
);
    if(filtro.length >0 ){
        console.log("`Palabras que comienzan por c: " , fitro);
        document.write("Palabras que comienzan por c: " + filtro.join(", ") + "<br>");
    }else{
        document.write("No hay palabras que empiezen por c")
    }
}

