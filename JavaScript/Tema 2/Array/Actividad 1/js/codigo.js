const arr = [2,3,4,5,0];
//1. Escribir por consola la suma del array. Hacerlo con el método forEach y arrow functions.
var suma1 = 0;
    arr.forEach((e)=>{
        suma1= suma1 + e;
    })

console.log(suma1);

//2.Escribir por consola la media. 
    var suma2 = 0;
    arr.forEach((e)=>{
        suma2= suma2 + e;
    })
    var media = suma2 /arr.length;
    console.log(media);

//3.Obtener otro array con el triple de cada elemento y mostrarlo 
//por consola.
 const newArr = arr.map(el => el *3);
 console.log(`Array original ${arr} \nArray con el tripe ${newArr}`);

 //4. Obtener el mismo array con el triple de cada elemento
 // y mostrarlo por consola
 var num1 = 0;
 arr.forEach((e, index)=>{
    arr[index] = e*3;
 })
console.log ("Array modificado: " + arr);



