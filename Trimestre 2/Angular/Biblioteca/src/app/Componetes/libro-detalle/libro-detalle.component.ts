import { Component, OnInit } from '@angular/core';
import { Libro } from '../../Model/Libro';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from '../../Servicio/libros.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css'
})
export class LibroDetalleComponent implements OnInit {

  libro: Libro | undefined;

  constructor(
    private route: ActivatedRoute,
    private librosService: LibrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.libro = this.librosService.getLibroId(id);

    if (!this.libro) {
      // Manejar el caso de que el libro no se encuentre
      console.error('Libro no encontrado');
      this.router.navigate(['/libros']); // Redirigir a la lista de libros
    }
  }

  volverALibros(): void {  
    this.router.navigate(['/libros']);
  }

}