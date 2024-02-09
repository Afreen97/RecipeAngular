import { Component, Input } from '@angular/core';
import { Recipe } from '../../model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  ngOnInit(): void {
    console.log("inside recipe list")
     console.log(this.items)
   }
   @Input() items:Recipe[] =[];
}
