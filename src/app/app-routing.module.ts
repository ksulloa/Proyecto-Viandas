import { MenuEditPlatoComponent } from './componentes/menu-edit-plato/menu-edit-plato.component';
import { MenuEditComponent } from './componentes/menu-edit/menu-edit.component';
import { AgregarCategoriaComponent } from './componentes/agregar-categoria/agregar-categoria.component';
import { VerRestaurantesComponent } from './componentes/ver-restaurantes/ver-restaurantes.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
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
import { ValoracionComponent } from './componentes/valoracion/valoracion.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';



import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const uidAdmin = 'd1PEtAiS9oSEyOdRsKTH7gMxDDH3';



const routes: Routes = [
  {path: 'bienvenidos', component:  BienvenidosComponent, canActivate: [AngularFireAuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'perfil', component: PerfilComponent,  canActivate: [AngularFireAuthGuard]},
    {path: 'servicios', component: ServiciosComponent,  canActivate: [AngularFireAuthGuard]},
    {path: 'valoracion', component: ValoracionComponent,  canActivate: [AngularFireAuthGuard]},
    {path: 'registro', component: RegistroComponent},
    {path: 'agregar-local', component: AgregarLocalComponent,  canActivate: [AngularFireAuthGuard]},
    {path: 'agregar-platillos', component: AgregarPlatillosComponent,  canActivate: [AngularFireAuthGuard]},
    {path: 'platos', component: PlatosComponent,  canActivate: [AngularFireAuthGuard]},
    {path: 'favoritos', component: FavoritosComponent},
    {path: 'ver-Restaurantes', component: VerRestaurantesComponent},
    {path: 'menu-edit', component: MenuEditComponent},
    {path: 'menu-edit-plato', component: MenuEditPlatoComponent},
    {path: 'agregar-categoria', component: AgregarCategoriaComponent},
    {path: '', component: BienvenidosComponent},
    {path: '**', redirectTo:'bienvevidos', pathMatch:'full' },
    {path: 'asistencia',component: AsistenciaComponent },
    {path: 'cronometro',component: CronometroComponent },
    {path: 'domotica',component: DomoticaComponent},
    {path: 'bus',component: BusComponent},
    {path: 'calculadora', component: CalculadoraComponent},
    {path: 'notas',component: NotasComponent},
    {path: 'pase',component: PaseComponent},
    {path: 'perdida',component: PerdidaComponent},
    {path: 'premios',component: PremiosComponent},
    {path: 'felicitaciones',component: FelicitacionesComponent},
    {path: 'finanzas',component: FinanzasComponent},
    {path: 'ahorros',component: AhorrosComponent},
    {path: 'felicitaciones1',component: Felicitaciones1Component}
    
    
  
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
