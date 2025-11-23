import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Articulo } from '../../../Modelos/articulos';
import { ArticulosService } from '../../Servicios/articulos-service/articulos-service';

@Component({
  selector: 'app-ver-articulo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ver-articulo.html',
  styleUrl: './ver-articulo.scss',
})
export class VerArticulo {

  Articulo!:Articulo;

  constructor(private servicio:ArticulosService,private ruta:ActivatedRoute){}


  ngOnInit(){
      this.ruta.params.subscribe(params=>{
        {this.servicio.verArticulo(params['id']).subscribe({
          next: (a) => this.Articulo = a,
          error: error => console.log("Error"+ error.status)
        })
      };
    })
  }



}
