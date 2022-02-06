import { AgregarPlatillosComponent } from './../agregar-platillos/agregar-platillos.component';
import { ModalController } from '@ionic/angular';
import { FirestorageService } from './../../services/firestorage.service';
import { Restaurantes, Categoria } from './../../models/models.component';
import { Router } from '@angular/router';
import { InteractionService } from './../../services/interaction.service';
import { FirestoreService } from './../../services/firestore.service';
import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

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
    direccion:null,
    numero: null,
    ubicacion: null,
    foto: ' '
  }
  newImage ='';
  newFile='';

  @Input() categoria: Categoria
  @Input() restaurantes: Restaurantes

constructor(private auth: AuthService,
    private firestore: FirestoreService,
    private interaction: InteractionService,
    private router: Router,
    public FirestorageService: FirestorageService,
    public modalController: ModalController) {  
  }
  ngOnInit() {
    console.log("se creo la vista", this.categoria);  
  }

  async agregarRestaurante() {
    this.interaction.presentLoading('agregando...')
      const path = 'categorias/' + this.categoria.cid + '/restaurante/' ; 
      const id = await this.firestore.getId();
      const data = this.restaurante;
      this.restaurante.restid = id;
      console.log(data, path, id)
      await this.firestore.createDoc(data, path, id)
      this.interaction.closeLoading();
      this.interaction.presentToast('agregado a la categoria')
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
   const path = 'categorias/' + this.categoria.cid + '/restaurante';
  const name = this.restaurante.nombre;
  const file = event.target.files[0];
  const res= await this.FirestorageService.uploadImage(file, path, name)
  this.restaurante.foto = res;
    
  }
  

  cerrar(){
    this.modalController.dismiss()
      
  }

  }
