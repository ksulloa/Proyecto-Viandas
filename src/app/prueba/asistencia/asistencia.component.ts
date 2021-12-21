import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
})
export class AsistenciaComponent implements OnInit {

  estudiantes:AsistenciaI[] = [];
  nombre: string = '';

  constructor() { }

  ngOnInit() {}

  registrar(){
    const nuevo: AsistenciaI = {
      nombre: this.nombre,
      time: new Date()
    };
    this.estudiantes.push(nuevo)
    this.nombre = '';
  }

  remove(index: number){
    this.estudiantes.splice(index);

  }


}

interface AsistenciaI{
  nombre: string;
  time: Date;
}
