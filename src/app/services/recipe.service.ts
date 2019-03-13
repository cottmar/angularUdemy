import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  constructor(private slService:ShoppingService) { }

  private recipes: Recipe[] = [
    new Recipe("Tacos", 
    "The Best Tacos in the World", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/799px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg",
    [
      new Ingredient('Carne', 1),
      new Ingredient('Tortillas',12),
      new Ingredient('Queso', 2)
    ]),
    new Recipe("Tacos",
     "The Second Best Tacos in the World", 
     "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/799px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg",
     [
      new Ingredient('Pollo', 2),
      new Ingredient('Tortillas',12),
      new Ingredient('Frijoles', 2)
     ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
  
  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
