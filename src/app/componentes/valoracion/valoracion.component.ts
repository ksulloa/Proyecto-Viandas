import { AuthService } from 'src/app/services/auth.service';
import { PlatosComponent } from './../platos/platos.component';
import { InteractionService } from './../../services/interaction.service';
import { AlertController, ModalController } from '@ionic/angular';
import { FirestoreService } from './../../services/firestore.service';
import { Restaurantes, Platillos, Valoracion } from './../../models/models.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.scss'],
})
export class ValoracionComponent implements OnInit {


  restaurantes: Restaurantes[] = []
  
  calificacion= 0

  estrellas: Valoracion[]=[]
  
  @Input() platillo: Platillos;

  calificacionE = {
    estrella1: false,
    estrella2: false,
    estrella3: false,
    estrella4: false,
    estrella5: false,
  }
admin=false;

  constructor(private firestore: FirestoreService,
    private alertController: AlertController,
    private interactionService: InteractionService,
    public modalController: ModalController,
    private auth: AuthService) {
 this.getUidAdmin();
  }
  
  ngOnInit() {
    console.log("se creo la vista");
    this.suma()
    this.getRestaurantes()
    
  }

 getRestaurantes(){

  console.log('Restaurantes registrados', this.restaurantes)
  const path ='Restaurante/';
  this.firestore.getCollection<Restaurantes>(path).subscribe(res =>{
    if(res){
      this.restaurantes = res;
      this.restaurantes.forEach( restaurante =>{
            this.getValoracion(restaurante)
      })
    }
  })
 }

  suma() {
    console.log('estoy sumando');
    
  }

    getValoracion(resta: Restaurantes){

       console.log(this.calificacionE);
       if (this.calificacionE.estrella1) {
         console.log('1 ESTRELLA')   
         this.calificacion = 1;
       }
       if (this.calificacionE.estrella2) {
        console.log('2 ESTRELLA')  
        this.calificacion = 2; 
      }
      if (this.calificacionE.estrella3) {
        console.log('3 ESTRELLA')  
                 this.calificacion = 3; 
      }
      if (this.calificacionE.estrella4) {
        console.log('4 ESTRELLA')   
                 this.calificacion = 4;
      }
      if (this.calificacionE.estrella5) {
        console.log('5 ESTRELLA')  
                 this.calificacion = 5; 
      }
      console.log("la calificacion es ->", this.calificacion);
      this.calificacionE = {
        estrella1: false,
        estrella2: false,
        estrella3: false,
        estrella4: false,
        estrella5: false,
      }
      
       return;
       
      
        const path = 'Restaurante/' + resta.restid + '/valoracion' 
        this.firestore.getCollection<any>(path).subscribe(res =>{
        
          if(res){
            this.estrellas = res
            for(let valores of res){
              this.calificacion = valores + this.calificacion 
              console.log(this.calificacion);
              
            }
              
            
            
            console.log('la valoracion es:', res, resta.nombre);
            resta.numValoraciones = res.length
           
          } 
          else {
            resta.numValoraciones = 0
            resta.valoracion = 0
          }

        })
    }

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
      const path = 'Restaurante';
      const id = restaurante.restid;
      const updateDoc = {
     
      };
      updateDoc[name] = input;
      console.log(path, id, updateDoc);
      this.firestore.updateDoc(path, id, updateDoc).then( () => {
      this.interactionService.presentToast('actualizado con éxito')
      this.interactionService.closeLoading();
      })
    }
    
    async eliminar(restaurante: Restaurantes) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Eliminar ',
    
        buttons: [
    
          {
            text: 'Aceptar',
            handler: (ev) => {
              console.log('Confirm Ok -> ', ev);
              this.deleteDoc(restaurante)
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
    async deleteDoc(restaurante: Restaurantes) {
      await this.interactionService.presentLoading('eliminando...')
      const path = 'Restaurante';
      const id = restaurante.restid;
      this.firestore.DeleteDoc(path, id).then( () => {
            this.interactionService.presentToast('eliminado con éxito')
            this.interactionService.closeLoading();
      })
    }
    async verPlatos() {
      const modal = await this.modalController.create({
        component: PlatosComponent,
        componentProps: {platillo: this.platillo},
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
}