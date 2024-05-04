import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, concatMap, Observable, switchMap, take, throwError} from 'rxjs';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    protected authService: AuthService,
    protected router: Router,
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.AuthenticatedUser$
      .pipe(
        take(1),
        switchMap(user => {
          if (!user) {
            return next.handle(request);
          }
          return next.handle(request).pipe(
            catchError(err => {
              if (err instanceof HttpErrorResponse) {
                switch (err.status) {
                  case 500:
                    this.router.navigate(['error']);
                    break;
                  case 403:
                    this.router.navigate(['forbidden']);
                    break;
                  case 401:
                    return this.authService.refreshToken().pipe(
                      concatMap(() => next.handle(request)),
                      catchError(err => {
                        if (err.status === 403) {
                          this.authService.logout();
                        }
                        return throwError(() => err);
                      })
                    )
                }
              }
              return throwError(() => err)
            })
          )

        })
      )
  }
}
