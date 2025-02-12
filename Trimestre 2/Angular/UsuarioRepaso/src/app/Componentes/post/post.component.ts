import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../Servicios/servicio.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [FormsModule, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  numeroPost: number = 1; 

  datosPost: any; 

  constructor(private servicio: ServicioService){}

  ngOnInit(): void {
  }

  buscarPost(){
    this.servicio.obtenerPost(this.numeroPost);
  }

}
