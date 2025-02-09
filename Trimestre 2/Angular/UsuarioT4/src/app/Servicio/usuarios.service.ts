import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getListaUsuario(){
    return this.http.get(this.url);
  }

  getUsuarioId(id: number){
    return this.http.get(`${this.url}/${id}`);

  }
}
