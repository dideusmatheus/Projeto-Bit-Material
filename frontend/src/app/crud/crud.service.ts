
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Usuario } from '../home/usuario';


const API= 'http://localhost:3001';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  constructor(private httpClient: HttpClient) { }

  // //metodo create para o component crud-create
  // create(user: Usuario): Observable<Usuario>{
  //   return this.httpClient.post<Usuario>(`${API}/usuarios`, user);
  // }

  //metodo read para o component crud-read
  read(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${API}/usuarios`);
  }

  //metodo readById
  readById(id: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${API}/usuarios/${id}`);
  }

  //metodo update
  update(userId: any, data: Usuario){
    return this.httpClient.put(`${API}/usuarios/${userId}`, data)
      .pipe(map((res: any)=> {
        return res
      }))
  }
  //metodo delete
  delete(id: number): Observable<Usuario>{
    return this.httpClient.delete<Usuario>(`${API}/usuarios/${id}`);
  }

}
