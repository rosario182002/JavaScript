import { Injectable } from '@angular/core';
import { Personaje } from '../../model/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private personajes:Personaje[] = [
    {id:1, nombre:'Frodo', raza:'Hobbit'},
    {id:2, nombre:'Aragorn', raza:'Dúnadan'},
    {id: 3, nombre: 'Legolas', raza: 'Elfo'}
  ];

  constructor() { }

  getPersonajes():Personaje[]{
    return this.personajes;
  }

  agregarPersonaje(personaje:Personaje){
    this.personajes.push(personaje);
  }

  eliminarPersonaje(id:number){
    this.personajes = this.personajes.filter(personaje => personaje.id !== id);
  }


  }
