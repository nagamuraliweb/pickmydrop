import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { ServicesPage } from '../../pages/services/services';

import { LoginService } from '../../pages/login/login.service';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [LoginService]
})
export class LoginPage {

    loginForm: any;

    constructor(public nav: NavController, public formBuilder: FormBuilder, private loginService: LoginService) {
    	this.loginForm = formBuilder.group({
	        username: ['', Validators.compose([Validators.required])],
	        password: ['', Validators.compose([Validators.required])]
	    });
    }

    login() {

        if (this.loginForm.dirty && this.loginForm.valid) {
            console.log(this.loginForm.value);

            this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)
                .subscribe(() => { this.goToServices(); });
        }
    }

    goToServices() {
        this.nav.push(ServicesPage);
    }
}
