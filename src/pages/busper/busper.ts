import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {PerperPage} from '../perper/perper';


/**
 * Generated class for the BusperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-busper',
    templateUrl: 'busper.html',
})
export class BusperPage {

    item = 1;
    criterio = "";
    edificio;

    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private conecta: ConectarProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BusperPage');
    }

    presentToast(Mensaje) {
        const toast = this.toastCtrl.create({
            message: Mensaje,
            position: 'middle',
            showCloseButton: true,
            closeButtonText: 'OK',
            duration: 2000
        });
        toast.present();
    }

    buscar() {
        if (this.item != 1 && this.criterio == "") {
            this.presentToast("El criterio no puede estar solo");
        }
        else {
            let busqueda = {item: this.item, criterio: this.criterio};
            let estado = this.conecta.servidorBuscar(busqueda);
            console.table(busqueda);
            estado.subscribe(data => {
                console.log(data);
                this.cargarVista(data);
            }, err => {
                console.log(err);
            });
        }
    }
    verifique() {
        this.criterio = '';
        this.presentToast("Cambio el criterio de busqueda.!!");
    }

 cargarVista(data) {
        this.edificio = data.result;
    }

    verPerfil(persona) {
        this.navCtrl.push(PerperPage, {per: persona});
    }

}
