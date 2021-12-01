import { PerfilComponent } from './componentes/perfil/perfil.component';
import { CarritosComponent } from './componentes/carritos/carritos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { environment } from './../environments/environment';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { ValoracionComponent } from './componentes/valoracion/valoracion.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [AppComponent,
    BienvenidosComponent,
    LoginComponent,
    MenuComponent,
    ServiciosComponent,
    ValoracionComponent, 
    RegistroComponent,
    CarritosComponent, 
    PerfilComponent
    ],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
  