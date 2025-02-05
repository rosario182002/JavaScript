import { Component } from '@angular/core';
import { PersonajeService } from '../../services/anillos/personaje.service';
import { Personaje } from '../../model/personaje';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from '../main/main.component';


@Component({
  selector: 'app-add-personaje',
  imports: [FormsModule,RouterOutlet,MainComponent],
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {
nombre: string = '';
raza: string = '';

constructor(private personajeService: PersonajeService) { }

agregarPersonaje(): void {
  if (this.nombre && this.raza) {
    const nuevoPersonaje: Personaje = {
      id: Math.floor(Math.random() * 1000),
      nombre: this.nombre,
      raza: this.raza
    };

    this.personajeService.agregarPersonaje(nuevoPersonaje);
    this.nombre = '';
    this.raza = '';
  }
}
}
