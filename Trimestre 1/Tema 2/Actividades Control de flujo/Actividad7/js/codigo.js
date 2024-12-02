let num = Number(prompt("Dime un número"));
for(let i=num; num+100>=i; i++){
    if(i % 2 == 1){
        document.write(i + ' ');
    }
}