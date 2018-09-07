import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the ActuperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-actuper',
    templateUrl: 'actuper.html',
})
export class ActuperPage {

    persona;
    miventana: any;
    RegPersona: FormGroup;


    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private CosValFor: FormBuilder,
        private VentanaEspera: LoadingController,
        private conecta: ConectarProvider,
        private alertCtrl: AlertController) {
        this.persona = this.navParams.get("per");
        this.iniciarFormulario();

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ActuperPage');
    }


    iniciarFormulario() {
        this.RegPersona = this.CosValFor.group({
            fecNac: [this.persona.fecnac, [Validators.required]],
            tipo: [this.persona.tipo, [Validators.required]],
            numero: [this.persona.cc, [Validators.required, Validators.pattern(/^[0-9]{5,20}$/)]],
            nombre: [this.persona.nombre, [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ ÜñÑ]{2,30}$/)]],
            apellido: [this.persona.apellido, [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ ÜñÑ]{2,30}$/)]],
            tele: [this.persona.telefono, [Validators.required, Validators.pattern(/^[+0-9]{7,15}$/)]],
            email: [this.persona.email, [Validators.required, Validators.email, Validators.maxLength(30)]]
        });
    }

    regper() {
        this.miventana = this.VentanaEspera.create({
            content: "Un momento...<br>Se esta procesando su solicitud"
        });
        this.miventana.present();
        
        this.RegPersona.value.id = this.persona.id;
        let estado = this.conecta.servidorActualizar(this.RegPersona.value);
        console.table(this.RegPersona.value);
        estado.subscribe(data => {
            let res: any = data;
            this.miventana.dismiss();
            if (res.success == "ok") {
                this.presentAlert("Positivo", "El usuario fue registrado perfectamente.")
                this.iniciarFormulario();
            } else {
                this.presentAlert("Error #7", "En el sistema la CC ya esta registrada.");

            }
        }, err => {
            this.miventana.dismiss();
            console.log(err);
            this.presentAlert("Error #6", "No existe conexión con el servidor.");
        });
    }

    presentAlert(estTitu, estMensaje) {
        let alert = this.alertCtrl.create({
            title: estTitu,
            subTitle: estMensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    }

    actualizarPer() {
        const loader = this.VentanaEspera.create({
            content: "Un momento por favor.... Se esta procesando su solicitud"
        });
        loader.present();
        let perLocal = this.RegPersona.value;
        perLocal.id = this.persona.id;
        let estado = this.conecta.servidorActualizar(perLocal);

        estado.subscribe(data => {
            loader.dismiss();
            let respuesta: any = data;
            if (respuesta.success == "ok") {
                this.showAlert("Informe", "Se actualizo el registro con éxito");
            } else {
                this.showAlert("Informe", "No se actualizo el registro");
            }

        }, err => {
            loader.dismiss();
            this.showAlert("Error #8", "No hay conexión con el servidor");
            console.log(err);
        });
    }

    showAlert(titulo, mensaje) {
        const alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    }
}
