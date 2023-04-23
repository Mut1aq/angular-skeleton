import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable()
export class Constants {
  public static readonly API_ENDPOINT: string = environment.API;

  public static readonly AUTH_PATH: string = 'auth/';
  public static readonly DASHBOARD_PATH: string = 'dashboard/';
  public static readonly MAPS_PATH: string = 'maps/';
  public static readonly FEATURES_PATH: string = 'features/';
  public static readonly FEATURE_COLLECTIONS_PATH: string =
    'feature-collections/';
}
