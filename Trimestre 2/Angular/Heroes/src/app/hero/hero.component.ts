import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterEvent } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
nombre: string = 'Ironman';
edad: number = 45;

nombreMayusculas(): string{
  return this.nombre.toUpperCase();
}

cambiarEdad(){
  this.edad = 18;
}

cambiarNombre(){
  this.nombre = 'Spiderman';
}

}