import { AuthService } from './../../services/auth.service';
import { VerRestaurantesComponent } from './../ver-restaurantes/ver-restaurantes.component';
import { ValoracionComponent } from './../valoracion/valoracion.component';
import { AgregarLocalComponent } from './../agregar-local/agregar-local.component';
import { FirestorageService } from './../../services/firestorage.service';
import { PlatosComponent } from './../platos/platos.component';
import { InteractionService } from './../../services/interaction.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Restaurantes, Platillos, Categoria } from './../../models/models.component';
import { FirestoreService } from './../../services/firestore.service';
import { Component, Input, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
 
  categorias: Categoria[] = []
  
  @Input() categoria: Categoria

  admin=false;

  constructor(public firestore: FirestoreService,
    public modalController: ModalController,
    private  auth :AuthService,
    private interactionService: InteractionService,
    private alertController: AlertController,) {
      this.getUidAdmin();
  }
  
  ngOnInit() {
    this.getCategoria();
  }

getCategoria(){
  const path='categorias/'
  this.firestore.getCollection<Categoria>(path).subscribe(res =>{
    if(res){
      this.categorias = res;

    }
  })
}
async addRestaurantes(categoria: Categoria){
  const modal = await this.modalController.create({
    component: AgregarLocalComponent,
    componentProps: {categoria},
    mode: 'ios',
    swipeToClose: true
  });
  return await modal.present();
}
async verRestaurantes(categoria: Categoria){
  const modal = await this.modalController.create({
    component: VerRestaurantesComponent,
    componentProps: {categoria},
    mode: 'ios',
    swipeToClose: true
  });
  return await modal.present();
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
async eliminar(categoria: Categoria) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Eliminar ',

    buttons: [

      {
        text: 'Aceptar',
        handler: (ev) => {
          console.log('Confirm Ok -> ', ev);
          this.deleteDoc(categoria)
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
async deleteDoc(categoria:Categoria) {
  await this.interactionService.presentLoading('eliminando...')
  const path = 'categorias/';
  const id = categoria.cid;
  this.firestore.DeleteDoc(path, id).then( () => {
        this.interactionService.presentToast('eliminado con éxito')
        this.interactionService.closeLoading();
  })
}
}