import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HemerotecaPage} from '../hemeroteca/hemeroteca';
import {CienciasPage} from '../ciencias/ciencias';
import {HumanidadesPage} from '../humanidades/humanidades';
import {SistemasPage} from '../sistemas/sistemas';
import {ListperPage} from '../listper/listper';

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

}
