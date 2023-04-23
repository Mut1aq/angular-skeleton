import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GEOLayers } from '../interfaces/geo-layers.interface';

@Component({
  selector: 'app-geo-filter',
  templateUrl: './geo-filter.component.html',
  styleUrls: ['./geo-filter.component.scss'],
})
export class GeoFilterComponent implements OnInit, OnDestroy {
  constructor(private activatedRoute: ActivatedRoute) {}

  GEOLayers!: GEOLayers[];
  subscriptions: Subscription[] = [];
  ngOnInit(): void {
    let resolverSubscriber$ = this.activatedRoute.data.subscribe(
      ({ GEOLayers }) => {
        this.GEOLayers = GEOLayers;
      }
    );

    this.subscriptions.push(resolverSubscriber$);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions.splice(0);
  }
}
