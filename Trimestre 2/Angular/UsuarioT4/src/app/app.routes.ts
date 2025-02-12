import { Routes } from '@angular/router';
import { HomeComponent } from './Componetes/home/home.component';
import { ListaUsuariosComponent } from './Componetes/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './Componetes/detalle-usuario/detalle-usuario.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'usuarios', component: ListaUsuariosComponent },
    { path: 'usuarios/:id', component: DetalleUsuarioComponent },
    { path: '**', redirectTo: '/' }
];
