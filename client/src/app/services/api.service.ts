import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Item } from '../models/item';
import { SERVER_URL } from 'src/environments/environment'; // CHECK ho to switch env

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private default_endpoint = "/items";
  public first: string = "";  
  public prev: string = "";  
  public next: string = "";  
  public last: string = "";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(endpoint?: string) {
    let _url = (endpoint && endpoint.length > 5) ? SERVER_URL+endpoint : SERVER_URL+this.default_endpoint;
    // Added suppprt to safe, URL encoded _page and _limit parameters 
    return this.httpClient
      .get(_url, 
      {  params: new HttpParams(
          { fromString: "_page=1&_limit=20" }
        ), observe: "response"
      })
      .pipe(retry(3), catchError(this.handleError), tap(res => {
        console.log(res.headers.get('Link'));
        this.parseLinkHeader(res.headers.get('Link'));
      }));

  }

  public sendGetRequestToUrl(url: string){  
    return this.httpClient.get(url, { observe: "response"}).pipe(retry(3), 			
    catchError(this.handleError), tap(res => {  
      console.log(res.headers.get('Link'));  
      this.parseLinkHeader(res.headers.get('Link'));
    }));  
  }


  addItemToWishlist(item): Observable<Item> {
    item['add_date'] = new Date();
    return this.httpClient.post<Item>(SERVER_URL+this.default_endpoint, item, httpOptions).pipe(
      tap((item: Item) => console.log(`added item w/ id=${item.id}`)),
      catchError(this.handleError)
    );
  }

  editItemInWishlist(item): Observable<Item> {
    return this.httpClient.put<Item>(SERVER_URL+this.default_endpoint+'/'+item.id, item, httpOptions).pipe(
      tap((item: Item) => console.log(`edited item w/ id=${item.id}`)),
      catchError(this.handleError)
    );
  }

  deleteItemById(item): Observable<Item> {
    return this.httpClient.delete<Item>(SERVER_URL+this.default_endpoint+'/'+item, httpOptions).pipe(
      tap((item: Item) => console.log(`deleted item w/ id=${item.id}`)),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  parseLinkHeader(header) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });

    this.first  = links["first"];
    this.last   = links["last"];
    this.prev   = links["prev"];
    this.next   = links["next"]; 
  }
  

}
