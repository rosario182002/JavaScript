import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanetasService } from '../../services/planetas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planet-list',
  imports: [CommonModule],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css'
})
export class PlanetListComponent  implements OnInit {

  PlanetList$= new Observable<any>;

  constructor(private planetService: PlanetasService){};

  ngOnInit(): void {
   this.PlanetList$ = this.planetService.getPlanets();
    throw new Error('Metodo no implementado');
  }


}
