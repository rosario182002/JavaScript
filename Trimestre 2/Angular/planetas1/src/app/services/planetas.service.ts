import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanetList } from '../model/planet';
import { Planet } from '../model/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  private url='https://swapi.dev/api/planets/'; //ESTO ES PARA INSERTAR LA API

  constructor(private http: HttpClient) {}

  getPlanets(page : number = 1) : Observable<PlanetList> {
    return this.http.get<PlanetList>(`${this.url}?page=${page}`);
  }
 
  getPlanet(num : number = 1): Observable<Planet> {
    return this.http.get<Planet>(`${this.url}/${num}`)
  }
}
