import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [ FormsModule, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SenorAnillos';
}
