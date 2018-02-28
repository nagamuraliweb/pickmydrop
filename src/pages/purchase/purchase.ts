import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LocationPage } from '../../pages/location/location';

@Component({
    selector: 'page-purchase',
    templateUrl: 'purchase.html'
})
export class PurchasePage {

    constructor(public nav: NavController, public formBuilder: FormBuilder) {
    	this.purchaseForm = formBuilder.group({
	        purchase: ['', Validators.compose([Validators.required])],
	        item: ['', Validators.compose([Validators.required])],
	        deliveryto: ['', Validators.compose([Validators.required])]
	    });
    }

    goToLocation(){
        this.nav.push(LocationPage);
    }

}
