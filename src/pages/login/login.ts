import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NavController } from 'ionic-angular';
import { ServicesPage } from '../../pages/services/services';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public nav: NavController, public formBuilder: FormBuilder) {
    	this.loginForm = formBuilder.group({
	        username: ['', Validators.compose([Validators.required])],
	        password: ['', Validators.compose([Validators.required])]
	    });
    }

    goToServices(){

    	console.log(this.loginForm.get('username'));
        //this.nav.push(ServicesPage);
    }

}
