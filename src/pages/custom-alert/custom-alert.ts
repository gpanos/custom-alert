import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'page-custom-alert',
    templateUrl: 'custom-alert.html'
})
export class CustomAlertPage {
    /*
     * * * * * * * * * * * * *
     * YOUR ATTENTION PLEASE *
     * * * * * * * * * * * * *
     *
     * Change the image url and button color  
     * to fit your needs.
     * The button color should be a valid ionic button
     * color eg. light, secondary, danger, dark etc 
     * 
     */
    public imageURL = 'assets/img/placeholder.png';
    public buttonColor = 'default';
    
    public imageHeight;
    public contentsHeight;
    constructor(public viewCtrl: ViewController) {}
  
  
    dismiss(){
        this.viewCtrl.dismiss();
    }

    ionViewDidLoad() {
        let imageWidth = document.getElementById("mainImageContainer").offsetWidth;
        let buttonHeight = document.getElementById("closeAlert").offsetHeight;
        this.imageHeight = imageWidth;
        this.contentsHeight = this.imageHeight + buttonHeight;
    }

}
