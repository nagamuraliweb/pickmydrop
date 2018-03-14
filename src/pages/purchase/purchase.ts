import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LocationPage } from '../../pages/location/location';
import { PurchaseService } from '../../pages/purchase/purchase.service';

@Component({
    selector: 'page-purchase',
    templateUrl: 'purchase.html',
    providers: [PurchaseService]
})
export class PurchasePage {

    purchaseForm: any;

    constructor(public nav: NavController, public formBuilder: FormBuilder, private purchaseService: PurchaseService) {
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
