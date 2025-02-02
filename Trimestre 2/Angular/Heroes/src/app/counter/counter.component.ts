import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  contador: number = 10;

  aumentar(){
    this.contador++;
  }
  disminuir(){
    this.contador--;
  }
  reiniciar(){
    this.contador = 10;
  }

}
