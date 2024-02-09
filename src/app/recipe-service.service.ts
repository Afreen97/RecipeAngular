import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectRecipe = new EventEmitter()
  recipesChanged = new Subject<Recipe[]>();
  recipes:Recipe[]=[
    {
      title: 'Fruit Salad',
      desc:'Enjoy Fruit Salad in the morning',
      imageUrl:'https://cdn.loveandlemons.com/wp-content/uploads/2019/07/salad-580x845.jpg',
      ingredients:[{
        ingredient:'Vegetables',
        quantity:3
      },{
        ingredient:'Pasta',
        quantity:1
      }]
  }
  ]
   onSelectRecipe (item: any){
    this.selectRecipe.emit(item)
   }
   getRecipe(id:number){
    return this.recipes[id];
   }
   getRecipes(){
    this.recipes.slice();
   }
   addRecipe(recipe:Recipe){
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
   }
   updateRecipe(index: number,newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
   }
   deleteRecipe(index: number, newRecipe: Recipe){
    this.recipes.splice(index,1)
    this.recipesChanged.next(this.recipes.slice())
   }
}