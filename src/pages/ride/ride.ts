import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavController } from 'ionic-angular';
import { LocationPage } from '../../pages/location/location';

@Component({
    selector: 'page-ride',
    templateUrl: 'ride.html'
})
export class RidePage {

    constructor(public nav: NavController, public formBuilder: FormBuilder) {
    	this.rideForm = formBuilder.group({
	        pickup: ['', Validators.compose([Validators.required])],
	        stop: '',
	        dropto: ['', Validators.compose([Validators.required])]
	    });
    }

    goToLocation(){
      this.nav.push(LocationPage);
    }
}
