import { Injectable } from '@angular/core';
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  primeros: Dish[] = [
    {
      id: 1,
      name: 'Arroz con pollo',
      image: 'assets/images/primers/arrozpollo.jpg',
      ingredients: ['Arros Basmati', 'Pit de Pollastre', 'Salsa Teriyaki', 'Sèsam'],
      selected: false,
      expanded: false
    },
    {
      id: 2,
      name: 'Caccio e Pepe',
      image: 'assets/images/primers/caccioepepe.jpg',
      ingredients: ['Rigatoni', 'Pecorino Romano', 'Pebre Negra'],
      selected: false,
      expanded: false
    },
    {
      id: 3,
      name: 'Gnocchis con miel',
      image: 'assets/images/primers/gnocchis.jpg',
      ingredients: ['Gnocchis', 'Ceba', 'Crema de Llet', 'Tires de Bacó', 'Formatge de cabra', 'Mel'],
      selected: false,
      expanded: false
    },
    {
      id: 4,
      name: 'Parmigiana d’Albergínia',
      image: 'assets/images/primers/parmigiana.jpg',
      ingredients: ['Albergínia', 'Tomàquet Fregit', 'Mozzarella', 'Parmesano', 'Espècies'],
      selected: false,
      expanded: false
    },
    {
      id: 5,
      name: 'Pasta d’Albergínia',
      image: 'assets/images/primers/pasta.jpg',
      ingredients: ['Tortiglioni', 'Albergínia', 'Tomàquet', 'Vi Blanc', 'Salsa de carn', 'Espècies'],
      selected: false,
      expanded: false
    },
    {
      id: 6,
      name: 'Salmó amb arròs',
      image: 'assets/images/primers/salmonarroz.jpg',
      ingredients: ['Arros Basmati', 'Salmó', 'Salsa Teriyaki', 'Kewpie', 'Sèsam'],
      selected: false,
      expanded: false
    }
  ];

  complementos: Dish[] = [
    { id: 1, name: 'Camembert', image: 'assets/images/complements/camembert.jpeg', selected: false },
    { id: 2, name: 'Crema Camembert', image: 'assets/images/complements/cremacamembert.jpeg', selected: false },
    { id: 3, name: 'Crema Brie', image: 'assets/images/complements/cremabrie.jpeg', selected: false },
    { id: 4, name: 'Tequeños', image: 'assets/images/complements/tequenos.jpeg', selected: false },
    { id: 5, name: 'Bastons de Pastanaga', image: 'assets/images/complements/pastanaga.jpeg', selected: false },
    { id: 6, name: 'Humus', image: 'assets/images/complements/hummus.jpeg', selected: false },
    { id: 7, name: 'Palitos de Pa', image: 'assets/images/complements/palitos.jpeg', selected: false },
    { id: 8, name: 'Amanida de Tomàquet', image: 'assets/images/complements/amanida.jpeg', selected: false },
    { id: 9, name: 'Sense Complements', image: 'assets/images/complements/sensecomp.png', selected: false }
  ];

  postres: Dish[] = [
    { id: 1, name: 'Coulant', image: 'assets/images/postres/coulant.jpeg', selected: false },
    { id: 2, name: 'Brownie', image: 'assets/images/postres/brownie.jpeg', selected: false },
    { id: 3, name: 'Cirera', image: 'assets/images/postres/cirera.jpeg', selected: false },
    { id: 4, name: 'Maduixot', image: 'assets/images/postres/maduixot.jpeg', selected: false },
    { id: 5, name: 'Raïm Blanc', image: 'assets/images/postres/raim.jpeg', selected: false },
    { id: 6, name: 'Mochi de Coco', image: 'assets/images/postres/mochi.jpg', selected: false },
    { id: 7, name: 'Pancakes', image: 'assets/images/postres/pancakes.jpeg', selected: false },
    { id: 8, name: 'Tiramisú', image: 'assets/images/postres/tiramisu.jpeg', selected: false },
    { id: 9, name: 'Sense Postre', image: 'assets/images/postres/sensepostre.png', selected: false }
  ];
}