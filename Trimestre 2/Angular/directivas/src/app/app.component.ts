import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { ListadoPersonasComponent } from "./listado-personas/listado-personas.component";
// crear una interfaz persona 
export interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
 }
 
@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, ArticuloComponent, ListadoPersonasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'directivas';
  titulo = 'Alta de Usuario';
  nombre: string = '';
  apellido: string = '';
  usuarioAlta: boolean = false;

  //Para añadir un usuario que este dado de alta 
  anadirUsuario(){
    this.usuarioAlta = true;
  }
  
  //esto es para agregar dos persona en la lista
  personas: Persona[]=[
    {
      nombre: 'Josema', 
      apellido: 'Ordoñez',
      edad: 21,
  }, 
  {
    nombre: 'Ana', 
    apellido: 'Rodriguez',
    edad: 22
  },
  {
    nombre: 'Sara', 
    apellido: 'Perez',
    edad: 15
  }]

  //Botones 
botonSeleccionado: string = 'No ha seleccionado ningún botón';

seleccionarBoton(opcion: string) {
  this.botonSeleccionado = `Ha pulsado el botón ${opcion}`;
}

personaSeleccionada: String ='';

seleccionarPersona(persona: Persona) {
  this.personaSeleccionada = `Has seleccionado a:  ${persona.nombre} ${persona.apellido}`;
}
}
