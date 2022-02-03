import { FirestorageService } from './../../services/firestorage.service';
import { Router } from '@angular/router';
import { InteractionService } from './../../services/interaction.service';
import { FirestoreService } from './../../services/firestore.service';
import { AuthService } from './../../services/auth.service';
import { Platillos } from './../../models/models.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-platillos',
  templateUrl: './agregar-platillos.component.html',
  styleUrls: ['./agregar-platillos.component.scss'],
})
export class AgregarPlatillosComponent implements OnInit {

  platillo : Platillos ={
    restid:null,
   nombre: null,
   descripcion: null,
   precio: null,
   foto:''
 }
 newImage ='';
 newFile='';

constructor(private auth: AuthService,
   private firestore: FirestoreService,
   private interaction: InteractionService,
   private router: Router,
   public FirestorageService: FirestorageService) { 
    
 }

 ngOnInit() {
   console.log("se creo la vista");
   
 }

 async getPlatillo(){

   console.log('platillo',this.platillo);
    
  
     console.log('platillo creado con exito');
     const path = 'platillo';
     const id = this.firestore.getId() ;
     this.platillo.restid = id;
     await this.firestore.createRes(this.platillo, path, id)
     this.interaction.presentToast('Registrado el platillo con exito')
     this.router.navigate(['/platos'])
    
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

}
