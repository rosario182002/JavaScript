import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
}

@Component({
  selector: 'app-listado-personas',
  imports: [FormsModule],
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent {
  @Input() persona!: Persona;
  @Output() personaSeleccionada = new EventEmitter<Persona>();

  esMenor(): boolean {
    return this.persona.edad < 18;
  }

  seleccionarPersona() {
    this.personaSeleccionada.emit(this.persona);
  }
}
