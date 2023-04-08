import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ToastService } from 'src/app/core/services/toast.service';
import { GEOLayers } from './interfaces/geo-layers.interface';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnInit {
  constructor(
    private readonly mapService: MapService,
    private readonly toast: ToastService
  ) {}

  map!: L.Map;

  public showGeoFilter = true;

  toggleGeoFilter(): void {
    this.showGeoFilter = !this.showGeoFilter;
  }

  private initMap(): void {
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
    });

    const streets = L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 18,
        minZoom: 3,
      }
    );

    const baseMaps = {
      OpenStreetMap: osm,
      'Mapbox Streets': streets,
    };

    this.map = L.map('map', {
      attributionControl: true,
      minZoom: 3,
    }).setView([30.5852, 36.2384], 6);

    this.map.attributionControl.setPrefix('Angular Skeleton by Mutlaq');

    L.control.scale({ position: 'bottomright' }).addTo(this.map);

    L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
    }).addTo(this.map);

    L.control.layers(baseMaps).addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    L.geoJSON().addTo(this.map);
  }

  ngOnInit(): void {
    this.mapService.getGEOLayers().subscribe({
      next: (geoLayers: GEOLayers) => {
        console.log(geoLayers);
      },
      error: (err) => {
        this.toast._onApiError(err);
      },
    });
  }
}
