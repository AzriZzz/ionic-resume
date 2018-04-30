import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FictionPage } from '../fiction/fiction';

@Component({
  selector: 'page-experience',
  templateUrl: 'experience.html',
})
export class ExperiencePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToFiction(){
    this.navCtrl.push(FictionPage);
  }  

}
