import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HemerotecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-hemeroteca',
    templateUrl: 'hemeroteca.html',
})
export class HemerotecaPage {
    numero1;
    numero2;
    numero3;
    resultado;
    edificio;
    Estado;
    Ctrl=true;


    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HemerotecaPage');
    }

    Suma() {
        this.resultado = "la suma de " + this.numero1 + " + " + this.numero2 + " = " + (parseFloat(this.numero1) + parseFloat(this.numero2));
    }

    Resta() {
        this.resultado = "la resta de " + this.numero1 + " - " + this.numero2 + " = " + (parseFloat(this.numero1) - parseFloat(this.numero2));
    }
    Multi() {
        this.resultado = "la multiplicación de " + this.numero1 + " * " + this.numero2 + " = " + (parseFloat(this.numero1) * parseFloat(this.numero2));
    }
    Divi() {
        this.resultado = "la división de " + this.numero1 + " / " + this.numero2 + " = " + (parseFloat(this.numero1) / parseFloat(this.numero2));
    }


    tabla() {
        this.Estado = true;
        this.edificio = Array();
        for (let i = 1; i < this.numero2; i++) {
            if (((this.numero1 * i) % this.numero3 == 0) == this.Ctrl) {
                this.edificio.push({num: this.numero1, ind: i, res: (this.numero1 * i)});
            }
        }
    }

    Cambio(valor) {
        
        this.Ctrl=valor;
        this.tabla();
    }

}