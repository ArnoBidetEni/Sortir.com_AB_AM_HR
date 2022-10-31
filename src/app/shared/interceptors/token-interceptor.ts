import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../services/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService : LoginService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const at = localStorage.getItem(this.loginService.LS_AT);
    const isLoggedIn = this.loginService.isLoggedIn$.value;
    console.log(request.url);

    const isApiUrl = request.url.startsWith(environment.api_ip);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${at}` }
      });
    }

    return next.handle(request);
  }
}
