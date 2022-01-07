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
import { ServiceWorkerModule } from '@angular/service-worker';


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
    AgregarLocalComponent
  
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
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
  