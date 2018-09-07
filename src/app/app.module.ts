import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {HemerotecaPage} from '../pages/hemeroteca/hemeroteca';
import {CienciasPage} from '../pages/ciencias/ciencias';
import {HumanidadesPage} from '../pages/humanidades/humanidades';
import {SistemasPage} from '../pages/sistemas/sistemas';
import {ListperPage} from '../pages/listper/listper';
import {VerperfilPage} from '../pages/verperfil/verperfil';
import {SifuncionaPage} from '../pages/sifunciona/sifunciona';
import {SeparadoPage} from '../pages/separado/separado';
import {ObjectPage} from '../pages/object/object';
import {RegperPage} from '../pages/regper/regper';
import {BusperPage} from '../pages/busper/busper';
import {PerperPage} from '../pages/perper/perper';
import {ActuperPage} from '../pages/actuper/actuper';
import {Camera} from '@ionic-native/camera';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';

import {HttpClientModule} from '@angular/common/http';


import {ConectarProvider} from '../providers/conectar/conectar';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        HemerotecaPage,
        CienciasPage,
        HumanidadesPage,
        SistemasPage,
        ListperPage,
        VerperfilPage,
        SifuncionaPage,
        SeparadoPage,
        ObjectPage,
        RegperPage,
        BusperPage,
        PerperPage,
        ActuperPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        HemerotecaPage,
        CienciasPage,
        HumanidadesPage,
        SistemasPage,
        ListperPage,
        VerperfilPage,
        SifuncionaPage,
        SeparadoPage,
        ObjectPage,
        RegperPage,
        BusperPage,
        PerperPage,
        ActuperPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarProvider,
        Camera,
        FileTransfer,
//        FileUploadOptions,
        FileTransferObject,
        File
    ]
})
export class AppModule {}
