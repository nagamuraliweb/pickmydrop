import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SignUpService {

	private signupUrl: string = 'http://pickmydrop.com/pmd/public/api/v1/uregister';
  	private headers: Headers = new Headers({'Content-Type': 'application/json'});

  	constructor(private http: HttpClient) { }

 	signUp (userData) {
		return this.http.post<any>(this.signupUrl, userData, {headers: this.headers}).pipe(catchError());
	}

}