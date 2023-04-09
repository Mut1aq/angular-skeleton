import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GEOLayers } from 'src/app/views/shared/components/map/interfaces/geo-layers.interface';
import { MapService } from 'src/app/views/shared/components/map/map.service';

@Injectable({ providedIn: 'root' })
export class GEOLayersResolver implements Resolve<GEOLayers[]> {
  constructor(private mapService: MapService) {}

  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<GEOLayers[]> {
    return this.mapService.getGEOLayers();
  }
}
