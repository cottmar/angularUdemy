import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../../models/ingredient.model";
import { ShoppingService } from 'src/app/services/shopping.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private slService: ShoppingService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }

}
