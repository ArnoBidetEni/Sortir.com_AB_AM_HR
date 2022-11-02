import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  PATCH_HEADER = { 'Content-Type': 'application/merge-patch+json' };

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const at = localStorage.getItem("access_token");
    const isApiUrl = request.url.startsWith(environment.api_ip);
    if (at && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${at}` }
      });
    }
    if (/PATCH/.test(request.method)) {
      request = request.clone({
        setHeaders: this.PATCH_HEADER
      });
    }
    return next.handle(request);
  }
}
