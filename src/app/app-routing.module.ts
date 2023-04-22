import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    children: [
      {
        path: 'mail',
        loadChildren: () =>
          import('./views/shared/components/mail/mail.module').then(
            (m) => m.MailModule
          ),
      },
      {
        path: 'table',
        loadChildren: () =>
          import('./views/shared/components/table/table.module').then(
            (m) => m.TableModule
          ),
      },
      {
        path: 'map',
        loadChildren: () =>
          import('./views/shared/components/map/map.module').then(
            (m) => m.MapModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
