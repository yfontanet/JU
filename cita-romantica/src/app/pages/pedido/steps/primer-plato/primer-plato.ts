import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoStateService } from '../../wizard/pedido-state.service';

@Component({
  selector: 'app-primer-plato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primer-plato.html',
  styleUrl: './primer-plato.scss',
})
export class PrimerPlato {

  constructor(public state: PedidoStateService) {}

  opciones = [
    { name: 'Arros amb pollastre', value: 'arros' },
    { name: 'Caccio e pepe', value: 'caccio' },
    { name: 'Gnocchis amb mel', value: 'gnocchis' },
    { name: 'Parmigiana', value: 'parmigiana' },
    { name: 'Pasta d’albergínia', value: 'pasta' },
    { name: 'Salmó amb arròs', value: 'salmo' },
  ];

  select(value: string) {
    this.state.setPrimerPlato(value);
  }
}
