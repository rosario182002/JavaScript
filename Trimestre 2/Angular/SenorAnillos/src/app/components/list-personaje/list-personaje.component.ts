import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/anillos/personaje.service';
import { Personaje } from '../../model/personaje';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-personaje',
  imports: [FormsModule, CommonModule],
  templateUrl: './list-personaje.component.html',
  styleUrl: './list-personaje.component.css'
})
export class ListPersonajeComponent implements OnInit {

  personajes: Personaje[] = [];

  constructor(private personajeService: PersonajeService) {}

  ngOnInit(): void {
    this.personajes = this.personajeService.getPersonajes();
  }

  eliminarPersonaje(id:number)  {
    this.personajeService.eliminarPersonaje(id);
    this.personajes = this.personajeService.getPersonajes();
  }
}
