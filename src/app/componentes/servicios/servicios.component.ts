import { PlatosComponent } from './../platos/platos.component';
import { InteractionService } from './../../services/interaction.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Restaurantes, Platillos } from './../../models/models.component';
import { FirestoreService } from './../../services/firestore.service';
import { Component, Input, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
 
  restaurantes: Restaurantes[] = []
  sumar = 0;
  promedio=0;
  
  @Input() platillo: Platillos;

  constructor() {
  }
  
  ngOnInit() {
      
}
}