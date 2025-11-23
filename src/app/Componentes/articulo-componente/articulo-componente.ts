import { Component, Input } from '@angular/core';
import { Articulo } from '../../../Modelos/articulos';
import { ArticulosService } from '../../Servicios/articulos-service/articulos-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articulo-componente',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './articulo-componente.html',
  styleUrl: './articulo-componente.scss',
})
export class ArticuloComponente {
  @Input() Articulo !:Articulo


  

}
