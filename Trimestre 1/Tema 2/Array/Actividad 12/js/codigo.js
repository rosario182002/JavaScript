let salarios = {
    John: 100,
    Ann: 160,
    Peter: 130
};

let suma = 0;

for (let persona in salarios) {
     suma += salarios[persona];
  }
  console.log(suma);
   