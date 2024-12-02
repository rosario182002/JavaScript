let num = 0; 
let cad = "";

for(i=0; i<10; i++){
    ale = parseInt(Math.random()*21);
    cad += ale + " ";
    num += ale;
}

document.write("La suma de los números " + cad + " es " + num);