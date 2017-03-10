
import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response, Headers, RequestOptions, Jsonp } from "@angular/http";
//import { Http } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

import { AppData } from './app-data.interface';

@Injectable()
export class AppService {

  public API_KEY: string = '99';
  public API_URL: string = 'https://jsonplaceholder.typicode.com/photos';
  public params: string;
  public requestUrl: string;
   
  constructor(public http: Http) {
    this.params = `?albumId=${this.API_KEY}`;
    this.requestUrl = this.API_URL + this.params;

  }

  fetch(): Observable<AppData[]> {
    console.log("^^^^ fetch???");
    return this.http.get(this.requestUrl)
      // .do(c => console.log(c.json()))
      .map((res: Response) => res.json() || [])
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  // snippet using post
  // https://scotch.io/tutorials/angular-2-http-requests-with-observables
  // addComment (body: Object): Observable<Comment[]> {
  //       let bodyString = JSON.stringify(body); // Stringify payload
  //       let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  //       let options       = new RequestOptions({ headers: headers }); // Create a request option

  //       return this.http.post(this.commentsUrl, body, options) // ...using post request
  //                        .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
  //                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  //   } 


} // -class
