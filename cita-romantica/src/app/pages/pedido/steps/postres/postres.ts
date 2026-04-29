import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoStateService } from '../../wizard/pedido-state.service';

@Component({
  selector: 'app-postres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postres.html',
  styleUrl: './postres.scss',
})
export class Postres {

  constructor(public state: PedidoStateService) {}

  opciones = [
    'Coulant',
    'Brownie',
    'Maduixes',
    'Raïm',
    'Mochi',
    'Tiramisú',
    'Sense postre'
  ];

  select(item: string) {
    this.state.setPostre(item);
  }
}
