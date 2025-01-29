import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
export interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
}
@Component({
  selector: 'app-listado-personas',
  imports: [FormsModule, CommonModule],
  templateUrl: './listado-personas.component.html',
  styleUrl: './listado-personas.component.css'
})
export class ListadoPersonasComponent {
@Input()
personaHijo : Persona[] = [];

@Output() personaSeleccionada = new EventEmitter<any>();

seleccionarPersona(persona: Persona) {
  this.personaSeleccionada.emit(persona); // Enviar al padre
}

}
