import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/mulligatawny_soup_68949_16x9.jpg'),
    new Recipe('AnotherTest Recipe', 'This is simply a test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/mulligatawny_soup_68949_16x9.jpg')
  ];



  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
