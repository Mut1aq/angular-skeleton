import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlErrorComponent } from './form-control-error/form-control-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslationModule } from '../../modules/translation.module';

@NgModule({
  declarations: [FormControlErrorComponent],
  imports: [CommonModule, ReactiveFormsModule, TranslationModule],
  exports: [ReactiveFormsModule, FormControlErrorComponent],
})
export class CustomReactiveFormsModule {}
