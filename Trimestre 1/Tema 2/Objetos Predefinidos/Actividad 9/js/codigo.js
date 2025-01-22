let max = 10;
let min = 1;
let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
let num = prompt("Dime un número aleatorio entre el 1 al 10");

if (num == aleatorio){
    alert("¡Felicidades, adivinaste el número!");
}
else{
    alert(`Lo siento, el numero era ${num}`)
}