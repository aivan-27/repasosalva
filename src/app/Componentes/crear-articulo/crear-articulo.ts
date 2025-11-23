import { Component } from '@angular/core';
import { Articulo } from '../../../Modelos/articulos';
import { ArticulosService } from '../../Servicios/articulos-service/articulos-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-articulo',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './crear-articulo.html',
  styleUrl: './crear-articulo.scss',
})
export class CrearArticulo {
  Articulo :Articulo ={
    id: '',
    nombre: '',
    categoria:'',
    descripcion:'',
    unidades:0,
    precio:0
  }
  constructor(private servicio:ArticulosService, private ruta:ActivatedRoute){}

  onSubmit(){
    this.servicio.CrearArticulo(this.Articulo).subscribe({
      next: (a) => console.log("Articulo creado"+ a),
      error: error => console.log("Error"+ error.status)
    })
  }



  

}
