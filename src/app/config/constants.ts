import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable()
export class Constants {
  public static readonly API_ENDPOINT: string = environment.API;

  public static readonly AUTH_PATH: string = 'auth/';
  public static readonly DASHBOARD_PATH: string = 'dashboard/';
  public static readonly MAPS_PATH: string = 'maps/';
  public static readonly ADMINS_PATH: string = 'admins/';
  public static readonly USERS_PATH: string = 'users/';
  public static readonly FEATURES_PATH: string = 'features/';
  public static readonly ADS_PATH: string = 'admin-posts/';
  public static readonly MAILS_PATH: string = 'mails/';
  public static readonly CONSULTATION_FORMS_PATH: string =
    'consultation-forms/';
  public static readonly FEATURE_COLLECTIONS_PATH: string =
    'feature-collections/';
}
