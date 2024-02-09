import { Component, Input } from '@angular/core';
import { Recipe } from '../../../model';
import { RecipeService } from '../../../recipe-service.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent {

  @Input('item') item:Recipe | undefined;
  //@ts-ignore
  @Input("index") index: number;

  ngOnInit(): void {
   console.log("inside recipe item")
   console.log(this.item)
   console.log(this.index)
 }

  
}
