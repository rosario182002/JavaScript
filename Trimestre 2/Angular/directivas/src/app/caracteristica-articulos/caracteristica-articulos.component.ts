import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-caracteristica-articulos',
  imports: [FormsModule],
  templateUrl: './caracteristica-articulos.component.html',
  styleUrl: './caracteristica-articulos.component.css'
})
export class CaracteristicaArticulosComponent {
  nuevaCaract: string = '';
  @Output()
   selected = new EventEmitter <string>();

  agregarCaracteristica() {
    if (this.nuevaCaract.trim() !== '') {
      this.selected.emit(this.nuevaCaract);
      this.nuevaCaract = '';
    }
  }

}
