import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-fiction',
  templateUrl: 'fiction.html',
})
export class FictionPage {

  constructor (private navCtrl: NavController){

  }

  goBackToHomePage(){
    this.navCtrl.popToRoot();
  }
 
}
