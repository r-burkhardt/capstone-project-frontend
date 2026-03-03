import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiConfig } from '../api.config';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(uri): Observable<any> {
    return this.http.get(this.getBaseUrl() + '/' + uri, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  public post(uri: string, body: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(this.getBaseUrl() + '/' + uri, body, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  public put(uri: string, body: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(this.getBaseUrl() + '/' + uri, body, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  public remoteCall(methodName: string, param: string): Observable<any> {
    return null;
  }

  public isLocal() {
    return location.hostname.startsWith('localhost');
  }

  public resolveParamsToUri(params): string {
    if (params === undefined || params.length === 0) {
      return '';
    }

    let result = '';
    for (const key in params) {
      result += key + '=' + params[key] + '&';
    }
    return result.substring(0, result.length - 1);
  }

  private getBaseUrl() {
    return apiConfig.restApiUrl;
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    return headers;
  }

  private handleError(error: any) {
    const errorMessage = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.error(errorMessage);

    return observableThrowError(() => error);
  }
}
