import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeliveryPage } from '../../pages/delivery/delivery';
import { PurchasePage } from '../../pages/purchase/purchase';
import { RidePage } from '../../pages/ride/ride';

@Component({
    selector: 'page-services',
    templateUrl: 'services.html'
})
export class ServicesPage {

    constructor(public nav: NavController) {

    }

    goToDelivery(){
        this.nav.push(DeliveryPage);
    }

    goToPurchase(){
        this.nav.push(PurchasePage);
    }

    goToRide() {
        this.nav.push(RidePage);
    }

}
