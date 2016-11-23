import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { CustomAlertPage } from '../custom-alert/custom-alert';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}
    
    
    openAlertModal(){
        let modal = this.modalCtrl.create(CustomAlertPage);
        modal.present();
        
    }

}
