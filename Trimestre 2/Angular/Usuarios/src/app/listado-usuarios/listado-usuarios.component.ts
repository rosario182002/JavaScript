import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../Servicio/listado.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-usuarios',
  imports: [CommonModule],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent implements OnInit{

  listado$ = new Observable<any>();

  constructor(private listadoServicio:  ListadoService){}

  ngOnInit(): void {
    this.listado$ = this.listadoServicio.getListaUsuario();
    throw new Error('Metodo no implementado');
  
  }

}
