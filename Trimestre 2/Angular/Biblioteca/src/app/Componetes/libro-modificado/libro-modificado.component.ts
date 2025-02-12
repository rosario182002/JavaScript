import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from '../../Servicio/libros.service';
import { Libro } from '../../Model/Libro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libro-modificado',
  imports: [CommonModule, FormsModule],
  templateUrl: './libro-modificado.component.html',
  styleUrl: './libro-modificado.component.css'
})
export class LibroModificadoComponent implements OnInit {

  libro: Libro | undefined;

  constructor(
    private route: ActivatedRoute,
    private librosService: LibrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.libro = this.librosService.getLibroId(id);

    if (!this.libro) {
      this.router.navigate(['/libros']);
    }
  }

  guardarCambios(): void {
    if (this.libro) {
      this.librosService.actualizarLibro(this.libro);
      this.router.navigate(['/libros']);
    }
  }

  volverALibros(): void {
    this.router.navigate(['/libros']);
  }

}
