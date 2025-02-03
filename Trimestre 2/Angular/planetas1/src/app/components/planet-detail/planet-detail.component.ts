import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../../model/planet';
import { Observable } from 'rxjs';
import { PlanetasService } from '../../services/planetas.service';

@Component({
  selector: 'app-planet-detail',
  imports:[CommonModule,],
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent  implements OnInit{
  planeta$ = new Observable<Planet>();

  constructor(private servicioPlaneta: PlanetasService){}

  ngOnInit(): void{
    this.planeta$ = this.servicioPlaneta.getPlanet();
  }
}