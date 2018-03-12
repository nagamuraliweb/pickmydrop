import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class OtpService {

	private otpRequest: string = 'http://pickmydrop.com/pmd/public/api/v1/uotprequest';
	private uotpverify: string = 'http://pickmydrop.com/pmd/public/api/v1/uotpverify';
  	private headers: Headers = new Headers({'Content-Type': 'application/json'});

  	constructor(private http: HttpClient) { }

  	otpRequest (data) {
		return this.http.post<any>(this.otpRequest, data, {headers: this.headers}).pipe(catchError());
	}

 	otpVerify (data) {
		return this.http.post<any>(this.uotpverify, data, {headers: this.headers}).pipe(catchError());
	}

}