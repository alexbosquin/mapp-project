import { Component } from '@angular/core';

/**
 * Generated class for the LocationSetterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'location-setter',
  templateUrl: 'location-setter.html'
})
export class LocationSetterComponent {

  text: string;

  constructor() {
    console.log('Hello LocationSetterComponent Component');
    this.text = 'Hello World';
  }

}
