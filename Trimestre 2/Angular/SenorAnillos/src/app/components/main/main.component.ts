import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { AddPersonajeComponent } from '../add-personaje/add-personaje.component';
import { ListPersonajeComponent } from '../list-personaje/list-personaje.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [AddPersonajeComponent, ListPersonajeComponent,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}