import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable()
export class Constants {
  public static readonly API_ENDPOINT: string = environment.API;

  public static readonly AUTH_PATH: string = 'auth/';
  public static readonly POSTS_PATH: string = 'posts/';
  public static readonly COMMENT_PATH: string = 'comments/';
  public static readonly DASHBOARD_PATH: string = 'dashboard/';
}
