import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { OtpPage } from '../pages/otp/otp';
import { LoginPage } from '../pages/login/login';
import { PurchasePage } from '../pages/purchase/purchase';
import { DeliveryPage } from '../pages/delivery/delivery';
import { RidePage } from '../pages/ride/ride';
import { ServicesPage } from '../pages/services/services';
import { LocationPage } from '../pages/location/location';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignUpService } from '../pages/signup/signup.service';
import { LoginService } from '../pages/login/login.service';
import { DeliveryService } from '../pages/delivery/delivery.service';
import { RideService } from '../pages/ride/ride.service';
import { PurchaseService } from '../pages/purchase/purchase.service';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    HomePage,
    SignupPage,
    OtpPage,
    LoginPage,
    PurchasePage,
    DeliveryPage,
    RidePage,
    ServicesPage,
    LocationPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    HomePage,
    SignupPage,
    OtpPage,
    LoginPage,
    PurchasePage,
    DeliveryPage,
    RidePage,
    ServicesPage,
    LocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SignUpService,
    LoginService,
    DeliveryService,
    RideService,
    PurchaseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
