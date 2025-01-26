import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { FormsModule } from '@angular/forms';
import { DatosLibrosComponent } from './datos-libros/datos-libros.component';

@Component({
  selector: 'app-hola',
  imports: [RouterOutlet, UserProfileComponent,AlumnoComponent,FormsModule, DatosLibrosComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string =  'Clase de Angular ';
  nombre: string = 'Rosario Delgado Moreno';
  edad: number = 18;

  getEdad(): number {
    return this.edad;
  }
  /*parrafoMayor: string = 'Es mayor de edad';
  parrafoMenor: string = 'Es menor de edad';
   getEdad(): string {
    if (this.edad >= 18) {
      return this.parrafoMayor;
    }else{
      return this.parrafoMenor;
    }
  }*/

    
  name: String = 'Rosario';
  imgUrl: String = 'corazon.jpg'; 
  naranja: String = 'naranja'; // Le asignamos el nombre que va a estar en la hoja de estilos
  marcado: boolean = true;

  deshabilitado: boolean = true; //no puedo escribir si le pongo false si puedo escribir

  asignatura= {
    nombre: 'Desarrollo Entorno cliente',
    codigo: 'DWEC',
};

nombre1: string = '';

mostrarNombre() {
  this.nombre1 = 'Ana y Angel';
}

palabrita = "";
mostrarEtiqueta(event : any){
  let cadena = event.target.value;
  this.palabrita +=  cadena + ',';
}


texto: string = 'antes de pulsar';
  alerta() {
    alert('esta marcado!!');
    this.texto = 'check pulsado';
  }

  nombre2: String = '';

nombre3: String = '';
mostrar(event : any){
  let nombre3 = event.target.value;
}

texto1: String = '';
texto2: String = '';


seleccionar(nombre1: String){
  console.log(nombre1);
}

checked: boolean = false; //no esta marcado
mostrarCapa: boolean = false; //no se muestra la capa
habilitar: boolean = false;  //el boton de habilitar o desahabilitar esta deshabilitado
link: string = 'https://ceuandalucia.es'; //Enlace
textoBotonCapa: string = 'Mostrar'; // Texto del botón

//Alteramos el estado del checkbox
alterarEstado(){
  this.checked = !this.checked;
}

//Alteramos el estado de la capa
alterarCapa(){
  this.mostrarCapa = !this.mostrarCapa;
  this.textoBotonCapa = this.mostrarCapa ? 'Ocultar' : 'Mostrar'; //esto lo que hace es si mostrar capa es true lo oculta y si es false lo muestra
}

//Alteramos el estado del boton
alterarBoton(){
  this.habilitar = !this.habilitar;
} 

}

