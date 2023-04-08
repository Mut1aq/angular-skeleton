import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { RouterModule } from '@angular/router';
import { GeoFilterComponent } from './geo-filter/geo-filter.component';

@NgModule({
  declarations: [MapComponent, GeoFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapComponent,
      },
    ]),
  ],
})
export class MapModule {}
