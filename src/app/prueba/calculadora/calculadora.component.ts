import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {

  numero1: number = null;
  numero2: number = null;

  tipoOperacion: 'suma' | 'resta' | 'multiplicacion' | 'division' = 'suma';
  respuesta: number = null;

  constructor() { }

  ngOnInit() {}
 
  calcular(){
    
    console.log(this.numero1, this.numero2);

    if (this.tipoOperacion == 'suma') {
      this.respuesta = this.numero1 + this.numero2;      
    }
    if (this.tipoOperacion == 'resta') {
      this.respuesta = this.numero1 - this.numero2 
    }
    if (this.tipoOperacion == 'multiplicacion') {
      this.respuesta = this.numero1 * this.numero2 
    }
    if (this.tipoOperacion == 'division') {
      this.respuesta = this.numero1 / this.numero2 
    }
  }

  cambio(operacion: any){
    this.tipoOperacion = operacion.detail.value;
    console.log('hola cambie operacion ->', this.tipoOperacion);
  }

}
