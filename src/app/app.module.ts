import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CustomAlertPage } from '../pages/custom-alert/custom-alert';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CustomAlertPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CustomAlertPage
  ],
  providers: []
})
export class AppModule {}
