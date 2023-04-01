import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslationModule } from '../../modules/translation.module';
import { MailComponent } from './mail.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { QuillModule } from 'ngx-quill';
import { MatCardModule } from '@angular/material/card';
import { ComposeComponent } from './compose/compose.component';
import { SentComponent } from './sent/sent.component';

@NgModule({
  declarations: [MailComponent, SentComponent, ComposeComponent],
  imports: [
    QuillModule.forRoot(),
    MatCardModule,
    TranslationModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'new'
      },
      {
        path: 'compose',
        component: ComposeComponent
      },
      {
        path: 'sent',
        component: SentComponent
      }
    ]),
  ],


  providers: [],
})
export class MailModule { }
