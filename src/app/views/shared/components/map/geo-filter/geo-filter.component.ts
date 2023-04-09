import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GEOLayers } from '../interfaces/geo-layers.interface';

@Component({
  selector: 'app-geo-filter',
  templateUrl: './geo-filter.component.html',
  styleUrls: ['./geo-filter.component.scss'],
})
export class GeoFilterComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  GEOLayers!: GEOLayers[];
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ GEOLayers }) => {
      this.GEOLayers = GEOLayers;
      console.log(this.GEOLayers);
    });
  }
}
