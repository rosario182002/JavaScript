import { Component, NgModule, OnInit } from '@angular/core';
import { Libro } from '../../Model/Libro';
import { LibrosService } from '../../Servicio/libros.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libro-nuevo',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterLink],
  templateUrl: './libro-nuevo.component.html',
  styleUrl: './libro-nuevo.component.css'
})
export class LibroNuevoComponent implements OnInit{

  nuevoLibro: Libro ={id:0, titulo:'', autor:''}; //Esto lo que hace es crearme un libro vacio

  constructor(private librosServicio: LibrosService, private router: Router){}

  ngOnInit(): void {
    
  }

  anadirLibro(): void{
    const libros = this.librosServicio.getLibros();
    const ultimoId = libros.length>0 ? libros [libros.length -1].id : 0; 

    this.nuevoLibro.id = ultimoId +1; 

    this.librosServicio.añadirLibro(this.nuevoLibro);
    this.router.navigate( ['/libros'] );
  }

  volverALibros(): void{
    this.router.navigate( ['/libros'] );
  }


}
