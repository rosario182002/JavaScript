import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioPokemonService {

  private url='https://pokeapi.co/api/v2/pokemon'; //ESTO ES PARA INSERTAR LA API

  constructor(private http: HttpClient) {}

  getListPokemon(){
    return this.http.get(this.url);
  }


}

