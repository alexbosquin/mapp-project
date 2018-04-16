import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UserMenuPage } from '../user-menu/user-menu';
import { Mesa } from '../../../models/Mesa';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  constructor(public navCtrl: NavController, public modalCtrl:ModalController, public fire:AngularFirestore) {
    this.listarTodasAsMesas();
  }

  presentModal() {
    let modal = this.modalCtrl.create("UserMenuPage");
    modal.present();
  }

  adicionarMesa() {

  }

  mesasCollection:AngularFirestoreCollection<Mesa>
  mesas:Observable<Mesa[]>
  listaMesa:Array<Mesa>
  async listarTodasAsMesas() {
    this.mesasCollection = this.fire.collection("mesas");
    this.mesas = this.mesasCollection.valueChanges();
    this.mesas.subscribe(data => {
      this.listaMesa = data
      data[0].titulo = "Titulo Novo";
      console.log(this.listaMesa[0]);
      
      
    });
  }

}


