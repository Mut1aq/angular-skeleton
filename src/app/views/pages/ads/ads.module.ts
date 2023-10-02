import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads.component';
import { TranslationModule } from '../../shared/modules/translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxFileDropModule } from 'ngx-file-drop';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
  declarations: [AdsComponent],
  imports: [
    CommonModule,
    TranslationModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdsComponent,
      },
    ]),
    PipesModule,
    NgxFileDropModule,
  ],
})
export class AdsModule {}
