import { FirestoreService } from './../../services/firestore.service';
import { Platillos, Categoria, Restaurantes } from './../../models/models.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.scss'],
})
export class PlatosComponent implements OnInit {

  platillos : Platillos []=[]

  @Input() categoria: Categoria;
  @Input() restaurante: Restaurantes;



  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
    this.getPlatillo()
  }

  getPlatillo(){
    console.log('Platillo registrados', this.platillos)
    const path = 'categorias/' + this.categoria.cid + '/restaurante/' + this.restaurante.restid + '/platos/'; 
  this.firestore.getCollection<Platillos>(path).subscribe(res =>{
    if(res){
      this.platillos = res;
    }
  })
 }
  }


