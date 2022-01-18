import { Restaurantes } from './../../models/models.component';
import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';
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
  
  constructor(private firestore: FirestoreService) {
  }
  
  ngOnInit() {
    console.log("se creo la vista");
    this.suma()
    this.getRestaurantes()
    
  }

 getRestaurantes(){

  console.log('Restaurantes registrados', this.restaurantes)
  const path ='Restaurante/';
  this.firestore.getCollection<Restaurantes>(path).subscribe(res =>{
    if(res){
      this.restaurantes = res;
      this.restaurantes.forEach( restaurante =>{
            this.getValoracion(restaurante)
      })
    }
  })
 }

  suma() {
    console.log('estoy sumando');
    
  }


    getValoracion(resta: Restaurantes){
      
        const path = 'Restaurante/' + resta.restid + '/valoracion'
        this.firestore.getCollection<any>(path).subscribe(res =>{
        
          if(res){
            res.forEach( calificacion => {
              calificacion.value  
              console.log(calificacion.value);
              this.sumar = calificacion.value + res.length
              
            })
            this.promedio = this.sumar/ res.length
            console.log('la valoracion es:', res, resta.nombre);
            resta.numValoraciones = res.length
            resta.valoracion = this.promedio
          } 
          else {
            resta.numValoraciones = 0
            resta.valoracion = 0
          }

        })
    }


}