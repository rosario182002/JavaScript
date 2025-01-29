import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-articulos',
  imports: [],
  templateUrl: './listado-articulos.component.html',
  styleUrl: './listado-articulos.component.css'
})
export class ListadoArticulosComponent {
@Input() articulos: any[] = []; //esto lo que hace es coger los articulos
}
