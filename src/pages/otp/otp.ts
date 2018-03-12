import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../../pages/login/login';

import { SignUpService } from '../../pages/signup/signup.service';
import { OtpService } from '../../pages/otp/otp.service';

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html'
})
export class OtpPage implements OnInit {

	constructor(public navCtrl: NavController, public formBuilder: FormBuilder, private signUpService: SignUpService) {

	}

	ngOnInit(){
		this.OtpService.otpRequest(localstorage.setItem('signUpForm'))
               .subscribe(() => { this.signUp(); });
	}

  	signUp() {
        if (localstorage.setItem('signUpForm')) {
            this.signUpService.signUp(localstorage.setItem('signUpForm'))
                .subscribe(() => { this.goToLogin(); });
        }
    }

    goToLogin() {
        this.nav.push(LoginPage);
    }

}
