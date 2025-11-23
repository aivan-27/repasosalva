import { Routes } from '@angular/router';
import { CrearArticulo } from './Componentes/crear-articulo/crear-articulo';
import { ActualizarArticulo } from './Componentes/actualizar-articulo/actualizar-articulo';
import { BorrarArticulo } from './Componentes/borrar-articulo/borrar-articulo';
import { VerArticulo } from './Componentes/ver-articulo/ver-articulo';
import { ArticulosComponente } from './Componentes/articulos-componente/articulos-componente';
import { App } from './app';

export const routes: Routes = [
    {path: '' ,component:App},
    {path: 'articulos', component: ArticulosComponente},
    {path: 'crear', component:CrearArticulo},
    {path: 'actualizar/:id', component:ActualizarArticulo},
    {path: 'borrar/:id', component:BorrarArticulo},
    {path: 'articulo/:id', component:VerArticulo},
    {path: '**',redirectTo:''}



];
