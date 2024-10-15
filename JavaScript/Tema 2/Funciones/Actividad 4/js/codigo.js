let obtenersuma=() =>{
    let num = parseInt(prompt("Introduce un número mayor que 0: "));

    if(isNaN(num) || num <=0){
        document.write("Por favor, introudce un número valido");
        return;
    }
    let suma =0;
    let cadena= '';
    for (let i = num; i>0; i--){
        suma +=i;
        cadena += i+(i>1 ? '+' : ''); //añadir el + solo si no el útimo numero
    }
    document.write(`Suma de ${cadena} = ${suma}`);
}
obtenersuma();