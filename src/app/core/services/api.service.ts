import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  handleError = (error: any) => {
    throw new Error(error?.error?.message);
  };

  get = (url: string, params?: any): Observable<any> => {
    let httpParams = new HttpParams();
    for (const property in params) {
      httpParams = httpParams.set(property, params[property]);
    }

    return this.http.get(`${environment.API}${url}`, { params: httpParams });
  };

  post = (url: string, body: any): Observable<any> => {
    return this.http.post(`${environment.API}${url}`, body);
  };

  patch = (url: string, body: any): Observable<any> => {
    return this.http.patch(`${environment.API}${url}`, body);
  };

  put = (url: string, body: any): Observable<any> => {
    return this.http.put(`${environment.API}${url}`, body);
  };

  delete = (url: string, params?: any): Observable<any> => {
    let httpParams = new HttpParams();
    for (const property in params) {
      httpParams = httpParams.set(property, params[property]);
    }
    return this.http.delete(`${environment.API}${url}`, {
      params: httpParams,
    });
  };
}
