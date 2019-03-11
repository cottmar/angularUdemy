import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
//Add a CSS class to an element once its clicked and remove again (toggle)
//Add and remove OPEN class
  
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
  
  constructor() { }

}
