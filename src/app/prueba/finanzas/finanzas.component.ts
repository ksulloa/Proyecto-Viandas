import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.scss'],
})
export class FinanzasComponent implements OnInit {

  ingreso:number=null;
  gasto:number=null;
  sumingresos:number=null;
  sumgastos:number=null;
  respuesta:number=null;
  

  constructor() { }

  ngOnInit() {}

 ingresoD(){ 
   this.sumingresos =this.sumingresos + this.ingreso
   this.respuesta = this.sumingresos - this.sumgastos
   this.ingreso= null;
   console.log("ingreso", this.respuesta);


}

gastoD(){
this.sumgastos = this.sumgastos + this.gasto
this.respuesta = this.sumingresos - this.sumgastos

this.gasto= null;
console.log("gasto", this.respuesta);



}



}
