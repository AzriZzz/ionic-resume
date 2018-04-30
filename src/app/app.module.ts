import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SkillsPage } from '../pages/skills/skills';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ExperiencePage } from '../pages/experience/experience';
import { FictionPage } from '../pages/fiction/fiction';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExperiencePage,
    SkillsPage,
    FictionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExperiencePage,
    SkillsPage,
    FictionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
