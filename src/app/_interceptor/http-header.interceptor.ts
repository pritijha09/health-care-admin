import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable()
export class HttpHeaderInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  if(localStorage.getItem('currentUser')){
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser.token) {
  request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUser.token}`,
         })
       });
    }
  } else {
    request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
         })
       });
  }
     
     return next.handle(request);
     }
  }
