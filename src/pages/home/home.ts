import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HemerotecaPage} from '../hemeroteca/hemeroteca';
import {CienciasPage} from '../ciencias/ciencias';
import {HumanidadesPage} from '../humanidades/humanidades';
import {SistemasPage} from '../sistemas/sistemas';
import {ListperPage} from '../listper/listper';
import {SifuncionaPage} from '../sifunciona/sifunciona';
import {RegperPage} from '../regper/regper';
import {BusperPage} from '../busper/busper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

irhemeroteca(){
    this.navCtrl.push(HemerotecaPage);
}
irciencias(){
    this.navCtrl.push(CienciasPage);
}

irhumanidades(){
    this.navCtrl.push(HumanidadesPage);
}

irsistemas(){
    this.navCtrl.push(SistemasPage);
}

IrListaPer(){
    this.navCtrl.push(ListperPage);
}

IrSiFunciona(){
    this.navCtrl.push(SifuncionaPage);
}

RegPersona(){
    this.navCtrl.push(RegperPage);
}

irBusPer(){
    this.navCtrl.push(BusperPage);
}

}
