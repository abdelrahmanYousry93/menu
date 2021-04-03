import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {}


  post(url,obj): Observable<any> {
    return this.http.post(url,obj) .pipe(map((response:Response) => {
      return  <any>response
      // return  <any>response.json()
    }));
    catchError(this.handleErrorObservable);
  }


  
  async postAsync(url,obj) {
    return await this.http.post(url,obj) .pipe(map((response:Response) => {
      return  <any>response
      // return  <any>response.json()
    })).toPromise();
    catchError(this.handleErrorObservable);
  }
  private handleErrorObservable (error: Response | any)
  {
      return Observable.throw(error.message || error);
  }
}
