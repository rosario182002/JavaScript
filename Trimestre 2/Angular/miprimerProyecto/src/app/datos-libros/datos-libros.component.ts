import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos-libros',
  imports: [FormsModule],
  templateUrl: './datos-libros.component.html',
  styleUrl: './datos-libros.component.css'
})


export class DatosLibrosComponent {

  titulo: String = 'Componente Libro'

  libro ={
    titulo: 'Blancanieves',
    autor: 'Los siete enanitos',
    precio: '5,00€',
    stock: 0,
    cantidad: 2, 
    imagen: "./blancanieves.jpg"
  }

  quitar(event:any){
   this.libro.cantidad--;
  }
  anadir(event:any){
    this.libro.cantidad++;
}

arrayLibro: any =[
  {
  titulo: 'Blancanieves',
    autor: 'Los siete enanitos',
    precio: '5,00€',
    stock: 0,
    cantidad: 2, 
    imagen: "./blancanieves.jpg"
},
{
  titulo: 'Rapunzel',
  autor: 'Disney',
  precio: '10,00€',
  stock: 0,
  cantidad: 2, 
  imagen: "./rapunzel.png"
}]

@Input()
  numero: string = '';

@Output()
selected = new EventEmitter<any>();

mostrarLibro(){
  this.selected.emit(this.arrayLibro[this.numero].titulo);
}

}
