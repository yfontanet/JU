import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoStateService } from '../../wizard/pedido-state.service';

@Component({
  selector: 'app-complementos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complementos.html',
  styleUrl: './complementos.scss',
})
export class Complementos {

  constructor(public state: PedidoStateService) {}

  opciones = [
    'Camembert',
    'Crema Brie',
    'Hummus',
    'Amanida',
    'Palitos de pa',
    'Sense complements'
  ];

  toggle(item: string) {
    this.state.toggleComplemento(item);
  }
}
