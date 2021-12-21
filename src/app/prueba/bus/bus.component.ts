import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss'],
})
export class BusComponent implements OnInit {

  asientos:AsientosI[] = [];
  num: number = null;
  libres = true;
  

  constructor() { }

  ngOnInit() {}

  crear(){
    console.log('num ->' , this.num);
    this.asientos = []
    for (let index = 0; index < this.num; index = index + 1) {
      const newAsiento: AsientosI = {
        nombre:'',
        estado: true
      }
      this.asientos.push (newAsiento)
    }
    console.log('asientos -> ', this.asientos);
  }

  asignar(asiento:AsientosI){
    asiento.estado = false;

  }

  showLibres(){
    this.libres = true;
  }

  showOcupados(){
    this.libres = false;
  }

}

interface AsientosI
{
  nombre: string;
  estado: boolean;
}