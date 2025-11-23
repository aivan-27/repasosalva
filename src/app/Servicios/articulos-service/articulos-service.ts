import { Injectable } from '@angular/core';
import { Articulo } from '../../../Modelos/articulos';
import { HttpArticulos } from '../http/http-articulos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  Articulos!: Articulo[];

  constructor(private httpservice:HttpArticulos){}



  getAll():Observable<Articulo[]>{
    return this.httpservice.getAll();
  };

  verArticulo(id:string):Observable<Articulo>{
    return this.httpservice.get(id);
  };

  BorrarArticulo(id:string):Observable<Articulo>{
    return this.httpservice.delete(id)
  };

  CrearArticulo(articulo:Articulo):Observable<Articulo>{
    return this.httpservice.post(articulo)
  };

  ActualizarArticulo(id:string,articulo:Articulo):Observable<Articulo>{
    return this.httpservice.patch(id,articulo)
  };

  
}
