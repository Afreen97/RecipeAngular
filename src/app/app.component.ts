import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isRecipeMenuSelected: boolean | undefined
  ngDoCheck(): void {
    console.log(this.isRecipeMenuSelected)
  }
  title = 'recipe-book';
  selectedMenu:string | null=null;

  onMenuSelect(event: string){
    console.log("menu selected")
    this.selectedMenu=event
    this.isRecipeMenuSelected = this.selectedMenu == 'Recipes'
  }
}
