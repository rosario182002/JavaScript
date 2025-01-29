import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListadoArticulosComponent } from '../listado-articulos/listado-articulos.component';
import { CaracteristicaArticulosComponent } from "../caracteristica-articulos/caracteristica-articulos.component";


@Component({
  selector: 'app-articulo',
  imports: [FormsModule, CommonModule, ListadoArticulosComponent, CaracteristicaArticulosComponent],
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {

  articulos = [
    { nombre: 'Laptop', precio: 1200, unidades: 5},
    { nombre: 'Mouse', precio: 25, unidades: 20},
    { nombre: 'Teclado', precio: 45, unidades: 10 }
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
      });

      this.nombre = '';
      this.precio = null;
      this.unidades = null;
    }
  }

  valorhijo:string= '';
  agregarCaracteristica(datoCarac: string){
    this.valorhijo = datoCarac;
  }


}

