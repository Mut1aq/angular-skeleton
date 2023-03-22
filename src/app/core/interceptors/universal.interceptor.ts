/**
 * This interceptor ensures that the app makes requests
 * with relative paths correctly server-side.
 * Requests which start with a dot (ex. ./assets/...)
 * or relative ones ( ex. /assets/...) will be converted
 * to absolute paths
 */
import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { REQUEST } from '@nguniversal/express-engine/tokens';

import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {
  constructor(
    private readonly injector: Injector,
    @Inject(PLATFORM_ID) private readonly platformId: any
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isServer = isPlatformServer(this.platformId);
    if (
      isServer &&
      !request.url.startsWith('//') &&
      (request.url.startsWith('./') || request.url.startsWith('/'))
    ) {
      const serverRequest = this.injector.get(REQUEST) as Request;
      const baseUrl = `${serverRequest.protocol}://${serverRequest.get(
        'Host'
      )}`;
      let endpoint = request.url;

      if (endpoint.startsWith('.')) {
        endpoint = endpoint.substring(1);
      }

      request = request.clone({
        url: `${baseUrl}${endpoint}`,
      });
    }
    return next.handle(request);
  }
}
export const UniversalInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: UniversalInterceptor,
  multi: true,
};
