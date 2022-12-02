import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { APIService } from '../services/api.service';
import { ToastService } from '../services/toast.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  requestCount: number = 0;
  constructor(
    private api: APIService,
    private router: Router,
    private translateService: TranslateService,
    private toastService: ToastService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request;
    const currentLang = localStorage.getItem('language') || 'en';
    if (this.requestCount === 0) {
      this.api.loading$.next(true);
    }
    this.requestCount++;
    const headersConfig = {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Accept-Language': currentLang,
    };

    request = req.clone({ setHeaders: headersConfig }); //, withCredentials: true

    return next.handle(request).pipe(
      /**
       * Using `catchError` from RxJS to catch all errors including 401.
       * With `tap`, the 401 errors are not caught.
       */
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.toastService._onApiError;
            this.router.navigateByUrl('');
          }
        }
        // Returning `of(err)` will not throw a new error, hence not reaching the `error` callbacks in `subscribe`.
        // Using `throwError` will make sure that the error is propagated to the `error` callbacks in `subscribe`.
        return throwError(err);
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
