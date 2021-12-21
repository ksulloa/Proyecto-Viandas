import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domotica',
  templateUrl: './domotica.component.html',
  styleUrls: ['./domotica.component.scss'],
})
export class DomoticaComponent implements OnInit {

  focos: FocoI[]= [
    {
      nombre:'Comedor',
      estado: false,
      pin: 13 
    },
    {
      nombre:'Sala',
      estado: false,
      pin: 12
    },{
      nombre:'Cuarto Padres',
      estado: false,
      pin: 10
    },{
      nombre:'Cocina',
      estado: false,
      pin: 9 
    }
  ]
  
  constructor() { }

  ngOnInit() {}

  cambiarEstado(foco: FocoI){
    foco.estado = !foco.estado;
  }

}

  interface FocoI{
    nombre:string;
    estado: boolean;
    pin: number;
  }