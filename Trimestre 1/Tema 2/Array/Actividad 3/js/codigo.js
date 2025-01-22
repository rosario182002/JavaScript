//Array de personas 
let personas = [
    {nombre: 'Juan', edad: '20', ciudad: 'Sevilla'},
    {nombre: 'Pepe', edad: '11', ciudad: 'Madrid'},
    {nombre: 'Eda', edad: '18', ciudad: 'Sevilla'},
    {nombre: 'Sara', edad: '10', ciudad: 'Cordoba'},
    {nombre: 'Pedro', edad: '21', ciudad: 'Sevilla'}

];




document.body.innerHTML = 'Las personas mayores de edad son <br>';

for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad >= 18) {
   document.body.innerHTML  += `<li>${personas[i].nombre}, ${personas[i].edad} años, ${personas[i].ciudad}</li>`;
}   
}


document.body.innerHTML += 'Las personas de Sevilla son <br>';

for (let i = 0; i < personas.length; i++) {
    if (personas[i].ciudad === 'Sevilla') {
        document.body.innerHTML += `<li>${personas[i].nombre}, ${personas[i].edad} años</li>`;
    }
}


 