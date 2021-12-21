import { InteractionService } from './../../services/interaction.service';
import { FirestoreService } from './../../services/firestore.service';
import { Pedidos } from './../../models/models.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
})
export class AjustesComponent implements OnInit {

  

data: Pedidos ={
  pedido1:{
    nombre: '',
  
    telefono: null
    },

    pedido2:{
    nombre: '',
    telefono: null
    },

    viandas: 'Tamalitos',
    id: '',
}

ajustes: any[] = [];

constructor(private database: FirestoreService,
  private interaction: InteractionService) { }

ngOnInit() {
console.log('hola estamois en ajustes'); 
}

leerAjustesSecretos() {
const path = 'Ajustes';
this.database.getCollection(path).subscribe( (res) => {
console.log(' leerAjustesSecretos -> ', res);
this.ajustes = res;
});
}

crearNuevoUsuario() {
this.interaction.presentLoading('Guardando...');

const path = 'Usuarios';
const id = this.database.getId();
this.data.id = id;
this.database.createDoc(this.data, path, id).then( () => {
console.log('guardado con exito -> ');
this.interaction.closeLoading();
this.interaction.presentToast('Guardado con éxito')
} )
}

}
