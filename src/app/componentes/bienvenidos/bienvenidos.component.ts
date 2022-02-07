import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { UserI, Categoria } from './../../models/models.component';
import { FirestoreService } from './../../services/firestore.service';
import { MenuComponent } from './../menu/menu.component';
import { PopoverController, AlertController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.scss'],
})
export class BienvenidosComponent implements OnInit {

lista:string[];

login: boolean = false;
 rol: 'cliente'| 'admin'= null

 admin=false;

categorias: Categoria[]=[]

  constructor(public popoverController: PopoverController,
             private firestore:FirestoreService,
             public alertController: AlertController,
             private router: Router,
             private auth: AuthService,) {
               this.inicializar();
               this.getUidAdmin();
             }  

  

  ngOnInit() {

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
   this.getCategoria();
   }
   

 async  openMenu(ev: any){
    console.log('abrir menu')
    const menu = await this.popoverController.create({
      component: MenuComponent,
      translucent: true,
      event: ev
    });
    await menu.present();

    const { role } = await menu.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  inicializar(){
    this.lista =[ 
     'comida rapida',
     'asados',
     'mariscos',
     'comida tradicional',
     'bares'

    ];
  }
  buscar(ev: any){
    this.inicializar();

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.lista = this.lista.filter((item)=>{
     
      return (item.toLowerCase().indexOf(val.toLowerCase()) >-1);
    });
  }
}

async presentAlert() {
  const alert = await this.alertController.create({
  cssClass: 'my-custom-class',
  header: 'Reseña',
  subHeader: '',
  message: 'Parroquia rural de Cuenca es muy conocida por su gastronomía, siendo el plato más importante e interesante, el cuy. Este animal es un cobayo, tradicional de varios países de América del Sur. Este plato es preparado por familias.',
  buttons: ['OK']
  });
  alert.present();
  }
 
  loginApp(){
    this.login = true;
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
  getCategoria(){
    const path='categorias/'
    this.firestore.getCollection<Categoria>(path).subscribe(res =>{
      if(res){
        this.categorias = res;
  
      }
    })
  }
  getUidAdmin() {
    this.auth.stateAuth().subscribe( res => {
          if (res !== null) {
              if (res.uid === 'CFat4aSrjWPrJufqGoycmssR7i22')  {
                  this.admin = true;
              } else {
                 this.admin = false;
              }
          } else {
            this.admin = false;
          }
    });
  }
}
interface Bienvenidos{
imagen: string
}