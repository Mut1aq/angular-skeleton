import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { RouterModule } from '@angular/router';
import { GeoFilterComponent } from './geo-filter/geo-filter.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { GEOLayersResolver } from 'src/app/core/resolvers/geo-layers.resolver';
@NgModule({
  declarations: [MapComponent, GeoFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapComponent,
        resolve: {
          GEOLayers: GEOLayersResolver,
        },
      },
    ]),
    MatSelectModule,
    MatIconModule,
  ],
})
export class MapModule {}
