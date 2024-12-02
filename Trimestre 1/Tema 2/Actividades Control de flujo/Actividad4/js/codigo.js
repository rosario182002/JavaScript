let tipo = parseInt(prompt("Dime que tipo de motor quieres"));

switch(tipo){
    case 0: 
        document.write(`No hay establecido un valor definido para el tipo de bomba`);
        break;
    case 1:
        document.write(`La bomba es una bomba de agua`);
        break;
    case 2:
        document.write(`La bomba es una bomba de gasolina`);
        break;
    case 3: 
        document.write(`La bomba es una bomba de hormigón`);
        break;
    case 4:
        document.write(`La bomba es una bomba de pasta alimenticia`);
        break;
    default:
        document.write(`No existe un valor valido para tipo de bomba`);
}