import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from '../../Servicio/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-usuario',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})
export class DetalleUsuarioComponent implements OnInit {

 usuario$!: Observable<any>; 

  constructor(private servicioLista: UsuariosService, private router: ActivatedRoute, private route1: Router){}

  ngOnInit(): void {
    let id = this.router.snapshot.params['id'];

    this.usuario$ = this.servicioLista.getUsuarioId(id);
  }
  volver(): void {
    this.route1.navigate(['/usuarios']); // Redirigimos al listado de usuarios
  }
}