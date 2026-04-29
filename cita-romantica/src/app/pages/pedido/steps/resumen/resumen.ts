import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoStateService } from '../../wizard/pedido-state.service';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen.html',
  styleUrl: './resumen.scss',
})
export class Resumen {

  constructor(public state: PedidoStateService) {}

  labels: Record<string, string> = {
    // primer plato
    arros: 'Arròs amb pollastre',
    caccio: 'Caccio e pepe',
    gnocchis: 'Gnocchis amb mel',
    parmigiana: 'Parmigiana d’albergínia',
    pasta: 'Pasta d’albergínia',
    salmo: 'Salmó amb arròs',

    // complementos
    camembert: 'Camembert',
    'crema-camembert': 'Crema Camembert',
    'crema-brie': 'Crema Brie',
    tequenos: 'Tequeños',
    pastanaga: 'Bastons de Pastanaga',
    amanida: 'Amanida de Tomàquet',
    hummus: 'Hummus',
    palitos: 'Palitos de Pa',
    'sense-complements': 'Sense complements',

    // postres
    raim: 'Raïm blanc',
    coulant: 'Coulant de xocolata',
    brownie: 'Brownie',
    cirera: 'Cirera',
    pancakes: 'Pancakes',
    maduixot: 'Maduixot',
    tiramisu: 'Tiramisú',
    mochi: 'Mochi de coco',
    'sense-postre': 'Sense postre',
  };

  format(value: string | null): string {
    if (!value) return '-';
    return this.labels[value] ?? value;
  }

  confirmar() {
    alert('Pedido enviado ❤️');
  }
}
