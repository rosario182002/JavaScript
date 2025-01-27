import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
 }
 
@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directivas';
  titulo = 'Alta de Usuario';
  nombre: string = '';
  apellido: string = '';
  usuarioAlta: boolean = false;

  anadirUsuario(){
    this.usuarioAlta = true;
  }
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
  }]
}
