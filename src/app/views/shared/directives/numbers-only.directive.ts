import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[numbersOnly]',
})
export class NumbersOnlyDirective {
  @Input() numbersOnly!: string;

  navigationKeys: Array<string> = ['Backspace']; //Add keys as per requirement

  constructor() {}

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const { key, ctrlKey, metaKey, preventDefault } = event;
    if (
      // Allow: Delete, Backspace, Tab, Escape, Enter, etc
      this.navigationKeys.indexOf(key) > -1 ||
      (key === 'a' && ctrlKey === true) || // Allow: Ctrl+A
      (key === 'c' && ctrlKey === true) || // Allow: Ctrl+C
      (key === 'v' && ctrlKey === true) || // Allow: Ctrl+V
      (key === 'x' && ctrlKey === true) || // Allow: Ctrl+X
      (key === 'a' && metaKey === true) || // Cmd+A (Mac)
      (key === 'c' && metaKey === true) || // Cmd+C (Mac)
      (key === 'v' && metaKey === true) || // Cmd+V (Mac)
      (key === 'x' && metaKey === true) // Cmd+X (Mac)
    ) {
      return; // let it happen, don't do anything
    }
    // Ensure that it is a number and stop the keypress
    if (key === ' ' || isNaN(Number(key))) {
      preventDefault();
    }
  }
}
