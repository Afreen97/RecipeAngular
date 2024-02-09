import { Component } from '@angular/core';
import { RecipeService } from '../recipe-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
  recipes
  private recipeService;
  ngOnInit(): void {
     
  }
 
  constructor(private recipeService1:RecipeService){
      this.recipeService = recipeService1;
      console.log(recipeService1)
      this.recipes=this.recipeService.recipes;
  }
}
