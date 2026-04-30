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
    {
      name: 'Camembert',
      value: 'camembert',
      image: 'assets/images/complements/camembert.jpeg'
    },
    {
      name: 'Crema Camembert',
      value: 'crema-camembert',
      image: 'assets/images/complements/cremacamembert.jpeg'
    },
    {
      name: 'Crema Brie',
      value: 'crema-brie',
      image: 'assets/images/complements/cremabrie.jpeg'
    },
    {
      name: 'Tequeños',
      value: 'tequenos',
      image: 'assets/images/complements/tequenos.jpeg'
    },
    {
      name: 'Bastons de Pastanaga',
      value: 'pastanaga',
      image: 'assets/images/complements/pastanaga.jpeg'
    },
    {
      name: 'Amanida de Tomàquet',
      value: 'amanida',
      image: 'assets/images/complements/amanida.jpeg'
    },
    {
      name: 'Hummus',
      value: 'hummus',
      image: 'assets/images/complements/hummus.jpg'
    },
    {
      name: 'Palitos de Pa',
      value: 'palitos',
      image: 'assets/images/complements/palitos.jpeg'
    },
    {
      name: 'Sense complements',
      value: 'sense-complements',
      image: 'assets/images/complements/sensecomp.png'
    }
  ];

  toggle(value: string) {
    this.state.toggleComplemento(value);
  }

  isSelected(value: string) {
    return this.state.pedido().complementos.includes(value);
  }
}
