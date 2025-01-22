import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input()
  nombre: string = 'Rosario';
  @Input()
  role: string = 'Estudiante';

  titulo: string = 'Componente User';
  disa: boolean = true;

  @Output()
  selected = new EventEmitter<string>();

 seleccionar(){
  this.selected.emit(this.nombre);
 }
  


}
