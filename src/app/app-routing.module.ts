import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './views/base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: () =>
      //     import('./views/pages/home/home.module').then((m) => m.HomeModule),
      // },
    ],
  },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./views/pages/auth/auth.module').then((m) => m.AuthModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
