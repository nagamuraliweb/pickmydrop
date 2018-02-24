import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationPage } from '../../pages/location/location';

@Component({
    selector: 'page-delivery',
    templateUrl: 'delivery.html'
})
export class DeliveryPage {

    constructor(public nav: NavController) {

    }

    goToLocation(){
      this.nav.push(LocationPage);
    }
}
