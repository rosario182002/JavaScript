import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  imports: [],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
nombre: string = 'Rosario';
apellido: string = 'Delgado Moreno';
edad: number = 17;
dni: string ='12345678A';

multiplicar(): number {
  return this.edad * 5;
};
getEdad(): number {
  return this.edad;
}

deshabilitado: boolean = true;

esMenor() : boolean {
  let checked = false;
  if(this.edad < 18) {
    checked = true;
  }
  return checked;
}

alerta() {
  alert('SOCORROOOOOOO');
}

textito: string = 'Check sin pulsar';

textoCambiado() {
  this.textito = 'Check pulsado';
}
eleccion: string = '';
cambiado(event: any){
  if(event.target.value =='H'){
    this.eleccion = 'Pulsado Hombre';
  }else{
    this.eleccion = 'Pulsado Mujer';
  }
}

}
