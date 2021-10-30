import { GlobalService } from './../services/global/global.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CryptojsIncreptDecript } from '../auth/crypto-incrept-decript';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class httpInterceptor implements HttpInterceptor {
  constructor(
    private crypto: CryptojsIncreptDecript,
    private toastr: ToastrService,
    private globalService: GlobalService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const _token = localStorage.getItem('access-token');
    let timestamp = Math.floor(new Date().getTime() / 1000.0).toString();
    timestamp = this.crypto.encrypt(timestamp);
    const newRequest = request.clone({
      headers: request.headers
        .set('ts', timestamp)
        .set('Authorization', `Bearer ${_token}`)
        .set('Access-Control-Allow-Origin', '*'),
    });

    return next.handle(newRequest).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: any) => {
        // Logout user when unauthorized.
        if (error.status == 401) {
          localStorage.clear();
          this.globalService.logout();
          this.toastr.error(
            'You have been logged out due to timeout, please login again.'
          );
        }
        return Observable.throw(error);
      })
    );
  }
}
