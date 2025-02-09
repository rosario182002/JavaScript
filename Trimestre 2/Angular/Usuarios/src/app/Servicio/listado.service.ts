import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getListaUsuario(){
    return this.http.get(this.url);
  }
}
