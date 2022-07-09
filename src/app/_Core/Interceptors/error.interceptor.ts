import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
//Rxjs library functions
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PopupService } from 'src/app/_Core/Services/popup.service'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private popupService: PopupService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log(event.body);
          this.popupService.successPopup(event.body.message);
        }
      }),
      catchError((err) => {
        console.log(err);
        //Handle http errors according to their status codes
        if (err.status === 400) {
          this.popupService.errorPopup(err.error.message);
        } else if (err.status === 401) {
        } else if (err.status === 422) {
        } else if (err.status === 500) {
        } else if (err.status === 402) {
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
