import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Producto } from './pages/producto/producto';
import { Registro } from './pages/registro/registro';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'productos', component: Producto },
  { path: 'registro', component: Registro },
  { path: '**', redirectTo: 'inicio' }
];
