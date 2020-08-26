import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from'@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  private userServiceURL = 'http://localhost:8081/v1/usuario';  // URL de la API


  public getUsuario(id:number): Observable<User> {
    const url =  `${this.userServiceURL}/${id}`;
    return this.http.get<User>(url)  
  }
}
