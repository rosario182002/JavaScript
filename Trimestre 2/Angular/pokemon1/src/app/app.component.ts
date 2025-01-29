import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicioPokemonService } from './services/servicio-pokemon.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pokemon1';

  pokemonList$= new Observable<any>;

  constructor(private servicioPokemon: ServicioPokemonService){};

  ngOnInit(): void {
   this.pokemonList$ = this.servicioPokemon.getListPokemon();
    throw new Error('Metodo no implementado');
  }

}
