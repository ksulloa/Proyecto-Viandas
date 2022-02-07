import { InteractionService } from './../../services/interaction.service';
import { AlertController, PopoverController } from '@ionic/angular';
import { FirestoreService } from './../../services/firestore.service';
import { Restaurantes, Categoria, Platillos } from './../../models/models.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss'],
})
export class MenuEditComponent implements OnInit {


  @Input() categoria: Categoria;
  @Input() restaurante: Restaurantes;

  constructor(private firestore: FirestoreService,
    private alertController: AlertController,
    private interactionService: InteractionService,
    private PopoverController: PopoverController
    
    ) { }

  ngOnInit() {}

  async editAtributo(name: string, restaurante: Restaurantes) {
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
            this.saveAtributo(name, ev[name], restaurante)
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
  
  async saveAtributo(name: string, input: any, restaurante: Restaurantes) {
    await this.interactionService.presentLoading('actualizando...')
    const path = 'categorias/' + this.categoria.cid + '/restaurante/' ; 
    const id = restaurante.restid;
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

