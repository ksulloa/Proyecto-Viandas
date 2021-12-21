import { PopoverController } from '@ionic/angular';

import { MenuComponent } from './../componentes/menu/menu.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {

  }

  async openMenu(ev: any) {
    console.log('abrir menu lateral');    
    const menu = await this.popoverController.create({
      component: MenuComponent,
      cssClass: 'my-custom-class',
      translucent: true,
      event: ev,
    });
    await menu.present();
  }


}
