import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { AuthService } from 'src/app/_Core/Services/auth.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();
if (token) {
      console.log(token);

      request = request.clone({
          setHeaders: {
              Authorization: `Bearer ${token}`
          }
      });
    }
    return next.handle(request);

  }
}
