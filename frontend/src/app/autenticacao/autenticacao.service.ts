import { Usuario } from './../home/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3001/usuarios';

@Injectable({
  providedIn: 'root'
})

export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }


  loginAuth(userEmail: string): Observable<any>{
    return this.httpClient.get<any>(`${API_URL}/?userEmail=${userEmail}`);
  }

  registrarAuth(novoUsuario: Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(`${API_URL}`, novoUsuario);
  }


}
