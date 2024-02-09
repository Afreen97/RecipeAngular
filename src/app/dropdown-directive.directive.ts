import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {

  @HostBinding('class.show') isDropdownOpen: boolean = false;

  @HostListener("click") dropdownClick() {
    console.log("dropdown clicked")
    this.isDropdownOpen = !this.isDropdownOpen;

    let list = this.elRef.nativeElement.querySelector('.dropdown-menu');
    if (this.isDropdownOpen) {


      this.renderer.addClass(list, 'show');

    } else {

      this.renderer.removeClass(list, 'show');
    }

  }
  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    //this.isDropdownOpen=false
    this.renderer.addClass(this.elRef.nativeElement, 'show');
  }


}
