import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SeparadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-separado',
    templateUrl: 'separado.html',
})
export class SeparadoPage {

    n1: number;
    n2: number;
    resultado1: number;
    resultado2: number;
    resultado3: number;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.n1 = parseFloat(this.navParams.get("numero1"));
        this.n2 = parseFloat(this.navParams.get("numero2"));
        this.resultado1 = this.n1 + this.n2;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SeparadoPage');
        this.resultado2 = this.n1 + this.n2;
    }

    suma() {
        this.resultado3 = (this.n1 + this.n2);
    }

}
