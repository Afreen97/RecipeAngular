import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss'
})
export class HeaderComponentComponent {
  @Output() menuSelected = new EventEmitter<string>();
  onMenuSelect(item:string){
    console.log("inside this")
   // this.menuSelected.emit(item)
  }
}
