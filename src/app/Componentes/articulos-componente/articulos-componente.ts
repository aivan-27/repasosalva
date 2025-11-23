import { Component } from '@angular/core';
import { Articulo } from '../../../Modelos/articulos';
import { ArticulosService } from '../../Servicios/articulos-service/articulos-service';
import { RouterLink } from '@angular/router';
import { ArticuloComponente } from "../articulo-componente/articulo-componente";

@Component({
  selector: 'app-articulos-componente',
  standalone: true,
  imports: [RouterLink, ArticuloComponente],
  templateUrl: './articulos-componente.html',
  styleUrl: './articulos-componente.scss',
})
export class ArticulosComponente {
  Articulos !: Articulo []

  constructor(private servicio:ArticulosService){}


  ngOnInit(){
    this.servicio.getAll().subscribe({
      next: (a) => this.Articulos = a,
      error: error => console.log("Error"+ error.status)
    })
    
  }

}
