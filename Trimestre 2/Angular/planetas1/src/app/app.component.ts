import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { PlanetDetailComponent } from "./components/planet-detail/planet-detail.component";

@Component({
  selector: 'app-root',
  imports: [PlanetListComponent, PlanetDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'planetas1';
}
