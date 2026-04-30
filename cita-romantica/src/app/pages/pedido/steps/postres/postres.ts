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
    {
      name: 'Raïm blanc',
      value: 'raim',
      image: 'assets/images/postres/raim.jpeg'
    },
    {
      name: 'Coulant de xocolata',
      value: 'coulant',
      image: 'assets/images/postres/coulant.jpeg'
    },
    {
      name: 'Brownie',
      value: 'brownie',
      image: 'assets/images/postres/brownie.jpeg'
    },
    {
      name: 'Cirera',
      value: 'cirera',
      image: 'assets/images/postres/cirera.jpeg'
    },
    {
      name: 'Pancakes',
      value: 'pancakes',
      image: 'assets/images/postres/pancakes.jpeg'
    },
    {
      name: 'Maduixot',
      value: 'maduixot',
      image: 'assets/images/postres/maduixot.jpeg'
    },
    {
      name: 'Tiramisú',
      value: 'tiramisu',
      image: 'assets/images/postres/tiramisu.jpeg'
    },
    {
      name: 'Mochi de Coco',
      value: 'mochi',
      image: 'assets/images/postres/mochi.jpg'
    },
    {
      name: 'Sense postre',
      value: 'sense-postre',
      image: 'assets/images/postres/sensepostre.png'
    }
  ];

  toggle(value: string) {
    this.state.togglePostre(value);
  }

  isSelected(value: string) {
    return this.state.pedido().postres.includes(value);
  }
}