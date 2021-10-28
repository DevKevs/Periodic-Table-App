import { Component, OnInit } from '@angular/core';
import elementos from 'src/assets/json/elementos.json';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.page.html',
  styleUrls: ['./elementos.page.scss'],
})
export class ElementosPage implements OnInit {
  elemen: any = elementos;
  color = 'cpk-hex';
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async modal(obj: any){
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        element: obj,
      }
    });
    return await modal.present();
  }
}
