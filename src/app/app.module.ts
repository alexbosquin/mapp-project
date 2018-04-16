import { GoogleMapComponent } from './../components/google-map/google-map';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ActionSheetController, PopoverController, ModalController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {config} from '../firestore/config';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
export const fireConfig = config.firebaseConfig;

import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { LocationSetterComponent } from '../components/location-setter/location-setter';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GoogleMapComponent,
    LocationSetterComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    AlertController,
    ActionSheetController,
    PopoverController,
    ModalController
    
  ]
})
export class AppModule {

}
