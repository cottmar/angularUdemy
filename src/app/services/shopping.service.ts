import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingredientsChanged = new Subject<Ingredient[]>();
  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient("Tortillas", 6),
    new Ingredient("Carne Kgs", 1),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient); 
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
