let nombre = document.getElementById('nombre');

nombre.addEventListener('blur', () => {
    nombre.value = nombre.value.toUpperCase();
    nombre.select();
});