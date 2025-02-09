import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from '../../Servicio/usuarios.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent implements OnInit {
  usuarios$!: Observable<any>;  //le ponemos el ! para marcar que esatn asignadas o inicializadas directamente cuando la declaramos 

  constructor(private servicioLista: UsuariosService){}

  ngOnInit(): void {
    this.usuarios$ = this.servicioLista.getListaUsuario();
  }
}