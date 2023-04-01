import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslationModule } from '../../shared/modules/translation.module';
import { AuthService } from 'src/app/core/services/auth.service';
import { SessionService } from 'src/app/core/services/session.service';
import { ToastService } from 'src/app/core/services/toast.service';
@NgModule({
  declarations: [LoginComponent, AuthComponent],
  imports: [
    TranslationModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full',
          },
        ],
      },
    ]),
  ],
  providers: [AuthService, SessionService, ToastService],
})
export class AuthModule {}
