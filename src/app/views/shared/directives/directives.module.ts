import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersOnlyDirective } from './numbers-only.directive';

@NgModule({
  declarations: [NumbersOnlyDirective],
  exports: [NumbersOnlyDirective],
  imports: [CommonModule],
})
export class DirectivesModule {}
