import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

import { SignUpService } from '../../pages/signup/signup.service';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
    providers: [SignUpService]
})
export class SignupPage {

    resp : string;
    
    constructor(public nav: NavController, public formBuilder: FormBuilder, private signUpService: SignUpService) {
    	this.signUpForm = formBuilder.group({
	        firstname: ['', Validators.compose([Validators.required])],
	        lastname: ['', Validators.compose([Validators.required])],
	        email: ['', Validators.compose([Validators.required])],
	        password: ['', Validators.compose([Validators.required])],
	        phone: ['', Validators.compose([Validators.required])],
	        terms: ['', Validators.compose([Validators.required])],
            deviceId: '',
            userdevicetoken: '',
            invitecode: ''
	    });
    }

    signUp() {

        if (this.signUpForm.dirty && this.signUpForm.valid) {
            console.log(this.signUpForm.value);

            this.signUpService.signUp(this.signUpForm.value)
                .subscribe(() => { this.goToLogin(); });
        }
    }

    goToLogin() {
        this.nav.push(LoginPage);
    }

}
