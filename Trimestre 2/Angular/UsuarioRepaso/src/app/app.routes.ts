import { Routes } from '@angular/router';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { PostComponent } from './Componentes/post/post.component';


export const routes: Routes = [

    {path: 'usuario', component: UsuarioComponent}, 
    {path: 'post', component: PostComponent}, 
    {path: '**', redirectTo: '/usuario'}

];

