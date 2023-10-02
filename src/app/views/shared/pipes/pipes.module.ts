import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePassedPipe } from './time-passed.pipe';

@NgModule({
  declarations: [TimePassedPipe],
  exports: [TimePassedPipe],
  imports: [CommonModule],
})
export class PipesModule {}
