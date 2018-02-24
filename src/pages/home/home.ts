import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../../pages/signup/signup';
import { LoginPage } from '../../pages/login/login';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public nav: NavController) {

    }

    goToSignup(){
        this.nav.push(SignupPage);
    }

    goToLogin(){
        this.nav.push(LoginPage);
    }

}
