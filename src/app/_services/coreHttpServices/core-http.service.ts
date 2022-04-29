import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

export class securityKey{
  accesskey: string;
  secretkey: string;
}
@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {
private apiBaseURL: string;
  constructor(private httpClient: HttpClient) {
    this.apiBaseURL = environment.apiUrl;
   }

    /**
   * HTTP GET Method
   * @param enpoint string
   */

  get(enpoint: string): Observable<any> {
    return this.httpClient.get(`${this.apiBaseURL}${enpoint}`);
   }

     /**
   * HTTP PUT Method
   * @param enpoint string
   * @param data any
   *
   */
  put(enpoint: string, data: any): Observable<any> {
     return this.httpClient.put(`${this.apiBaseURL}${enpoint}`, data);
  }


     /**
   * HTTP POST Method
    * @param enpoint string
  * @param data any
   *
   */
  post(enpoint: string, data: any): Observable<any> {
    return this.httpClient.post(`${this.apiBaseURL}${enpoint}`, data);
  }
}
