import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { ServicesPage } from '../../pages/services/services';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})
export class SignupPage {

    constructor(public nav: NavController, public formBuilder: FormBuilder) {
    	this.signUpForm = formBuilder.group({
	        firstname: [''],
	        lastname: [''],
	        email: [''],
	        password: [''],
	        phone: [''],
	        terms: ['']
	    });
    }

    goToServices() {

    	console.log(this.firstname);
        //this.nav.push(ServicesPage);
    }

}
