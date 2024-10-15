var tablita =(filas=10, columnas=4, colorBorde='black')=>{
    // Iniciar la tabla con el estilo y borde
    var tabla = `<table class="custom-table" style="border-color: ${colorBorde};">`;
   
}
  // Generar las filas y columnas en formato HTML
for(let i=0; i<filas; i++){
    tabla += '<tr>';
    for (let j = 0; j <columnas; j++){
        tabla += `<td style="border-color: ${colorBorde};">Fila ${i + 1}, Columna ${j + 1}</td>`;
    }
    tabla += '<tr>';
}
 // Cerrar la tabla
tabla += '</table>';

// Insertar la tabla en el contenedor usando innerHTML
document.getElementById('tabla-container').innerHTML += tablaHTML;

 // 1) Llamar a la función para crear la tabla con borde negro, de 10 filas y 4 columnas
 tablita(); // Se usarán los valores por defecto: 10 filas, 4 columnas, borde negro

 // 2) Llamarla de nuevo para generar la tabla de 20 filas y 10 columnas con borde negro
 tablita(20, 10, 'black');

 // 3) Dibujar 10 tablas de 5 filas y 4 columnas con borde verde
 for (let i = 0; i < 10; i++) {
    tablita(5, 4, 'green');
 }




