import { Component } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent {
  valor1: number = 0; // Primer valor
  valor2: number = 0; // Segundo valor
  resultado: string = 'Resultado: 0'; // Resultado de la operación

  // Método para sumar
  sumar() {
    this.resultado = `Resultado: ${this.valor1 + this.valor2}`;
  }

  // Método para restar
  restar() {
    this.resultado = `Resultado: ${this.valor1 - this.valor2}`;
  }

  // Método para multiplicar
  multiplicar() {
    this.resultado = `Resultado: ${this.valor1 * this.valor2}`;
  }

  // Método para dividir
  dividir() {
    if (this.valor2 !== 0) {
      this.resultado = `Resultado: ${this.valor1 / this.valor2}`;
    } else {
      this.resultado = 'Error: División por cero'; // Mensaje de error
    }
  }
}
