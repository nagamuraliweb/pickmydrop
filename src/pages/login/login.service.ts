import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {

	private loginUrl: string = 'http://pickmydrop.com/pmd/public/api/v1/ulogin';
  	private headers: Headers = new Headers({'Content-Type': 'application/json'});

  	constructor(private http: HttpClient) { }

 	login (username: string, password: string) {
		return this.http.post<any>(this.loginUrl, { username: username, password: password }, {headers: this.headers}).pipe(catchError());
	}

}