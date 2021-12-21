import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss'],
})
export class NotasComponent implements OnInit {

  calificaciones: number;
  nota = 0;
  contador= 0;
  promedio= 0



  constructor() { }

  

  ingresarN(){ 

    this.nota = this.nota + this.calificaciones;
    this.contador = this.contador + 1;
    this.promedio = this.nota /this.contador;
    console.log('ingresando notas ->', this.nota)
      
  }
  ngOnInit() {}

  }









