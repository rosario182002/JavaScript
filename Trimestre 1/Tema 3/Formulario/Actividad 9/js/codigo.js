function mostrarTexto(){
    let texto = document.getElementById("miInput").value;

    let restultado = document.getElementById("resultado");
    restultado.innerHTML = texto;
    
    restultado.setAttribute("class", "resultado");

    document.getElementById("miInput").value = "";
}