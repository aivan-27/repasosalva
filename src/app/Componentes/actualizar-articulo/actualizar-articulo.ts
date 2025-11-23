import { Component } from '@angular/core';
import { Articulo } from '../../../Modelos/articulos';
import { ArticulosService } from '../../Servicios/articulos-service/articulos-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-articulo',
  imports: [FormsModule,RouterLink],
  templateUrl: './actualizar-articulo.html',
  styleUrl: './actualizar-articulo.scss',
})
export class ActualizarArticulo {
  Articulo!:Articulo;


  constructor(private servicio:ArticulosService, private ruta:ActivatedRoute){}

  id !:string;
  ngOnInit(){
    this.ruta.params.subscribe(params=>{
      this.id = params['id'];
      this.servicio.verArticulo(this.id).subscribe({
        next: (a) => this.Articulo = a,
        error: error => console.log("Error"+ error.status)
      })
    })
  }

  onSubmit(){
    this.servicio.ActualizarArticulo(this.id, this.Articulo).subscribe({
      next: (a) => console.log("Articulo ACTUALIZADO"+ a),
      error: error => console.log("Error"+ error.status)
    })
  }

}
