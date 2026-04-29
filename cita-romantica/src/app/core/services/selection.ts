import { Injectable } from '@angular/core';
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  primerPlat: Dish | null = null;
  complements: Dish[] = [];
  postres: Dish[] = [];

  setPrimerPlat(dish: Dish) {
    this.primerPlat = dish;
  }

  toggleComplement(dish: Dish) {
    const exists = this.complements.find(c => c.id === dish.id);

    if (exists) {
      this.complements = this.complements.filter(c => c.id !== dish.id);
    } else {
      this.complements.push(dish);
    }
  }

  togglePostre(dish: Dish) {
    const exists = this.postres.find(p => p.id === dish.id);

    if (exists) {
      this.postres = this.postres.filter(p => p.id !== dish.id);
    } else {
      this.postres.push(dish);
    }
  }

  clearAll() {
    this.primerPlat = null;
    this.complements = [];
    this.postres = [];
  }
}