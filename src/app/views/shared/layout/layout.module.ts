import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { TranslationModule } from '../modules/translation.module';
import { FooterComponent } from './footer/footer.component';
import { SublevelMenuComponent } from './side-menu/sublevel-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    SublevelMenuComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    TranslationModule,
    MatButtonModule,
    RouterModule,
    CommonModule,
  ],
  exports: [HeaderComponent, FooterComponent, SideMenuComponent],
  providers: [],
})
export class LayoutModule {}
