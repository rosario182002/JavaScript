function sumarConIDs() {
    // Obtener valores de los checkbox usando sus ids
    let sum = 0;
    if (document.getElementById("checkbox1").checked) sum += parseInt(document.getElementById("checkbox1").value);
    if (document.getElementById("checkbox2").checked) sum += parseInt(document.getElementById("checkbox2").value);
    if (document.getElementById("checkbox3").checked) sum += parseInt(document.getElementById("checkbox3").value);
    if (document.getElementById("checkbox4").checked) sum += parseInt(document.getElementById("checkbox4").value);

    // Mostrar el resultado en un alert
    alert("La suma es: " + sum);

    // Desmarcar todos los checkbox
    document.getElementById("checkbox1").checked = false;
    document.getElementById("checkbox2").checked = false;
    document.getElementById("checkbox3").checked = false;
    document.getElementById("checkbox4").checked = false;
}