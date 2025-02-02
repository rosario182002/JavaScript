import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
heroeEliminado: string = '';

borrarHeroe() {
  if (this.heroes.length > 0) {
    let nuevoArray: string[] = [];
    
    // Copiar todo menos  el último
    for (let i = 0; i < this.heroes.length - 1; i++) {
      nuevoArray[i] = this.heroes[i];
    }

    // Guardar el héroe eliminado
    this.heroeEliminado = this.heroes[this.heroes.length - 1];

    // Reemplazar el array original con el nuevo
    this.heroes = nuevoArray;
  }else{
    this.heroeEliminado = 'No hay héroes que borrar';
  }
}
}
