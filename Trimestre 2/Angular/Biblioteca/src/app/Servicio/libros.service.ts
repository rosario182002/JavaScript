import { Injectable } from '@angular/core';
import { Libro } from '../Model/Libro';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: Libro[] = [
    { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
    { id: 2, titulo: '1984', autor: 'George Orwell' },
    { id: 3, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen' },
    { id: 4, titulo: 'El Señor de los Anillos', autor: 'J.R.R. Tolkien' }
  ];

  constructor() { }

  getLibros(): Libro[] {
    return this.libros;
  }

  getLibroId(id: number): Libro | undefined{ // le pongo el undefined por si el libro no existe que lo diga
    return this.libros.find(libro => libro.id === id);
  }
}
