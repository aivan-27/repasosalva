import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '../../../Modelos/articulos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpArticulos {
  url = 'http://localhost:3001/articulos';

  constructor(private httpservice:HttpClient){}


  getAll():Observable<Articulo[]>{
    return this.httpservice.get<Articulo[]>(this.url);
    
  }

  get(id:string):Observable<Articulo>{
    return this.httpservice.get<Articulo>(`${this.url}/${id}`);
  }

  post(articulo:Articulo){
    return this.httpservice.post<Articulo>(this.url, articulo);
  }

  delete(id:string){
    return this.httpservice.delete<Articulo>(`${this.url}/${id}`);
  }
  
  patch(id:string,articulo:Articulo){
    return this.httpservice.patch<Articulo>(`${this.url}/${id}`, articulo);
  }

}
