import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { GEOLayers } from '../interfaces/geo-layers.interface';
import { MapService } from '../map.service';

@Component({
  selector: 'app-geo-filter',
  templateUrl: './geo-filter.component.html',
  styleUrls: ['./geo-filter.component.scss'],
})
export class GeoFilterComponent implements OnInit {
  constructor(
    private readonly mapService: MapService,
    private readonly toast: ToastService
  ) {}

  GEOLayers!: GEOLayers[];
  ngOnInit(): void {
    this.mapService.getGEOLayers().subscribe({
      next: (GEOLayers: GEOLayers[]) => {
        this.GEOLayers = GEOLayers;
      },
      error: (err) => {
        this.toast._onApiError(err);
      },
    });
  }
}
