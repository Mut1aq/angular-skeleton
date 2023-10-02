import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivateAuth } from './core/guards/auth.guard';
import { canActivateRole } from './core/guards/role.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    canActivate: [canActivateAuth, canActivateRole],
    children: [
      {
        path: 'mail',
        loadChildren: () =>
          import('./views/pages/mail/mail.module').then((m) => m.MailModule),
      },
      {
        path: 'dashboard',
        canActivate: [canActivateAuth],
        loadChildren: () =>
          import('./views/pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'ads',
        canActivate: [canActivateAuth],
        loadChildren: () =>
          import('./views/pages/ads/ads.module').then((m) => m.AdsModule),
      },

      {
        path: 'map',
        loadChildren: () =>
          import('./views/pages/map/map.module').then((m) => m.MapModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
