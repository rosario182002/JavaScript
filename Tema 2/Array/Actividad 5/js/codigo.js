let palabra = prompt("Dime una palabra");
let separada = palabra.split("");
let vocales = "";
separada.forEach((e) => {
    if(e =="a"|| e =="e" || e =="i" || e =="o" || e =="u"){
        vocales ++;
    }
});

document.body.innerHTML = `La palabras es ${palabra} tiene ${vocales}` ; 

