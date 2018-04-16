import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform, AlertController } from 'ionic-angular';
declare var google:any;

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})

export class GoogleMapComponent implements OnInit {

  @ViewChild("map") mapRef: ElementRef;
  private map: any;

  constructor(private geolocation:Geolocation,
  private platform:Platform, private alertCtrl:AlertController) {
  }


  ngOnInit(): void {
    this.initMap();

    // this.platform.ready().then(()=>{
    //   this.getLocation();
      
    // })
  }


  getLocation()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords);
      this.setCenter(resp.coords.latitude, resp.coords.longitude);
      this.showAlert('gotcha your location');
      
     }).catch((error) => {
       console.log('Error getting location', error);
       this.showAlert('error'+error.message);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }

  initMap() {
    const coords = new google.maps.LatLng(-18,-46);
    const mapOptions = {
      center: coords,
      zoom: 14,
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, mapOptions);

    const pos = {
      lat: -18,
      lng: -46
    }
    // this.addMarker(pos);

  }

  addMarker(position)
  {
    const m = this.map;
    return new google.maps.Marker({
      position,
      m
    });
  }

  setCenter(lat, lng)
  {
    this.map.setCenter(new google.maps.LatLng(lat, lng));

        var geocoder = new google.maps.Geocoder();
        var geolocate = new google.maps.LatLng(lat,lng);

        geocoder.geocode({'latLng': geolocate}, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            var result;
            if (results.length > 1) {
              result = results[1];
            } else {
              result = results[0];
            }
            //console.log(result);

            this.showAlert(result.place_id + ', ' + result.address_components[3].short_name);
           }
          });
           
  }
    
  

  showAlert(msg) {
    if (msg == null)
    {
      msg = "No Body defined";
    }
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
}
