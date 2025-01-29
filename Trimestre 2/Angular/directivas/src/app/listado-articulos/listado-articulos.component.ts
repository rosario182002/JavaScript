import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-articulos',
  imports: [CommonModule],
  templateUrl: './listado-articulos.component.html',
  styleUrl: './listado-articulos.component.css'
})
export class ListadoArticulosComponent {
@Input () articulos: any[] = []; //Esto coge los articulos
}
