import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { RouterModule } from '@angular/router';
import { GeoFilterSidePanelComponent } from './geo-filter-side-panel/geo-filter-side-panel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [MapComponent, GeoFilterSidePanelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapComponent,
      },
    ]),
    MatSidenavModule,
    MatSelectModule,
  ],
})
export class MapModule {}
