import { Platillos } from './../../models/models.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-platillos',
  templateUrl: './agregar-platillos.component.html',
  styleUrls: ['./agregar-platillos.component.scss'],
})
export class AgregarPlatillosComponent implements OnInit {

  platillo : Platillos ={
   nombre: null,
   descripcion: null,
   precio: null,
   foto:''
 }

  constructor() { }

  ngOnInit() {
    console.log("se creo la vista");
  }

  getPlatillo(){
   

  }
}
