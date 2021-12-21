import { UserI } from './../../models/models.component';
import { FirestoreService } from './../../services/firestore.service';
import { InteractionService } from './../../services/interaction.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

login: boolean = false;
 rol: 'cliente'| 'admin'= null

constructor(public popoverController: PopoverController,
  private router: Router,
  private auth: AuthService,
  private interaction: InteractionService,
  private firestore: FirestoreService,
  private popoover: PopoverController) {


    this.auth.stateUser().subscribe(res =>{
      if(res){
        console.log('permanece logueado');
        this.login = true;
        this.getDatosUser(res.uid)
      }
      else{
        console.log('no esta logueado');
        this.login= false;
        this.router.navigate(['/login'])
      }

    })
   }

ngOnInit() {}

irLogin(){
  console.log('di click en login');
  this.router.navigate(['/login'])
  this.popoover.dismiss();
  
}

irPerfil(){
  console.log('di click en perfil');
  this.router.navigate(['/perfil'])
  this.popoover.dismiss();
  
}

irInicio(){
  console.log('di click en inicio');
  this.router.navigate(['/inicio'])
  this.popoover.dismiss();
  
}

irServicios(){
  console.log('di click en servicios');
  this.router.navigate(['/servicios'])
  this.popoover.dismiss();
  
}

irValoracion(){
  console.log('di click en valoracion');
  this.router.navigate(['/valoracion'])
  this.popoover.dismiss();
  
}

loginApp(){
  this.login = true;
}

logout(){
  this.auth.logout()
  this.interaction.presentToast('sesion finalizada');
  this.router.navigate(['/login'])
}



getDatosUser(uid: string) {
  const path = 'Usuarios';
  const id = uid;
  this.firestore.getDoc<UserI>(path, id).subscribe( res => {
      console.log('datos -> ', res);
      if (res) {
        this.rol = res.perfil
       
      }
  })
}





}