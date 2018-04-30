import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FictionPage } from './fiction';

@NgModule({
  declarations: [
    FictionPage,
  ],
  imports: [
    IonicPageModule.forChild(FictionPage),
  ],
})
export class FictionPageModule {}
