import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../Servicios/servicio.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{

  numeroUsuario: number = 1;

  datosUsuario: any;

  constructor(private servicio: ServicioService){}

  ngOnInit(): void {
  }

  buscarUsuario(){
    this.servicio.obtenerUsuario(this.numeroUsuario);
  }



}
