import { Routes } from '@angular/router';
import { HomeComponent } from './Componetes/home/home.component';
import { LibrosComponent } from './Componetes/libros/libros.component';
import { LibroDetalleComponent } from './Componetes/libro-detalle/libro-detalle.component';
import { ContactoComponent } from './Componetes/contacto/contacto.component';

export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'libros', component: LibrosComponent },
    { path: 'libro-detalle/:id', component: LibroDetalleComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', redirectTo: '/home' }
  ];

