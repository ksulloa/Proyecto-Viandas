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
    foto: null
  }
  
constructor(private auth: AuthService,
    private firestore: FirestoreService,
    private interaction: InteractionService,
    private router: Router) { 
     
  }

  ngOnInit() {
    console.log("se creo la vista");
    
  }

  async getRestaurant(){

    this.interaction.presentLoading('agregando')


    console.log('restaurante',this.restaurante);
     
   
      console.log('restaurante creado con exito');
      const path = 'Restaurante';
      const id = this.firestore.getId() ;
      this.restaurante.restid = id;
      await this.firestore.createRes(this.restaurante, path, id)
      this.interaction.closeLoading();
      this.interaction.presentToast('Registrado el restaurante con exito')
     
  }

  }
