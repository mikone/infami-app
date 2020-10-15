import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

@Component({
  selector: 'app-segnala',
  templateUrl: './segnala.component.html',
  styleUrls: ['./segnala.component.scss'],
})
export class SegnalaComponent implements OnInit {

  model: any = {};

  constructor(private modalController: ModalController, public toastController: ToastController) { }

  ngOnInit() {}

  segnala() {
    this.share(this.model);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  async share(infoToShare) {

    let message = "👋 Ciao " + infoToShare.chi + ", sei stato segnalato alle 🚨 forze dell'ordine 🚨 dall'applicazione INFAMI, perchè " + infoToShare.cosa + " Corri stanno arrivando 🚔 🚔 🚔"

    await Share.share({
      title: 'Sei stato segnalato alle autorità',
      text: message,
      url: 'http://www.infami.app/',
      dialogTitle: 'Condividi con INFAMI'
    })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));

    // const sharePromise = navigator.share();
  }



  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Grazie per rendere il mondo un posto più sicuro. INFAME!',
      color: 'success',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

}
