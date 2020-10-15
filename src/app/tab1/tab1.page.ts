import { Component } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { SegnalaComponent } from '../components/segnala/segnala.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController: ModalController, private routerOutlet: IonRouterOutlet) {}


  info () 
  {
    console.log("info");
  }

  segnala ()
  {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SegnalaComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.parentOutlet.nativeEl
    });
    return await modal.present();
  }


}
