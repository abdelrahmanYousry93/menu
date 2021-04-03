import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
  } from "@angular/common/http";
  import { Observable, of, throwError } from "rxjs";
import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
@Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    private handleAuthError(err: HttpErrorResponse): Observable<any> {
      //handle your auth error or rethrow
      if (err.status === 401 || err.status === 403) {
          //navigate /delete cookies or whatever
          this.router.navigateByUrl('login');
          // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
          return of(err.message); // or EMPTY may be appropriate here
      }
      return throwError(err);
  }


    intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.indexOf('auth')>0)
        {
          var token="Bearer "+JSON.parse(localStorage.getItem("token"));
      const cloneReq = req.clone({
        headers: req.headers.set(
          "Authorization",
          token
        ).set('Content-Type', 'application/json')
      });
      return next.handle(cloneReq).pipe(catchError(x=> this.handleAuthError(x)));
    }
    else if(req.url.indexOf('upload')>0)
    {
      const cloneReq = req.clone();
      return next.handle(cloneReq);
    }
    else 
    {
        const cloneReq = req.clone({
            headers:  req.headers.set('Content-Type', 'application/json')
          });
          return next.handle(cloneReq);
    }
}
  }