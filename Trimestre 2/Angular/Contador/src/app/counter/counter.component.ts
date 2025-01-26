import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  contador: number = 10;

  incrementar() {
    this.contador += 1;
  }

  resetear() {
    this.contador = 10;
  }

  decrementar() {
    this.contador -= 1;
  }
}