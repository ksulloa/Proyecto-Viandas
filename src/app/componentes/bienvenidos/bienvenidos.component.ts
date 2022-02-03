import { FirestoreService } from './../../services/firestore.service';
import { MenuComponent } from './../menu/menu.component';
import { PopoverController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.scss'],
})
export class BienvenidosComponent implements OnInit {

lista:string[];

  constructor(public popoverController: PopoverController,
             private firestore:FirestoreService,
             public alertController: AlertController) {
               this.inicializar();
             }  

  

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
  inicializar(){
    this.lista =[ 
     'comida rapida',
     'asados',
     'mariscos',
     'comida tradicional',
     'bares'

    ];
  }
  buscar(ev: any){
    this.inicializar();

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.lista = this.lista.filter((item)=>{
     
      return (item.toLowerCase().indexOf(val.toLowerCase()) >-1);
    });
  }
}

async presentAlert() {
  const alert = await this.alertController.create({
  cssClass: 'my-custom-class',
  header: 'Alert',
  subHeader: '',
  message: 'Parroquia rural de Cuenca es muy conocida por su gastronomía, siendo el plato más importante e interesante, el cuy. Este animal es un cobayo, tradicional de varios países de América del Sur. Este plato es preparado por familias.',
  buttons: ['OK']
  });
  alert.present();
  }
  
}
interface Bienvenidos{
imagen: string
}