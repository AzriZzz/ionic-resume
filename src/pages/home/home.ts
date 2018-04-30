import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExperiencePage } from '../experience/experience';
import { SkillsPage } from '../skills/skills';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToExperience() {
    this.navCtrl.push(ExperiencePage);
  }

  onGoToSkills() {
    this.navCtrl.push(SkillsPage);
  }

}
