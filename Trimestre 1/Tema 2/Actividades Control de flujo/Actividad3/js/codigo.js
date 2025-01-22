let topping = prompt("¿Qué topping quieres?");
let helado = 1.9;
if(topping.toUpperCase() == "OREO"){
    document.write(`El topping de ${topping} cuesta 1€ `);
    document.write("El precio del helado es "+ (Number(helado) + 1.00) + " €");
}
else if(topping.toUpperCase() == "KITKAT"){
    document.write(`El topping de ${topping} cuesta 1,5€ `);
    document.write("El precio del helado es "+ (Number(helado) + 1.50) + " €" );
}
else if(topping.toUpperCase() == "BROWNIE"){
    document.write(`El topping de ${topping} cuesta 0,75€ `);
    document.write("El precio del helado es "+(Number(helado) + 0.75 )+ " €" );
}
else if(topping.toUpperCase() == "LACASITOS"){
    document.write(`El topping de ${topping} cuesta 0,95€ `);
    document.write("El precio del helado es "+ (Number(helado) + 0.95) + " €" );
}
else{
    document.write("No tenemos este topping, lo sentimos. El helado sin topping cuesta 1.90€ ");
}
 
 