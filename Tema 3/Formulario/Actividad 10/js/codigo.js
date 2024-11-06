function mostrarInfoProvincia(){
    let select = document.getElementById("provincia");
    let indice = select.selectedIndex;
    let opcion = select.options[indice];

    alert(`Índice: ${indice}, Descripción: ${opcion.text}, Valor: ${opcion.value}`);

}

function mostrarProvinciasSeleccionadas(){
    let opciones = document.getElementById("provinciasMultiple").selectedOptions;
    let descripciones = Array.from(opciones).map(opcion => opcion.text);

    alert(`Provincias seleccionadas: ${descripciones.join(", ")}`);
}
