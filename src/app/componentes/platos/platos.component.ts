import { FirestoreService } from './../../services/firestore.service';
import { Platillos } from './../../models/models.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.scss'],
})
export class PlatosComponent implements OnInit {

  platillos : Platillos []=[]



  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
    this.getPlatillo()
  }

  getPlatillo(){
    console.log('Platillo registrados', this.platillos)
  const path ='platillo/';
  this.firestore.getCollection<Platillos>(path).subscribe(res =>{
    if(res){
      this.platillos = res;
    }
  })
 }
  }


