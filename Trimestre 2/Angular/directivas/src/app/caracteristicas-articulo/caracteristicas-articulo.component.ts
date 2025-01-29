import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-articulo',
  templateUrl: './caracteristicas-articulo.component.html',
  styleUrls: ['./caracteristicas-articulo.component.css']
})
export class CaracteristicasArticuloComponent {
  nuevaCaract: string = '';
  @Output() nuevaCaracteristica = new EventEmitter<string>();

  agregarCaracteristica() {
    if (this.nuevaCaract.trim() !== '') {
      this.nuevaCaracteristica.emit(this.nuevaCaract);
      this.nuevaCaract = '';
    }
  }
}
