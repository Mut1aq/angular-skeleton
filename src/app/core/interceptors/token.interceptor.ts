import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestInterceptor implements HttpInterceptor {
  requestCount: number = 0;
  constructor(
    private readonly api: APIService,
    private readonly router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request;
    if (this.requestCount === 0) {
      this.api.loading$.next(true);
    }
    this.requestCount++;
    const headersConfig = {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Accept-Language': localStorage.getItem('language') ?? 'en',
    };
    request = req.clone({ setHeaders: headersConfig });
    return next.handle(request).pipe(
      catchError((err) => {
        if (
          (err instanceof HttpErrorResponse &&
            err.status === HttpStatusCode.Unauthorized) ||
          err.status === HttpStatusCode.Forbidden
        ) {
          this.router.navigate(['auth/login']);
        }
        debugger;
        const error = new Error(err);
        return throwError(() => error);
      }),
      finalize(() => {
        this.requestCount--;
        if (this.requestCount === 0) {
          this.api.loading$.next(false);
        }
      })
    );
  }
}
export const HttpRequestInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpRequestInterceptor,
  multi: true,
};
