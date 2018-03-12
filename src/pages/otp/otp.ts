import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../../pages/login/login';

import { SignUpService } from '../../pages/signup/signup.service';
import { OtpService } from '../../pages/otp/otp.service';

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html'
})
export class OtpPage implements OnInit {

	constructor(public navCtrl: NavController, 
              public formBuilder: FormBuilder, 
              private _signUpService: SignUpService,
              private _otpService: OtpService) {

	}

	ngOnInit() {

    let phoneNumber = localStorage.getItem('signUpForm');

    this._otpService.otpRequest(phoneNumber).subscribe();
  }

  validateOtp(code) {
    this._otpService.otpVerify(phoneNumber, code)
      .subscribe(() => { this.signUp(); });
  }

  signUp() {
        if (localStorage.getItem('signUpForm')) {
          this._signUpService.signUp(localStorage.setItem('signUpForm'))
                .subscribe(() => { this.goToLogin(); });
        }
  }

  goToLogin() {
      this.nav.push(LoginPage);
  }

}
