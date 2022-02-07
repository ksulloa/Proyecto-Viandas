import { Categoria } from './../../models/models.component';
import { ModalController } from '@ionic/angular';
import { FirestorageService } from './../../services/firestorage.service';
import { Router } from '@angular/router';
import { InteractionService } from './../../services/interaction.service';
import { FirestoreService } from './../../services/firestore.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.scss'],
})
export class AgregarCategoriaComponent implements OnInit {

  categorias : Categoria ={
    cid:null,
    nombre: null,
    img:null,
   }
   newImage ='';
   newFile='';
  
 
   
  
  constructor(private auth: AuthService,
     private firestore: FirestoreService,
     private interaction: InteractionService,
     private router: Router,
     public FirestorageService: FirestorageService,
     private modalController: ModalController) {   
   }
  
   ngOnInit() {
     console.log("se creo la vista", this.categorias);
      
   }
  
   async agregarCategoria() {
    this.interaction.presentLoading('agregando...')
      const path = 'categorias/'; 
      const id = await this.firestore.getId();
      const data = this.categorias;
      this.categorias.cid = id;
      console.log(data, path, id)
      await this.firestore.createDoc(data, path, id)
      this.interaction.closeLoading();
      this.interaction.presentToast('agregado categoria')
  
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
   const path = 'categorias';
   const name = this.categorias.nombre;
   const file = event.target.files[0];
   const res= await this.FirestorageService.uploadImage(file, path, name)
   this.categorias.img = res;
   
   
   }
  
  }
  