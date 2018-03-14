import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavController } from 'ionic-angular';
import { LocationPage } from '../../pages/location/location';
import { RideService } from '../../pages/ride/ride.service';

@Component({
    selector: 'page-ride',
    templateUrl: 'ride.html',
    providers: [RideService]
})
export class RidePage {

    rideForm: any;

    constructor(public nav: NavController, public formBuilder: FormBuilder, private rideService: RideService) {
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
