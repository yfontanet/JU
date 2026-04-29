import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pedido } from './pages/pedido/pedido';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pedido', component: Pedido },
];