import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Pedido } from './pages/pedido/pedido';
import { Resumen } from './pages/resumen/resumen';
import { Gracias } from './pages/gracias/gracias';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pedido', component: Pedido },
  { path: 'resum', component: Resumen },
  { path: 'gracies', component: Gracias }
];