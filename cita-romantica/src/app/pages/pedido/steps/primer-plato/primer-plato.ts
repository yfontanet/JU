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

  openedCard: string | null = null;

  opciones = [
    {
      name: 'Arròs amb pollastre',
      value: 'arros',
      image: '/assets/images/primers/arrozpollo.jpg',
      ingredients: 'Arròs Basmati, Pit de Pollastre, Salsa Teriyaki, Sèsam'
    },
    {
      name: 'Caccio e pepe',
      value: 'caccio',
      image: '/assets/images/primers/caccioepepe.jpg',
      ingredients: 'Rigatoni Gragnano, Pecorino Romano, Pebre Negra'
    },
    {
      name: 'Gnocchis amb mel',
      value: 'gnocchis',
      image: '/assets/images/primers/gnocchis.jpg',
      ingredients: 'Gnocchis, Ceba, Crema de Llet, Tires de Bacó, Formatge de cabra, Mel'
    },
    {
      name: 'Parmigiana d’albergínia',
      value: 'parmigiana',
      image: '/assets/images/primers/parmigiana.jpg',
      ingredients: 'Albergínia, Tomàquet Fregit, Mozzarella, Parmesà, Espècies'
    },
    {
      name: 'Pasta d’albergínia',
      value: 'pasta',
      image: '/assets/images/primers/pasta.jpg',
      ingredients: 'Tortiglioni Gragnano, Albergínia, Tomàquet, Vi Blanc, Salsa de carn, Espècies'
    },
    {
      name: 'Salmó amb arròs',
      value: 'salmo',
      image: '/assets/images/primers/salmonarroz.jpg',
      ingredients: 'Arròs Basmati, Salmó, Salsa Teriyaki, Maionesa japonesa Kewpie, Sèsam'
    },
  ];

  toggleCard(value: string) {

    if (this.openedCard === value) {
      this.state.setPrimerPlato(value);
      return;
    }

    this.openedCard = value;
  }

  select(value: string) {
    this.state.setPrimerPlato(value);
  }
}
