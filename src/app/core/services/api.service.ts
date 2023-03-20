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

  get = <T>(url: string, params?: any): Observable<T> => {
    let httpParams = new HttpParams();
    for (const property in params) {
      httpParams = httpParams.set(property, params[property]);
    }

    return this.http.get<T>(`${environment.API}${url}`, { params: httpParams });
  };

  post = <T>(url: string, body: any): Observable<T> => {
    return this.http.post<T>(`${environment.API}${url}`, body);
  };

  patch = <T>(url: string, body: any): Observable<T> => {
    return this.http.patch<T>(`${environment.API}${url}`, body);
  };

  put = <T>(url: string, body: any): Observable<T> => {
    return this.http.put<T>(`${environment.API}${url}`, body);
  };

  delete = <T>(url: string, params?: any): Observable<T> => {
    let httpParams = new HttpParams();
    for (const property in params) {
      httpParams = httpParams.set(property, params[property]);
    }
    return this.http.delete<T>(`${environment.API}${url}`, {
      params: httpParams,
    });
  };
}
