import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationPage } from '../../pages/location/location';

@Component({
    selector: 'page-purchase',
    templateUrl: 'purchase.html'
})
export class PurchasePage {

    constructor(public nav: NavController) {

    }

    goToLocation(){
        this.nav.push(LocationPage);
    }

}
