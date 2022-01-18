import { FirestorageService } from './../../services/firestorage.service';
import { Restaurantes } from './../../models/models.component';
import { Router } from '@angular/router';
import { InteractionService } from './../../services/interaction.service';
import { FirestoreService } from './../../services/firestore.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-local',
  templateUrl: './agregar-local.component.html',
  styleUrls: ['./agregar-local.component.scss'],
})
export class AgregarLocalComponent implements OnInit {

  restaurante: Restaurantes ={
    nombre: null,
    restid: null,
    descripcion: null,
    numero: null,
    ubicacion: null,
    foto: ' '
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

  async getRestaurant(){

    console.log('restaurante',this.restaurante);
     
   
      console.log('restaurante creado con exito');
      const path = 'Restaurante';
      const id = this.firestore.getId() ;
      this.restaurante.restid = id;
      await this.firestore.createRes(this.restaurante, path, id)
      this.interaction.closeLoading();
      this.interaction.presentToast('Registrado el restaurante con exito')
     
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
  const path = 'Restaurantes';
  const name = this.restaurante.nombre;
  const file = event.target.files[0];
  const res= await this.FirestorageService.uploadImage(file, path, name)
  this.restaurante.foto = res;
  
  
  }

  }
