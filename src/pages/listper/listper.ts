import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {VerperfilPage} from '../verperfil/verperfil';


/**
 * Generated class for the ListperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-listper',
    templateUrl: 'listper.html',
})
export class ListperPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private acceso: ConectarProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListperPage');
    }
    numero;
    edificio;


    consultar() {
        let estado = this.acceso.traerListPer(this.numero);
        estado.subscribe(data => {
            this.ejecutar(data);
            console.log(data);
        }, err => {
            console.log(err);
        });

    }
    ejecutar(laRespuestaDelServidor) {
        this.edificio = laRespuestaDelServidor.results;
    }

    IrVerPerfil(persona) {
        this.navCtrl.push(VerperfilPage, {Data: persona});
    }

}
