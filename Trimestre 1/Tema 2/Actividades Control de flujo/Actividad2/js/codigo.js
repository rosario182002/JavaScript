
do{
    var num = prompt("Dime un numero entre 0 y 23");
}
while (num<0||num>23);
if(num>=6 && num<=11){
    document.write(`Buenos días`);
}
else if (num>=12 && num<20){
    document.write(`Buenas tardes`);
}
else{
    document.write(`Buenas noches`);
}
