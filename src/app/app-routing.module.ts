import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './views/base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./views/pages/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: "mail",
        loadChildren: () =>
          import('./views/shared/components/mail/mail.module').then((m) => m.MailModule)
      },
      {
        path: 'table',
        loadChildren: () =>
          import('./views/shared/components/table/table.module').then((m) => m.TableModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
