import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ObjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-object',
  templateUrl: 'object.html',
})
export class ObjectPage {
todo:any;
resultado:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.todo = this.navParams.get("todo");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObjectPage');
      this.resultado = parseFloat(this.todo.va1) + parseFloat(this.todo.va2);
  }

}
