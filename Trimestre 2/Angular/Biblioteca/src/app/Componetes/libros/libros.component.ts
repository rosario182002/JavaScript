import { Component, OnInit } from '@angular/core';
import { Libro } from '../../Model/Libro';
import { LibrosService } from '../../Servicio/libros.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {

  libros: Libro[] = [];

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.libros = this.librosService.getLibros();
  }

}