import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articulo',
  imports: [FormsModule],
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  articulos = [
    { nombre: 'Laptop', precio: 1200, unidades: 5, caracteristicas: [] },
    { nombre: 'Mouse', precio: 25, unidades: 20, caracteristicas: [] },
    { nombre: 'Teclado', precio: 45, unidades: 10, caracteristicas: [] }
  ];

  nombre = '';
  precio: number | null = null;
  unidades: number | null = null;

  agregarArticulo() {
    if (this.nombre && this.precio !== null && this.unidades !== null) {
      this.articulos.push({
        nombre: this.nombre,
        precio: this.precio,
        unidades: this.unidades,
        caracteristicas: []
      });

      this.nombre = '';
      this.precio = null;
      this.unidades = null;
    }
  }

 // agregarCaracteristica(index: number, caracteristica: string) {
   // this.articulos[index].caracteristicas.push(caracteristica);
//  }
}

