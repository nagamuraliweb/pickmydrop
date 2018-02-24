import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationPage } from '../../pages/location/location';

@Component({
    selector: 'page-ride',
    templateUrl: 'ride.html'
})
export class RidePage {

    constructor(public nav: NavController) {

    }

    goToLocation(){
      this.nav.push(LocationPage);
    }
}
