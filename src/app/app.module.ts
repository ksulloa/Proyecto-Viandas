import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { MariscosComponent } from './componentes/platos/mariscos/mariscos.component';
import { AsadosComponent } from './componentes/platos/asados/asados.component';
import { BaresComponent } from './componentes/platos/bares/bares.component';
import { ComidatradicionalComponent } from './componentes/platos/comidatradicional/comidatradicional.component';
import { PlatosComponent } from './componentes/platos/platos.component';
import { AgregarPlatillosComponent } from './componentes/agregar-platillos/agregar-platillos.component';
import { AgregarLocalComponent } from './componentes/agregar-local/agregar-local.component';
import { Felicitaciones1Component } from './prueba/felicitaciones1/felicitaciones1.component';
import { AhorrosComponent } from './prueba/ahorros/ahorros.component';
import { FinanzasComponent } from './prueba/finanzas/finanzas.component';
import { FelicitacionesComponent } from './prueba/felicitaciones/felicitaciones.component';
import { PremiosComponent } from './prueba/premios/premios.component';
import { CalculadoraComponent } from './prueba/calculadora/calculadora.component';
import { PerdidaComponent } from './prueba/perdida/perdida.component';
import { PaseComponent } from './prueba/pase/pase.component';
import { NotasComponent } from './prueba/notas/notas.component';
import { BusComponent } from './prueba/bus/bus.component';
import { DomoticaComponent } from './prueba/domotica/domotica.component';
import { CronometroComponent } from './prueba/cronometro/cronometro.component';
import { AsistenciaComponent } from './prueba/asistencia/asistencia.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
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
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ComidaComponent } from './componentes/platos/comida/comida.component';


@NgModule({
  declarations: [AppComponent,
    BienvenidosComponent,
    LoginComponent,
    MenuComponent,
    ServiciosComponent,
    ValoracionComponent, 
    RegistroComponent,
    PerfilComponent,
    AsistenciaComponent,
    CronometroComponent,
    DomoticaComponent,
    BusComponent,
    NotasComponent,
    PaseComponent,
    PerdidaComponent,
    CalculadoraComponent,
    PremiosComponent,
    FelicitacionesComponent,
    FinanzasComponent,
    AhorrosComponent,
    Felicitaciones1Component,
    AgregarLocalComponent,
    AgregarPlatillosComponent,
    PlatosComponent,
    ComidatradicionalComponent,
    ComidaComponent,
    BaresComponent,
    AsadosComponent,
    MariscosComponent,
    FavoritosComponent
  
    ],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
  