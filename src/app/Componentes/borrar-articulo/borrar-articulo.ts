import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ArticulosService } from '../../Servicios/articulos-service/articulos-service';

@Component({
  selector: 'app-borrar-articulo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './borrar-articulo.html',
  styleUrl: './borrar-articulo.scss',
})
export class BorrarArticulo {


  constructor(private servicio:ArticulosService, private ruta:ActivatedRoute){}


  
  borrar(){
    this.ruta.params.subscribe(param => this.servicio.BorrarArticulo(param['id']).subscribe({
      next: a => console.log("articuloborrado con id "+ a.id),
      error: error => console.log("ERROR"+error.status),
    }));
    

  }


}
