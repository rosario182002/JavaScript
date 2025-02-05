import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModel} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { ListPersonajeComponent } from './components/list-personaje/list-personaje.component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgModel, FormsModule, MainComponent, ListPersonajeComponent, AddPersonajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SenorAnillos';
}
