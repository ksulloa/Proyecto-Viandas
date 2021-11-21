import { FirestoreService } from './../../services/firestore.service';
import { MenuComponent } from './../menu/menu.component';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.scss'],
})
export class BienvenidosComponent implements OnInit {


  constructor(public popoverController: PopoverController,
             private firestore:FirestoreService) {}  

  

  ngOnInit() {}

 async  openMenu(ev: any){
    console.log('abrir menu')
    const menu = await this.popoverController.create({
      component: MenuComponent,
      translucent: true,
      event: ev
    });
    await menu.present();

    const { role } = await menu.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  
}
interface Bienvenidos{
imagen: string
}