import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {

  arrayMenus: {sopa: string, platofuerte: string, jugo: string, mesa: number, imagen: string} [];
  arrayColas: {colas:string, imagenColas: string}[];
  arrayJugos: {jugos: string, imagenJugos: string}[];
  
  constructor() { 

     console.log("estoy en el constructor");
     this.getServicios();
     this.arrayMenus = [
        {
          sopa: 'Andina',
          platofuerte: 'Burritos al pastor, arroz mexicano',
          jugo: 'piña',
          mesa: 3,
          imagen: 'https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg',
        
        
    
        },
        {
          sopa: 'Arveja con verde',
          platofuerte: 'Bistec de carne con papas fritas y arroz',
          jugo: 'limonada',
          mesa: 1,
          imagen: 'https://i.pinimg.com/originals/4d/3a/03/4d3a03035c8827ff041a31236bb14663.jpg',
          
    
        
        },
        {
          sopa: 'Locro de zapallo',
          platofuerte: 'Sudado de corvina, chifles, arroz',
          jugo: 'papaya',
          mesa: 6,
          imagen: 'https://micomidaperuana.com/wp-content/uploads/2019/07/receta-locro-con-arroz-1.jpg',
          
    
        },
      ]

      this.arrayColas = [
        {
          colas: 'COCA COLA',
          imagenColas: 'https://tiaecuador.vteximg.com.br/arquivos/ids/155901-1000-1000/2000367.jpg?v=636225933290600000',
        
        }
      ]

      this.arrayJugos = [
        {
          jugos: 'piña',
          imagenJugos: 'https://unaricareceta.com/wp-content/uploads/2020/05/capture-20200504-143811-1.jpg',
        }
      ]
    
  }

  ngOnInit() {
    console.log("se creo la vista");
    
  }

  getServicios(){
    console.log('estos son los menus ->', this.arrayMenus);
  
  }

  carrito(){
    console.log("añadir al carrito ")
  }

}
