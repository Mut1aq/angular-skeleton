import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/config/constants';
import { APIService } from 'src/app/core/services/api.service';
import { GEOLayers } from './interfaces/geo-layers.interface';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private readonly api: APIService) {}

  getGEOLayers(): Observable<GEOLayers[]> {
    return this.api.get<GEOLayers[]>(Constants.MAPS_PATH + 'geo-layers');
  }

  getFeatureCollections(): Observable<GEOLayers[]> {
    return this.api.get<GEOLayers[]>(
      Constants.MAPS_PATH + Constants.FEATURE_COLLECTIONS_PATH
    );
  }
}
