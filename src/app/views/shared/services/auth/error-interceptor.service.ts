import { Observable, throwError } from 'rxjs';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptorService {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),

      catchError((err: HttpErrorResponse) => {
        let error;
        if ([401, 403].indexOf(err.status) !== -1) {
          // auto logout if 401 Unauthorized or 403 Forbidden
          this.toastr.error('Login Session has expired!');
          this.authService.logOut();
          return throwError('Session has expired!');
        } else if (err.status === 404) {
          // this.router.navigate(['/notFound', err.status], {
          //   queryParams: {
          //     'Error-Status': err.status,
          //   },
          // });
          error = err.message || err.statusText;
          this.toastr.error('Not Found', 'Error');
          console.log(error);
          return throwError(error);
        } else if (err.status === 500 || err.status === 400) {
          // this.router.navigate(["", err.status], {
          //   queryParams: {
          //     "Error-Status": err.status
          //   }
          // });
          error = err.message || err.statusText;
          this.toastr.error('حدث خطأ ما برجاء المحاوله مره اخري', 'Error');
          console.log(error);
          return throwError(error);
        } else {
          error = err.message || err.statusText;
          this.toastr.error(err.message, 'Error');
          return throwError(error);
        }
      })
    );
  }
}
