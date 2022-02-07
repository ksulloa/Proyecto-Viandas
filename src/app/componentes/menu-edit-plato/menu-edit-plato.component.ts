import { InteractionService } from './../../services/interaction.service';
import { ModalController, AlertController, PopoverController } from '@ionic/angular';
import { FirestoreService } from './../../services/firestore.service';
import { Restaurantes, Platillos, Categoria } from './../../models/models.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-edit-plato',
  templateUrl: './menu-edit-plato.component.html',
  styleUrls: ['./menu-edit-plato.component.scss'],
})
export class MenuEditPlatoComponent implements OnInit {

  @Input() platillo: Platillos;
  @Input() categoria: Categoria;
  @Input() restaurante: Restaurantes;

  constructor(private firestore: FirestoreService,
    public modalController: ModalController,
    private alertController: AlertController,
    private interactionService: InteractionService,
    private PopoverController: PopoverController,) { }

  ngOnInit() {}


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
    this.cerrar();
    })
  }
  cerrar(){
    this.PopoverController.dismiss()  
  }
}