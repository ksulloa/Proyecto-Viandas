import { ModalController } from '@ionic/angular';
import { FirestorageService } from './../../services/firestorage.service';
import { Router } from '@angular/router';
import { InteractionService } from './../../services/interaction.service';
import { FirestoreService } from './../../services/firestore.service';
import { AuthService } from './../../services/auth.service';
import { Platillos, Categoria, Restaurantes } from './../../models/models.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-platillos',
  templateUrl: './agregar-platillos.component.html',
  styleUrls: ['./agregar-platillos.component.scss'],
})
export class AgregarPlatillosComponent implements OnInit {

  platillo : Platillos ={
  pid:null,
  nombre: null,
  precio: null,
  foto:''
 }
 newImage ='';
 newFile='';

 @Input() categoria: Categoria;
 @Input() restaurante: Restaurantes;

constructor(private auth: AuthService,
   private firestore: FirestoreService,
   private interaction: InteractionService,
   private router: Router,
   public FirestorageService: FirestorageService,
   private modalController: ModalController) {   
 }

 ngOnInit() {
   console.log("se creo la vista", this.restaurante);
    
 }

 async agregarPlato() {
  this.interaction.presentLoading('agregando...')
    const path = 'categorias/' + this.categoria.cid + '/restaurante/' + this.restaurante.restid + '/platos/'; 
    const id = await this.firestore.getId();
    const data = this.platillo;
    this.platillo.pid = id;
    console.log(data, path, id)
    await this.firestore.createDoc(data, path, id)
    this.interaction.closeLoading();
    this.interaction.presentToast('agregado plato')
    this.cerrar();

}


 async newImageUpload(event: any){
  if(event.target.files && event.target.files[0]){
   this.newFile = event.target.files[0];
   const reader = new FileReader();
   reader.onload =((image) => {
   this.newImage = image.target.result as string;
  });
  reader.readAsDataURL(event.target.files[0]);
  } 
 const path = 'Platillos';
 const name = this.platillo.nombre;
 const file = event.target.files[0];
 const res= await this.FirestorageService.uploadImage(file, path, name)
 this.platillo.foto = res;
 
 
 }
 cerrar(){
  this.modalController.dismiss()
    
}
}
