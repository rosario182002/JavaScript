import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(private http: HttpClient) { }

  obtenerUsuario(id:number): Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  obtenerPost(id:number): Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }
  
}
