import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

import { LocationPage } from '../../pages/location/location';
import { DeliveryService } from '../../pages/delivery/delivery.service';

@Component({
    selector: 'page-delivery',
    templateUrl: 'delivery.html',
    providers: [DeliveryService]
})
export class DeliveryPage {

    map: GoogleMap;
    deliveryForm: any;

    constructor(public nav: NavController, public formBuilder: FormBuilder, private deliveryService: DeliveryService) {
    	this.deliveryForm = formBuilder.group({
	        pickup: ['', Validators.compose([Validators.required])],
	        delivery: ['', Validators.compose([Validators.required])],
	        item: ['', Validators.compose([Validators.required])]
	    });
    }

    ionViewDidLoad() {
     this.loadMap();
    }

    loadMap() {

        let mapOptions: GoogleMapOptions = {
          camera: {
            target: {
              lat: 43.0741904,
              lng: -89.3809802
            },
            zoom: 18,
            tilt: 30
          }
        };

        this.map = GoogleMaps.create('map_canvas', mapOptions);

        // Wait the MAP_READY before using any methods.
        this.map.one(GoogleMapsEvent.MAP_READY)
          .then(() => {
            console.log('Map is ready!');

            // Now you can use all methods safely.
            this.map.addMarker({
                title: 'Ionic',
                icon: 'blue',
                animation: 'DROP',
                position: {
                  lat: 43.0741904,
                  lng: -89.3809802
                }
              })
              .then(marker => {
                marker.on(GoogleMapsEvent.MARKER_CLICK)
                  .subscribe(() => {
                    alert('clicked');
                  });
              });

          });
      }

    goToLocation(){
      this.nav.push(LocationPage);
    }
}
