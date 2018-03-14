import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PurchaseService {

	private purchaseUrl: string = 'http://pickmydrop.com/pmd/public/api/v1/ulogin';
  	private headers: Headers = new Headers({'Content-Type': 'application/json'});

  	constructor(private http: HttpClient) { }

 	purchase () {
		return this.http.post<any>(this.purchaseUrl, { }, {headers: this.headers}).pipe(catchError());
	}

}