import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LocationPage } from '../../pages/location/location';

@Component({
    selector: 'page-delivery',
    templateUrl: 'delivery.html'
})
export class DeliveryPage {

    constructor(public nav: NavController, public formBuilder: FormBuilder) {
    	this.deliveryForm = formBuilder.group({
	        pickup: ['', Validators.compose([Validators.required])],
	        delivery: ['', Validators.compose([Validators.required])],
	        item: ['', Validators.compose([Validators.required])]
	    });
    }

    goToLocation(){
      this.nav.push(LocationPage);
    }
}
