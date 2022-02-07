import { InteractionService } from './../../services/interaction.service';
import { AuthService } from './../../services/auth.service';
import { ModalController, PopoverController, AlertController } from '@ionic/angular';
import { FirestoreService } from './../../services/firestore.service';
import { Platillos, Categoria, Restaurantes } from './../../models/models.component';
import { Component, OnInit, Input } from '@angular/core';
import { MenuEditPlatoComponent } from '../menu-edit-plato/menu-edit-plato.component';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.scss'],
})
export class PlatosComponent implements OnInit {

  platillos : Platillos []=[]

  @Input() categoria: Categoria;
  @Input() restaurante: Restaurantes;
  @Input() platillo :Platillos

  admin=false;

  constructor(private firestore: FirestoreService,
    public modalController: ModalController,
    private alertController: AlertController,
    private interactionService: InteractionService,
    private auth: AuthService,
    private popoverController: PopoverController,) { 
      this.getUidAdmin(); 
    }

  ngOnInit() {
    this.getPlatillo()
  }

  getPlatillo(){
    console.log('Platillo registrados', this.platillos)
    const path = 'categorias/' + this.categoria.cid + '/restaurante/' + this.restaurante.restid + '/platos/'; 
  this.firestore.getCollection<Platillos>(path).subscribe(res =>{
    if(res){
      this.platillos = res;
    }
  })
 }

 cerrar(){
  this.modalController.dismiss()
    
}
async  openMenu(restaurante :Restaurantes, categoria: Categoria, platillo: Platillos){
  console.log('abrir menu')
  const menu = await this.popoverController.create({
    component: MenuEditPlatoComponent,
    translucent: true,
    componentProps: {restaurante, categoria, platillo}
  });
  await menu.present();

  const { role } = await menu.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
async eliminar(platillo: Platillos) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Eliminar ',

    buttons: [

      {
        text: 'Aceptar',
        handler: (ev) => {
          console.log('Confirm Ok -> ', ev);
          this.deleteDoc(platillo)
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }
    ]
  });

  await alert.present();
}
async deleteDoc(platillo: Platillos) {
  await this.interactionService.presentLoading('eliminando...')
  const path = 'categorias/' + this.categoria.cid + '/restaurante/' + this.restaurante.restid + '/platos/'; 
  const id = platillo.pid;
  this.firestore.DeleteDoc(path, id).then( () => {
        this.interactionService.presentToast('eliminado con éxito')
        this.interactionService.closeLoading();
  })
}
async editAtributo(name: string, platillo: Platillos) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Editar ' + name,
    inputs: [
      {
        name,
        type: 'text',
        placeholder: 'Ingresa tu ' + name 
      },
    ],
    buttons: [
      {
        text: 'Aceptar',
        handler: (ev) => {
          console.log('Confirm Ok -> ', ev);
          this.saveAtributo(name, ev[name], platillo)
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      } 
    ]
  });

  await alert.present();
}

async saveAtributo(name: string, input: any, platillo: Platillos) {
  await this.interactionService.presentLoading('actualizando...')
  const path = 'categorias/' + this.categoria.cid + '/restaurante/' + this.restaurante.restid + '/platos/'; 
  const id = platillo.pid;
  const updateDoc = {
 
  };
  updateDoc[name] = input;
  console.log(path, id, updateDoc);
  this.firestore.updateDoc(path, id, updateDoc).then( () => {
  this.interactionService.presentToast('actualizado con éxito')
  this.interactionService.closeLoading();
  })
}
getUidAdmin() {
  this.auth.stateAuth().subscribe( res => {
        if (res !== null) {
            if (res.uid === 'CFat4aSrjWPrJufqGoycmssR7i22')  {
                this.admin = true;
            } else {
               this.admin = false;
            }
        } else {
          this.admin = false;
        }
  });
}
  }


