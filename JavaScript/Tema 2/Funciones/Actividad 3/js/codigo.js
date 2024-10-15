for(i=1; i<=500; i++){
    var max = 1000;
    var min = 1;
    var aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    par = (aleatorio) =>{
        if(aleatorio %2 ==0){
            return "par";
        }else{
            return "impar";
        }
    };
    document.write(i + `: El número ${aleatorio} es ${par(aleatorio)}<br>`)
}